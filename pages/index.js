import {
  Heading,
  Container,
  Flex,
  Box,
  Image,
  Input,
  Text,
  Button,
  Grid,
  Badge
} from 'theme-ui'
import Icon from '@hackclub/icons'
import manifest from '../manifest'
import {useState} from 'react'

function ControlButton({ children, sx }) {
  return (
    <Button
      variant="outline"
      sx={{
        borderRadius: 6,
        boxShadow: 'none',
        borderWidth: '1px',
        ':hover': {
          boxShadow: 'none',
          transform: 'none',
          bg: 'red',
          color: 'white',
          borderColor: 'red'
        },
        ...sx
      }}
    >
      {children}
    </Button>
  )
}

function Item({ name, label, icon, external, url, onClick }) {
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
        <Flex sx={{ bg: 'black', color: 'white', p: 1, borderRadius: 6 }}>
          <Icon glyph={icon} size="24" />
        </Flex>
      )}
      <Heading sx={{ ml: 2 }}>{name}</Heading>
      {label && (
        <Heading sx={{ fontWeight: 400, ml: 1 }} as="h3">
          ({label})
        </Heading>
      )}
      {external && (
        <Flex
          sx={{ position: 'absolute', top: 2, right: 2, color: 'placeholder' }}
        >
          <Icon glyph={external ? 'external' : 'expand'} size="24" />
        </Flex>
      )}
    </Flex>
  )
}

export default function Home() {
  const [currentData, setCurrentData] = useState(null)
  return (
    <Box sx={{ bg: 'sheet', minHeight: '100vh', pb: 5 }}>
      <Box
        sx={{
          position: 'fixed',
          display: currentData == null ? 'none' : 'block',
          width: '100vw',
          height: '100vh',
          bg: 'rgba(132, 146, 166, 0.4)',
          zIndex: '888',
          py: 4
        }}
      >
        <Container
          sx={{ bg: 'white', boxShadow: 'elevated', height: '100%', borderRadius: 9, py: 3, position: 'relative' }}
          variant="copy"
        >
          
          <Button onClick={() => setCurrentData(null)}>Close</Button>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundImage:
            'url(https://workshops.hackclub.com/api/patterns/personal_website/)'
        }}
      >
        <Container>
          <Image
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            alt="Hack Club flag"
            sx={{ width: [96, 128] }}
          />
        </Container>
        <Container
          sx={{ textAlign: 'center', mt: '-10px', pb: 5 }}
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
      <Container sx={{ py: 3, display: 'flex' }}>
        <Box sx={{ flexGrow: 1, pr: 3 }}>
          <Input
            placeholder="Search Tools"
            sx={{
              border: '1px dashed',
              textAlign: ['left', 'left', 'left'],
              width: '100%',
              height: '100%',
              bg: 'sheet'
            }}
          />
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <ControlButton
            variant="outline"
            sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            Everyone
          </ControlButton>
          <ControlButton
            variant="outline"
            sx={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}
          >
            Hack Clubbers
          </ControlButton>
          <ControlButton
            variant="outline"
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            Club Leaders
          </ControlButton>
        </Box>
      </Container>
      {manifest.map((section, index) => (
        <Container>
          <Heading py={3} mt={index == 0 ? 0 : 3} as="h1">
            {section.header}
          </Heading>
          <Grid columns={2}>
            {section.items.map(item => (
              <Item onClick={() => setCurrentData(item)} {...item} />
            ))}
          </Grid>
        </Container>
      ))}
    </Box>
  )
}
