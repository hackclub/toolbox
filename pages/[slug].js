import {
  Heading,
  Container,
  Flex,
  Box,
  Image,
  Input,
  Text,
  Link,
  Button,
  Grid,
  Badge
} from 'theme-ui'
import Icon from '@hackclub/icons'
import manifest from '../manifest'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
var GeoPattern = require('geopattern')

function ControlButton({
  children,
  sx,
  color,
  onClick,
  forUseBy,
  forUseByKey
}) {
  return (
    <Button
      variant="outline"
      sx={{
        borderRadius: 6,
        boxShadow: 'none',
        fontSize: ['4.5vw', 1],
        px: [2, 3],
        borderColor: color,
        color: forUseBy == forUseByKey ? 'white' : color,
        bg: forUseBy == forUseByKey ? color : 'none',
        borderWidth: '1px',
        ':hover': {
          boxShadow: 'none',
          transform: 'none',
          bg: color,
          color: 'white',
          borderColor: color
        },
        ...sx
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

function Item({ name, label, icon, external, url, onClick, forUseBy }) {
  return (
    <Flex
      as={external ? 'a' : 'div'}
      href={external ? url : ''}
      onClick={onClick}
      target="_blank"
      sx={{
        bg: 'white',
        cursor: 'pointer',
        p: 3,
        textDecoration: 'none',
        color: 'black',
        boxShadow: 'card',
        alignItems: 'center',
        borderRadius: 6,
        position: 'relative',
        transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
        ':hover,:focus': {
          transform: 'scale(1.0225)'
        }
      }}
    >
      {icon && (
        <Flex
          sx={{
            bg:
              forUseBy == 'everyone'
                ? 'red'
                : forUseBy == 'clubbers'
                ? 'orange'
                : 'blue',
            color: 'white',
            p: 1,
            borderRadius: 6
          }}
        >
          <Icon glyph={icon} size={24} />
        </Flex>
      )}
      <Heading sx={{ ml: '12px' }}>{name}</Heading>
      {label && (
        <Heading
          sx={{ fontWeight: 400, ml: 1, display: ['none', 'block'] }}
          as="h3"
        >
          ({label})
        </Heading>
      )}
      {external && (
        <Flex
          sx={{ position: 'absolute', top: 2, right: 2, color: 'placeholder' }}
        >
          <Icon glyph={external ? 'external' : 'expand'} size={24} />
        </Flex>
      )}
    </Flex>
  )
}

function Content({ currentData, setCurrentData }) {
  if (currentData == null) {
    return <></>
  }
  const router = useRouter()
  const Markdown = dynamic(() => import(`../content/${currentData.path}`))
  return (
    <Box
      sx={{
        position: 'fixed',
        display: currentData == null ? 'none' : 'block',
        width: '100vw',
        height: '100vh',
        zIndex: '888',
        py: [0, 4]
      }}
    >
      <Flex
        sx={{
          pt: 2,
          pb: 2,
          justifyContent: 'center',
          position: 'relative',
          zIndex: 998,
          display: ['block', 'none']
        }}
      >
        <Button
          variant="outline"
          sx={{
            color: 'white',
            borderColor: 'white',
            py: 0,
            px: 3,
            boxShadow: 'none'
          }}
          onClick={() => {
            router.push(
              {
                pathname: '/[slug]',
                query: { slug: 'home' }
              },
              undefined,
              { scroll: false }
            )
            setCurrentData(null)
          }}
        >
          Home
        </Button>
      </Flex>
      <Container
        sx={{
          bg: 'white',
          boxShadow: 'elevated',
          height: '100%',
          borderRadius: [0, 9],
          borderTopRightRadius: ['25px', 9],
          borderTopLeftRadius: ['25px', 9],
          p: 4,

          zIndex: '999',
          position: 'relative'
        }}
        variant="copy"
      >
        <Box sx={{ overflow: 'scroll', borderRadius: 9, height: '100%' }}>
          <Flex
            sx={{
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              p: 2,
              mb: 3,
              background: `url(${currentData.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 9,
              minHeight: '30vh'
            }}
          ></Flex>
          <Markdown />
          <Box
            sx={{
              borderTop: '0.5px solid',
              borderColor: 'placeholder',
              pb: 1,
              pt: 2,
              mt: 3,
              color: 'placeholder'
            }}
          >
            Want to make this page better?{' '}
            <Link
              href={`https://github.com/hackclub/toolbox/blob/move-away-from-nextra/content/${currentData.path}`}
              sx={{ color: 'placeholder' }}
              target="_blank"
            >
              Contribute on GitHub
            </Link>
            .
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          bg: 'rgba(132, 146, 166, 0.4)',
          zIndex: '888',
          top: 0
        }}
        onClick={() => {
          router.push(
            {
              pathname: '/[slug]',
              query: { slug: 'home' }
            },
            undefined,
            { scroll: false }
          )
          setCurrentData(null)
        }}
      ></Box>
    </Box>
  )
}

export default function Home({ currentItem, generalBG }) {
  const router = useRouter()
  const [currentData, setCurrentData] = useState(currentItem)
  const [searchQuery, setSearchQuery] = useState('')
  const [oldSearchQuery, setOldSearchQuery] = useState('')
  const [forUseBy, setForUseBy] = useState('')
  const shades = [0.5, 0.75]

  return (
    <Box sx={{ bg: 'sheet', minHeight: '100vh', pb: 4 }}>
      <Content currentData={currentData} setCurrentData={setCurrentData} />
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,${shades[0]}), rgba(0,0,0,${shades[1]})), ${generalBG}, linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1))`
        }}
      >
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,${shades[0]}), rgba(0,0,0,${shades[1]})), ${oldSearchQuery}`
          }}
        >
          <Container sx={{ display: 'flex' }}>
            <Image
              src="https://assets.hackclub.com/flag-orpheus-top.svg"
              alt="Hack Club flag"
              sx={{ width: [96, 128] }}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                pt: 3
              }}
            >
              <Flex
                sx={{
                  color: 'white',
                  ':hover': {
                    '> svg': {
                      transform: 'scale(1.065)'
                    }
                  }
                }}
                as="a"
                href="https://github.com/hackclub/toolbox"
              >
                <Icon glyph="github" />
              </Flex>
            </Box>
          </Container>
          <Container
            sx={{ textAlign: 'center', mt: '-10px', pb: [4, 5], pt: [3, 0] }}
            variant="wide"
          >
            <Heading
              as="h1"
              sx={{ fontSize: 6, color: 'snow', textShadow: 'card' }}
            >
              Hack Club Toolbox
            </Heading>
            <Heading
              as="h3"
              sx={{
                fontSize: 3,
                fontWeight: 400,
                color: 'snow',
                textShadow: 'card'
              }}
            >
              Tools for hacking, learning and leading.
            </Heading>
          </Container>
        </Box>
      </Box>
      <Container sx={{ py: 3, display: ['block', 'flex'] }}>
        <Box sx={{ flexGrow: 1, pr: [0, 3] }}>
          <Input
            placeholder="Search Tools"
            onChange={async e => {
              setSearchQuery(e.target.value.toUpperCase())
              setOldSearchQuery(
                GeoPattern.generate(
                  e.target.value.trim() === ''
                    ? (Math.random() + 1).toString(36).substring(7)
                    : e.target.value,
                  { baseColor: '#ec3750' }
                ).toDataUrl()
              )
            }}
            sx={{
              border: '1px dashed',
              textAlign: ['left', 'left', 'left'],
              width: '100%',
              height: '100%',
              bg: 'sheet'
            }}
          />
        </Box>
        <Box sx={{ textAlign: ['center', 'right'], mt: [3, 0] }}>
          <ControlButton
            variant="outline"
            color="red"
            forUseBy={forUseBy}
            forUseByKey="everyone"
            onClick={() =>
              forUseBy == 'everyone' ? setForUseBy('') : setForUseBy('everyone')
            }
            sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            Everyone
          </ControlButton>
          <ControlButton
            variant="outline"
            color="orange"
            forUseBy={forUseBy}
            forUseByKey="clubbers"
            onClick={() =>
              forUseBy == 'clubbers' ? setForUseBy('') : setForUseBy('clubbers')
            }
            sx={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}
          >
            Hack Clubbers
          </ControlButton>
          <ControlButton
            variant="outline"
            color="blue"
            forUseBy={forUseBy}
            forUseByKey="leaders"
            onClick={() =>
              forUseBy == 'leaders' ? setForUseBy('') : setForUseBy('leaders')
            }
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            Club Leaders
          </ControlButton>
        </Box>
      </Container>
      {manifest.map((section, index) => (
        <Container
          key={section.header}
          sx={{
            display:
              section.items
                .filter(item => item.name.toUpperCase().includes(searchQuery))
                .filter(item =>
                  forUseBy == 'everyone'
                    ? item.forUseBy == 'everyone'
                    : forUseBy == 'clubbers'
                    ? item.forUseBy != 'leaders'
                    : true
                ).length > 0
                ? 'block'
                : 'none'
          }}
        >
          <Heading
            py={3}
            mt={index == 0 ? 0 : 3}
            as="h1"
            sx={{ textAlign: ['center', 'left'] }}
          >
            {section.header}
          </Heading>
          <Grid columns={[1, 2]}>
            {section.items
              .filter(item => item.name.toUpperCase().includes(searchQuery))
              .filter(item =>
                forUseBy == 'everyone'
                  ? item.forUseBy == 'everyone'
                  : forUseBy == 'clubbers'
                  ? item.forUseBy != 'leaders'
                  : true
              )
              .map(item => (
                <Item
                  onClick={
                    item.path &&
                    (() => {
                      router.push(
                        {
                          pathname: '/[slug]',
                          query: { slug: item.path.replace('.mdx', '') }
                        },
                        undefined,
                        { scroll: false }
                      )
                      setCurrentData(item)
                    })
                  }
                  {...item}
                  key={item.name}
                />
              ))}
          </Grid>
        </Container>
      ))}
      <Box
        sx={{
          textAlign: 'center',
          py: 1,
          fontSize: 2,
          mt: 4
        }}
      >
        Want to make this page better?{' '}
        <Link href="https://github.com/hackclub/toolbox" target="_blank">
          Contribute on GitHub
        </Link>
        .
      </Box>
    </Box>
  )
}

export function getStaticPaths() {
  const paths = []
  manifest.map(section => {
    section.items.map(item => {
      if (item.path) {
        paths.push({ params: { slug: item.path.replace('.mdx', '') } })
      }
    })
  })
  paths.push({ params: { slug: 'home' } })
  return { paths, fallback: false }
}

export function getStaticProps({ params }) {
  const { slug } = params
  let currentItem = null
  manifest.map(section => {
    section.items.map(item => {
      if (item.path) {
        if (item.path.replace('.mdx', '') == slug) {
          currentItem = item
        }
      }
    })
  })
  return { props: { currentItem } }
}
