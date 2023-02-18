import { Box, Card, Flex, Heading, Text, Link, Badge } from 'theme-ui'
import Icon from '@hackclub/icons'
import { useRouter } from 'next/router'
import { buildRoute } from '../lib/utils'

export function InternalCard({
  item,
  onMobile,
  onHover,
  onHoverLeave,
  categories,
  query,
  sx = {}
}) {
  const router = useRouter()
  return (
    <Card
      as="a"
      onClick={() =>
        router.push(
          buildRoute({
            route: item.url,
            categories,
            query
          }),
          undefined,
          {
            scroll: false
          }
        )
      }
      target={!item.external ? '' : '_blank'}
      sx={{
        textDecoration: 'none',
        alignSelf: 'flex-start',
        zIndex: 999,
        cursor: 'pointer',
        transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
        ':hover,:focus': {
          transform: 'scale(1.0225)'
        },
        p: '0 !important',
        ...(!onMobile && {
          '@media screen and (min-width: 992px)': {
            maxHeight: '175px',
            position: 'relative',
            '::after': {
              content: '""',
              position: 'absolute',
              zIndex: 1,
              bottom: 0,
              left: 0,
              pointerEvents: 'none',
              backgroundImage:
                'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)',
              width: '100%',
              height: '75px'
            },
            ':hover': {
              overflow: 'visible',
              zIndex: 1000,
              '::after': {
                display: 'none'
              },
              '.more': {
                display: 'none'
              }
            }
          }
        }),
        ...sx
      }}
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
    >
      <Box
        className="more"
        sx={{
          color: 'smoke',
          position: 'absolute',
          zIndex: 3,
          bottom: '-8px',
          left: 0,
          textAlign: 'center',
          width: '100%',
          display: onMobile ? 'none' : 'initial',
          '@media screen and (max-width: 991.98px)': {
            display: 'none'
          }
        }}
      >
        <Icon glyph="more" size={25} />
      </Box>
      <Card
        sx={{
          bg: 'white',
          p: [4, 'default'],
          '@media screen and (max-width: 991.98px)': {
            height: '100%'
          }
        }}
      >
        <Flex
          sx={{
            bg: item.color,
            color: 'white',
            mb: 3,
            p: 1,
            borderRadius: 6,
            width: 'fit-content'
          }}
        >
          {item.icon && <Icon glyph={item.icon} size={36} />}
        </Flex>
        <Text as="h3" sx={{ fontSize: '22px' }}>
          {item.name}
        </Text>
        <Text as="p" sx={{ fontSize: '20px' }}>
          {item.description}
        </Text>
        <Box sx={{ my: 2 }}>
          {item.current && (
            <Badge
              sx={{
                bg: 'dark',
                fontSize: [1, '16px', '20px'],
                borderRadius: 3,
                px: 2,
                mr: 2
              }}
            >
              #current
            </Badge>
          )}
          {item.category && (
            <Badge
              sx={{
                bg: item.color,
                fontSize: 1,
                borderRadius: 3,
                px: 2,
                mr: 2
              }}
            >
              #{item.category.toLowerCase()}
            </Badge>
          )}
        </Box>
      </Card>
    </Card>
  )
}

export function ExternalCard({
  item,
  onMobile,
  onHover,
  onHoverLeave,
  sx = {}
}) {
  return (
    <Card
      as="a"
      href={item.url}
      target={!item.external ? '' : '_blank'}
      sx={{
        textDecoration: 'none',
        alignSelf: 'flex-start',
        transition:
          'transform .125s ease-in-out, box-shadow .125s ease-in-out, height 2s ease-in-out',
        ':hover,:focus': {
          transform: 'scale(1.0225)'
        },
        p: '0 !important',
        ...(!onMobile && {
          '@media screen and (min-width: 992px)': {
            maxHeight: '175px',
            overflow: 'hidden',
            position: 'relative',
            '::after': {
              content: '""',
              position: 'absolute',
              zIndex: 1,
              bottom: 0,
              left: 0,
              pointerEvents: 'none',
              backgroundImage:
                'linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%)',
              width: '100%',
              height: '75px'
            },
            ':hover': {
              zIndex: 1000,
              overflow: 'visible',
              '::after': {
                display: 'none'
              },
              '.more': {
                display: 'none'
              }
            }
          }
        }),
        ...sx
      }}
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
    >
      <Box
        className="more"
        sx={{
          color: 'smoke',
          position: 'absolute',
          zIndex: 3,
          bottom: '-8px',
          left: 0,
          textAlign: 'center',
          width: '100%',
          display: onMobile ? 'none' : 'initial',
          '@media screen and (max-width: 991.98px)': {
            display: 'none'
          }
        }}
      >
        <Icon glyph="more" size={25} />
      </Box>
      <Card
        sx={{
          bg: 'white',
          p: [4, 'default'],
          '@media screen and (max-width: 991.98px)': {
            height: '100%'
          },
          height: onMobile ? '100%' : 'initial'
        }}
      >
        <Flex
          sx={{
            bg: item.color,
            color: 'white',
            mb: 3,
            p: 1,
            borderRadius: 6,
            width: 'fit-content'
          }}
        >
          {item.icon && <Icon glyph={item.icon} size={36} />}
        </Flex>
        <Text as="h3" sx={{ fontSize: '22px' }}>
          {item.name}
        </Text>
        <Text as="p" sx={{ fontSize: '20px' }}>
          {item.description}
        </Text>
        <Box sx={{ my: 2 }}>
          {item.current && (
            <Badge
              sx={{
                bg: 'dark',
                fontSize: [1, '16px', '20px'],
                borderRadius: 3,
                px: 2,
                mr: 2
              }}
            >
              #current
            </Badge>
          )}
          {item.category && (
            <Badge
              sx={{
                bg: item.color,
                fontSize: 1,
                borderRadius: 3,
                px: 2,
                mr: 2
              }}
            >
              #{item.category.toLowerCase()}
            </Badge>
          )}
        </Box>
      </Card>
    </Card>
  )
}

export default function InfoCard(props) {
  if (props.item.external) return <ExternalCard {...props} />
  else return <InternalCard {...props} />
}
