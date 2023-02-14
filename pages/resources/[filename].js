import '@hackclub/theme/fonts/reg-bold.css'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import theme from '@hackclub/theme'
import styled from '@emotion/styled'
import Code from '../../components/mdx/Code'
import Alert from '../../components/mdx/Alert'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {
  Flex,
  Card,
  Heading,
  Button,
  Container,
  Grid,
  Box,
  Link,
  BaseStyles
} from 'theme-ui'
import Icon from '@hackclub/icons'

let Map
if (!Map) {
  try {
    Map = dynamic(() => import('../../components/Map'), {
      ssr: false
    })
  } catch (err) {}
}

const components = {
  Code,
  Alert,
  a: children => <a {...children} target="_blank" />
}

export const Styled = styled(BaseStyles)`
  font-size: 1.25rem;
  font-family: inherit;

  a {
    word-break: break-word;
  }

  .heading a {
    color: inherit;
    text-decoration: none;
  }

  @media print {
    font-size: 1rem;
    color: black;

    pre,
    code,
    pre code span {
      background-color: ${theme.colors.snow};
      color: black;
      font-size: 1rem !important;
    }

    a {
      color: ${theme.colors.blue};
    }
    a::after {
      content: ' (' attr(href) ') ';
    }
  }

  .details-video summary {
    list-style: none;
  }

  .details-video summary::-webkit-details-marker {
    // I hate safari
    display: none !important;
  }

  .details-video-summary {
    cursor: pointer;
    display: flex;
    gap: 6px;
    align-items: center;
    font-weight: bold;
    padding: 5px 0;
  }

  .details-video-caret {
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 8px solid currentColor; // Create a right-facing triangle
  }

  details[open] .details-video-caret {
    transform: rotate(90deg);
  }

  .video-summary-camera-icon {
    fill: currentColor;
    flex: 0 0 auto;
  }

  .details-video video {
    max-width: 100%;
  }
`

export default function Resource({ source, categories }) {
  const router = useRouter()

  if (!Map) {
    try {
      Map = dynamic(() => import('../../components/Map'), {
        ssr: false
      })
    } catch (err) {}
  }

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
            {categories.map((category, idx) => (
              <Flex
                as="a"
                onClick={() => router.push(`/?category=${category}`)}
                key={idx}
                sx={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: 2,
                  mt: 3,
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
          <Box sx={{ mt: [0, 1] }}>
            <Link
              onClick={() =>
                router.push('/', undefined, { shallow: true, scroll: false })
              }
              sx={{ cursor: 'pointer', fontSize: 2 }}
            >
              &larr; Back to all resources
            </Link>
            <Styled as="article" sx={{ mt: 3 }}>
              <MDXRemote {...source} components={components} />
            </Styled>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export const getStaticPaths = async () => {
  const { everything } = require('../../lib/content')
  return {
    paths: (await everything())
      .filter(item => !item.external)
      .map(item => ({
        params: {
          filename: item.url.replace('resources/', '')
        }
      })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { categories } = require('../../lib/content')
  const { filename } = params
  const fs = require('fs')
  const path = require('path')
  const source = fs.readFileSync(path.join(process.cwd(), 'content', filename))
  return {
    props: {
      source: await serialize(source),
      categories: await categories()
    }
  }
}
