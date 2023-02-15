import '@hackclub/theme/fonts/reg-bold.css'
import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Grid,
  Flex,
  Heading,
  Button,
  Card,
  Input
} from 'theme-ui'
import Icon from '@hackclub/icons'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import InfoCard from '../components/Card'
import CurrentCard from '../components/CurrentCard'
import { filter } from 'fuzzaldrin'

let Map
if (!Map) {
  try {
    Map = dynamic(() => import('../components/Map'), {
      ssr: false
    })
  } catch (err) {}
}

const buildRoute = (categories, query = '') =>
  `/?category=${categories.join(',')}&query=${query}`

export default function Index({ everything, menu }) {
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

  const [categories, setCategories] = useState(
    router.query.category ? router.query.category.split(',') : []
  )
  const removeCategory = category => {
    router.push(
      buildRoute(
        categories.filter(x => x !== category),
        query
      ),
      undefined,
      {
        shallow: true,
        scroll: false
      }
    )
  }
  const addCategory = category => {
    if (categories.includes(category)) return
    router.push(buildRoute([...categories, category], query), undefined, {
      shallow: true,
      scroll: false
    })
  }

  const [query, setQuery] = useState(
    router.query.query ? router.query.query : ''
  )

  const color = category => {
    if (
      hover === category ||
      (categories.includes(category) && router.query.category)
    )
      return 'primary'
    return 'secondary'
  }

  useEffect(() => {
    // Update categories and query
    setCategories(router.query.category ? router.query.category.split(',') : [])
    setQuery(router.query.query ? router.query.query : '')
  }, [router])

  useEffect(() => {
    // Update items on query
    // What can we query? Upon looking at `manifest.js`:
    // * Category
    // * Name
    // * Description
    // * URL
    if (!query.length) {
      if (categories.length)
        setItems(everything.filter(item => categories.includes(item.category)))
      else setItems(everything)
      return
    }
    const categoryItems = categories.length
      ? everything.filter(item => categories.includes(item.category))
      : everything
    let results = Array.from(
      new Set([
        ...filter(categoryItems, query, { key: 'category' }),
        ...filter(categoryItems, query, { key: 'name' }),
        ...filter(categoryItems, query, { key: 'description' }),
        ...filter(categoryItems, query, { key: 'link' })
      ])
    )
    setItems(results)
  }, [query])

  useEffect(() => {
    if (categories.length)
      setItems(everything.filter(item => categories.includes(item.category)))
    else setItems(everything)
  }, [categories])

  return (
    <Box sx={{ bg: 'sheet', minHeight: '100vh', overflow: 'auto' }}>
      <Box variant="wide" sx={{ position: 'relative', minHeight: '500px' }}>
        <Flex
          sx={{
            p: [3, 4],
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 600,
            pointerEvents: 'none',
            '@media screen and (max-width: 991.98px)': {
              flexDirection: 'column-reverse'
            }
          }}
        >
          <Card variant="translucent" sx={{ p: 4, borderRadius: 'default' }}>
            <Heading
              as="h1"
              sx={{
                fontSize: 6,
                color: 'secondary',
                textShadow: 'card',
                pointerEvents: 'all',
                lineHeight: ['0.95', 'default'],
                my: [2, 'auto']
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
          <Box
            sx={{
              py: [0, 4],
              mb: [4, 0],
              '@media screen and (max-width: 991.98px)': {
                pt: 0
              },
              position: 'sticky',
              top: 0,
              alignSelf: 'start'
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
                router.push('/', undefined, {
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
            <Input
              placeholder="Search resources..."
              onChange={event => setQuery(event.target.value)}
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
              <Grid columns={[1, 3]} sx={{ gap: 3 }}>
                {items.map((item, idx) => {
                  if (item.category === 'Current')
                    return (
                      <CurrentCard
                        onHover={() => setHover(item.category)}
                        onHoverLeave={() => setHover('')}
                        key={idx}
                        item={item}
                        sx={{ height: '100%' }}
                      />
                    )
                  return (
                    <InfoCard
                      onHover={() => setHover(item.category)}
                      onHoverLeave={() => setHover('')}
                      key={idx}
                      item={item}
                      sx={{ height: '100%' }}
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
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export const getStaticProps = async () => {
  const { everything, categories } = require('../lib/content')
  return {
    props: {
      everything: await everything(),
      menu: await categories()
    }
  }
}
