import '@hackclub/theme/fonts/reg-bold.css'
import { useState, useEffect, useRef } from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import {
  Box,
  Container,
  Grid,
  Flex,
  Heading,
  Button,
  Card,
  Input,
  Badge
} from 'theme-ui'
import Icon from '@hackclub/icons'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import InfoCard from '../components/Card'
import CurrentCard from '../components/CurrentCard'
import { filter } from 'fuzzaldrin'
import { everything, categories } from '../lib/content'
import MDXContent from '../components/mdx/MDXContent'
import { buildRoute } from '../lib/utils'

let Map
if (!Map) {
  try {
    Map = dynamic(() => import('../components/Map'), {
      ssr: false
    })
  } catch (err) {}
}

export default function Index({ everything = [], menu, source }) {
  const router = useRouter()

  if (!Map) {
    try {
      Map = dynamic(() => import('../components/Map'), {
        ssr: false
      })
    } catch (err) {}
  }

  const [hover, setHover] = useState('')

  const [items, setItems] = useState([])
  const updateItems = (categories, query) => {
    let newItems = categories.length
      ? everything.filter(item => categories.includes(item.category))
      : everything
    if (query)
      newItems = Array.from(
        new Set([
          ...filter(newItems, query, { key: 'category' }),
          ...filter(newItems, query, { key: 'name' }),
          ...filter(newItems, query, { key: 'description' }),
          ...filter(newItems, query, { key: 'link' })
        ])
      )
    setItems(newItems)
  }

  const color = category => {
    if (
      hover === category ||
      (categories.includes(category) && router.query.category)
    )
      return 'primary'
    return 'secondary'
  }

  const [categories, setCategories] = useState([])
  const addCategory = category => {
    setCategories([...categories, category])
    router.replace(
      buildRoute({ categories: [...categories, category], query }),
      undefined,
      {
        shallow: true,
        scroll: false
      }
    )
  }
  const removeCategory = category => {
    setCategories(categories.filter(x => x !== category))
    router.replace(
      buildRoute({ categories: categories.filter(x => x !== category), query }),
      undefined,
      {
        shallow: true,
        scroll: false
      }
    )
  }

  const [query, setQuery] = useState('')
  const updateQuery = newQuery => {
    setQuery(newQuery)
    router.replace(buildRoute({ categories, query: newQuery }), undefined, {
      shallow: true,
      scroll: false
    })
  }

  useEffect(() => {
    const queryCategories = router.query.category
      ? router.query.category.split(',')
      : []
    const queryQuery = router.query.query ? router.query.query : ''
    setCategories(queryCategories)
    setQuery(queryQuery)
    updateItems(queryCategories, queryQuery)
  }, [router.query])

  return (
    <Box sx={{ bg: 'sheet', minHeight: '100vh', overflow: 'auto' }}>
      <Box variant="wide" sx={{ position: 'relative', minHeight: '500px' }}>
        <Flex
          sx={{
            p: [0, 4],
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 600,
            pointerEvents: 'none',
            '@media screen and (max-width: 991.98px)': {
              flexDirection: 'column-reverse'
            }
          }}
        >
          <Card
            variant="translucent"
            sx={{
              p: 4,
              borderRadius: [0, 'default']
            }}
          >
            <Heading
              as="h1"
              sx={{
                fontSize: 6,
                color: 'secondary',
                textShadow: 'card',
                pointerEvents: 'all',
                lineHeight: ['0.95', 'default'],
                mb: 2
              }}
            >
              Hack Club Toolbox
            </Heading>
            <Heading
              as="h3"
              sx={{
                fontSize: 4,
                fontWeight: 400,
                color: 'secondary',
                textShadow: 'card',
                pointerEvents: 'all'
              }}
            >
              Tools for hacking, learning, and leading.
            </Heading>
          </Card>
          <Box>
            <Button
              variant="cta"
              as="a"
              href="https://hackclub.com/slack"
              target="_blank"
              sx={{
                pointerEvents: 'all',
                mt: 2,
                mb: [3, 0],
                '@media screen and (max-width: 991.98px)': {
                  display: 'none'
                }
              }}
            >
              Join the Hack Club Slack &rarr;
            </Button>
          </Box>
        </Flex>
        <Map />
      </Box>
      <Container sx={{ py: 4 }}>
        <Grid
          columns={[1, '2fr 10fr']}
          sx={{
            '@media screen and (max-width: 991.98px)': {
              display: 'block'
            },
            position: 'relative'
          }}
        >
          <Flex
            sx={{
              py: [0, 4],
              mb: [4, 0],
              '@media screen and (min-width: 991.98px)': {
                display: 'none'
              },
              flexWrap: 'wrap',
              gap: 1
            }}
          >
            <Badge
              as="a"
              onClick={() =>
                router.push(buildRoute({ categories: [], query }), undefined, {
                  shallow: true,
                  scroll: false
                })
              }
              sx={{
                cursor: 'pointer',
                fontSize: 1,
                bg: categories.length ? 'secondary' : 'primary',
                px: 2,
                py: 1,
                borderRadius: 'default',
                transition: 'color 0.2s'
              }}
            >
              All
            </Badge>
            {menu.map((category, idx) => (
              <Badge
                as="a"
                onClick={() =>
                  categories.includes(category.category)
                    ? removeCategory(category.category)
                    : addCategory(category.category)
                }
                key={idx}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 2,
                  cursor: 'pointer',
                  fontSize: 1,
                  bg: color(category.category),
                  px: 2,
                  py: 1,
                  borderRadius: 'default',
                  transition: 'color 0.2s'
                }}
              >
                <span>{category.category}</span>
                {categories.includes(category.category) && <span>&times;</span>}
              </Badge>
            ))}
          </Flex>
          <Box
            sx={{
              py: [0, 4],
              mb: [4, 0],
              '@media screen and (max-width: 991.98px)': {
                display: 'none'
              },
              '@media screen and (min-width: 992px)': {
                position: 'sticky',
                top: 0,
                alignSelf: 'start'
              }
            }}
          >
            <Heading
              as="h3"
              sx={{
                fontSize: 2,
                textTransform: 'uppercase',
                color: 'muted'
              }}
            >
              Categories
            </Heading>
            <Flex
              as="a"
              onClick={() =>
                router.push(buildRoute({ categories: [], query }), undefined, {
                  shallow: true,
                  scroll: false
                })
              }
              sx={{
                alignItems: 'center',
                cursor: 'pointer',
                gap: 2,
                mt: 3,
                color: categories.length ? 'secondary' : 'primary',
                textDecoration: 'none',
                transition: 'color 0.2s',
                ':hover': {
                  color: 'primary'
                },
                width: 'fit-content'
              }}
            >
              <Flex
                sx={{
                  bg: 'smoke',
                  color: 'secondary',
                  p: 1,
                  borderRadius: 6
                }}
              >
                <Icon glyph="list" size={24} />
              </Flex>
              <Heading as="h4" sx={{ color: 'inherit', fontSize: 3 }}>
                All
              </Heading>
            </Flex>
            {menu.map((category, idx) => (
              <Flex
                as="a"
                onClick={() =>
                  categories.includes(category.category)
                    ? removeCategory(category.category)
                    : addCategory(category.category)
                }
                key={idx}
                sx={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: 2,
                  mt: 3,
                  color: color(category.category),
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  ':hover': {
                    color: 'primary'
                  },
                  width: 'fit-content'
                }}
              >
                <Flex
                  sx={{
                    bg: category.color,
                    color: 'white',
                    p: 1,
                    borderRadius: 6
                  }}
                >
                  <Icon glyph={category.icon} size={24} />
                </Flex>
                <Heading as="h4" sx={{ color: 'inherit', fontSize: 3 }}>
                  {category.category}
                </Heading>
              </Flex>
            ))}
            <Flex
              as="a"
              href="https://github.com/hackclub/toolbox/edit/main/manifest.js"
              target="_blank"
              sx={{
                alignItems: 'center',
                gap: 2,
                mt: 4,
                color: 'secondary',
                textDecoration: 'none',
                transition: 'color 0.2s',
                ':hover': {
                  color: 'primary'
                },
                width: 'fit-content'
              }}
            >
              <Flex
                sx={{
                  bg: 'smoke',
                  color: 'secondary',
                  p: 1,
                  borderRadius: 6
                }}
              >
                <Icon glyph="plus" size={24} />
              </Flex>
              <Heading as="h4" sx={{ color: 'inherit', fontSize: 3 }}>
                Suggest
              </Heading>
            </Flex>
          </Box>
          <Box>
            {everything.length === 0 ? (
              <MDXContent
                source={source}
                categories={categories}
                query={query}
              />
            ) : (
              <>
                <Input
                  placeholder="Search resources..."
                  onChange={event => updateQuery(event.target.value)}
                  sx={{
                    border: '1px dashed',
                    mb: 3,
                    textAlign: ['left', 'left', 'left'],
                    width: '100%',
                    bg: 'sheet',
                    fontSize: 2,
                    px: [null, 3]
                  }}
                  value={query}
                />
                {items.length > 0 ? (
                  <Grid columns={[1, 2, 3]} sx={{ gap: 3 }}>
                    {items.map((item, idx) => {
                      if (item.category === 'Current')
                        return (
                          <CurrentCard
                            onHover={() => setHover(item.category)}
                            onHoverLeave={() => setHover('')}
                            key={idx}
                            item={item}
                            sx={{
                              height: '100%',
                              '@media screen and (min-width: 64em)': {
                                mb:
                                  items[items.length - 1] === item
                                    ? 6
                                    : 'default'
                              }
                            }}
                          />
                        )
                      return (
                        <InfoCard
                          onHover={() => setHover(item.category)}
                          onHoverLeave={() => setHover('')}
                          key={idx}
                          item={item}
                          categories={categories}
                          query={query}
                          sx={{
                            height: '100%',
                            '@media screen and (min-width: 64em)': {
                              mb:
                                items[items.length - 1] === item ? 6 : 'default'
                            }
                          }}
                        />
                      )
                    })}
                  </Grid>
                ) : (
                  <Heading as="h1" sx={{ mt: 4 }}>
                    Couldn't find what you were looking for. Try making a
                    suggestion!
                  </Heading>
                )}
              </>
            )}
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export const getStaticPaths = async () => {
  const paths = (await everything())
    .filter(item => !item.external)
    .map(item => ({
      params: {
        slug: item.url.replace('/', '').replace('.mdx', '')
      }
    }))
  return {
    paths: [...paths, { params: { slug: 'home' } }],
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  if (slug && slug !== 'home') {
    const fs = require('fs')
    const path = require('path')
    const source = fs.readFileSync(
      path.join(process.cwd(), 'content', `${slug}.mdx`)
    )
    return {
      props: {
        source: await serialize(source),
        menu: await categories()
      }
    }
  }
  return {
    props: {
      everything: await everything(),
      menu: await categories()
    }
  }
}
