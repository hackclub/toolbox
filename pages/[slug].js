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
import FancyCard from '../components/FancyCard'
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

const isMobile = () => {
  let check = false
  ;(function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
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

  const [onMobile, setMobile] = useState(null)
  useEffect(() => {
    if (onMobile === null) setMobile(isMobile())
  }, [onMobile])

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
        ...(router.query.slug === 'home' && { shallow: true }),
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
        ...(router.query.slug === 'home' && { shallow: true }),
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
    setHover('')
    updateItems(queryCategories, queryQuery)
  }, [router.query])

  return (
    <Box sx={{ bg: 'sheet', minHeight: '100vh' }}>
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
            sx={{
              background: 'rgba(255, 255, 255, 0.5)',
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
              Join the Slack
            </Button>

            <Button
              variant="cta"
              as="a"
              href="https://apply.hackclub.com"
              target="_blank"
              sx={{
                pointerEvents: 'all',
                mt: 2,
                ml: 4,
                mb: [3, 0],
                '@media screen and (max-width: 991.98px)': {
                  display: 'none'
                }
              }}
            >
              Start Your Hack Club
            </Button>
          </Box>
        </Flex>
        <Map />
      </Box>
      <Container sx={{ py: 4, position: 'relative' }}>
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
              href="https://github.com/hackclub/toolbox/issues"
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
                      if (item.fancy)
                        return (
                          <FancyCard
                            onMobile={onMobile}
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
                          onMobile={onMobile}
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
    },
    revalidate: 60 * 60 * 24
  }
}
