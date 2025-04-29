import '@hackclub/theme/fonts/reg-bold.css'
import { filter } from 'fuzzaldrin'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Container, Grid, Heading, Input, Image, Link } from 'theme-ui'
import InfoCard from '../../components/Card'
import FancyCard from '../../components/FancyCard'
import { everything } from '../../lib/content'
import { buildRoute } from '../../lib/utils'


export const categories = [
  {
    id: "activities", // slug, images, etc
    category: "Activities", // category name in manifest.json
    title: "Activities", // displayed title
    color: "yellow",
    headerStyle: "right",
  },
  {
    id: "ysws",
    category: "YSWS",
    title: "You Ship, We Ship",
    color: "green",
    headerStyle: "left",
  },
  {
    id: "resources",
    category: "Resources",
    title: "Resources",
    color: "blue",
    headerStyle: "left",
  },
  {
    id: "perks",
    category: "Perks",
    title: "Perks",
    color: "red",
    headerStyle: "right",
  },
]


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

export default function ToolboxPage({ everything = [] }) {
    const router = useRouter()

    if (categories.indexOf(router.query.slug) != -1) {
      router.replace("/404", undefined, {
        shallow: true,
        scroll: false
      })
      return
    }

    console.log('asdfasdfasdf', router.query.slug);
    const { id, category, title, color, headerStyle } = categories.find(category => category.id == router.query.slug)

    const [items, setItems] = useState([])
    const updateItems = (query) => {
      let newItems = everything
      
      if (query)
        newItems = Array.from(
          new Set([
            ...filter(newItems, query, { key: 'name' }),
            ...filter(newItems, query, { key: 'description' }),
            ...filter(newItems, query, { key: 'link' })
          ])
        )
      setItems(newItems.filter(item => item.category == category))
    }

    const [onMobile, setMobile] = useState(null)
    useEffect(() => {
      if (onMobile === null) setMobile(isMobile())
    }, [onMobile])
  
    const [query, setQuery] = useState('')
    const updateQuery = newQuery => {
      setQuery(newQuery)
      router.replace(buildRoute({ route: router.pathname, query: newQuery, categories: [] }), undefined, {
        shallow: true,
        scroll: false
      })
    }
  
    useEffect(() => {
      const queryQuery = router.query.query ? router.query.query : ''
      setQuery(queryQuery)
      updateItems(queryQuery)
    }, [router.query])

    return (
        <div>
            <Box sx={{ height: 'max-content', maxWidth: '100%', overflowX: 'clip' }} >              
              <Box
                variant='wide'
                sx={{
                  position: 'relative',
                  rotate: headerStyle == 'left' ? '12deg' : '-12deg',
                  width: '150vw',
                  transform: headerStyle == 'right' ? 'translateY(-8rem)' : 'none',
                  mt: '-15vw',
                  transformOrigin: '50% 50%',
                }}
              >
                <Box
                  variant='wide'
                  sx={{
                    height: '20rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: 'translateX(-16rem)',
                  }}
                >
                  <Box sx={{
                    position: 'absolute',
                    inset: '-16rem',
                    bottom: 0,
                    background: color,
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    inset: '-16rem',
                    backgroundImage: `url(/tile-${id}.png)`,
                    backgroundSize: '300px',
                    opacity: 0.09,
                    rotate: headerStyle == 'left' ? '-12deg' : '12deg',
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    inset: '-16rem',
                    bottom: 0,
                    background: '#000000',
                    opacity: 0.1,
                  }} />
                </Box>
                <Box
                  sx={{
                    width: 'max-content',
                    transform: 'translateX(-50%)',
                    background: color,
                  }}
                >
                  {
                    [...Array(10)].map((_, i) =>
                      <Heading
                        as="none"
                        sx={{
                          fontSize: 7,
                          mx: 3,
                          color: "#000000",
                          opacity: i == (headerStyle == 'left' ? 6 : 5) ? 0.3 : 0.1
                        }}
                      >{id.toUpperCase()}</Heading>
                    )
                  }
                </Box>
              </Box>
            </Box>
            
            {/* big background icon */}
            <Image 
              src={`/${id}.svg`}
              sx={{
                position: 'absolute',
                top: '-8rem',
                left: headerStyle == 'left' ? '-16rem' : 'unset',
                right: headerStyle == 'right' ? '-16rem' : 'unset',
                opacity: 0.03,
                zIndex: '-1',
                width: '80%',
              }}
            />

            <Container sx={{ px: 6 }}>
              <Box sx={{ fontSize: 7, height: '1em' }}>
                <Heading
                    as="h1"
                    sx={{
                        fontSize: 7,
                        ml: 'auto',
                        width: 'max-content',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                  <Link href='..' sx={{
                    display: 'inline-block',
                    height: '0.8em',
                    opacity: 0.5,
                  }}>
                    <Image src='/back.svg' sx={{ height: '0.8em' }} />
                  </Link>
                  {title}
                </Heading>
              </Box>
                <Heading
                    as="h4"
                    sx={{
                        fontSize: 2,
                        fontWeight: 'normal',
                        mb: 3,
                    }}
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
                </Heading>
                <Box>
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
                          key={idx}
                          item={item}
                          categories={[]}
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
          </Box>
            </Container>
        </div>
    )
}

export const getStaticPaths = async () => {
  const paths = categories.map(category => ({
    params: { slug: category.id }
  }))
  return {
    paths: [...paths, { params: { slug: 'home-new' } }],
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
    // const { slug } = params
    // if (slug && slug !== 'home') {
    //   const fs = require('fs')
    //   const path = require('path')
    //   const source = fs.readFileSync(
    //     path.join(process.cwd(), 'content', `${slug}.mdx`)
    //   )
    //   return {
    //     props: {
    //       source: await serialize(source),
    //       menu: (await categories()).filter(cat => cat.category !== "Highlighted") // don't show highlighted on the sidebar
    //     }
    //   }
    // }
    return {
      props: {
        everything: await everything(),
      },
      revalidate: 60 * 60 * 24
    }
}