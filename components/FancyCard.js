import { Badge, Box, Card, Image, Link, Text } from 'theme-ui'
import Icon from '@hackclub/icons'
import { useState } from 'react'

export default function FancyCard({
  item,
  sx = {},
  onMobile,
  onHover,
  onHoverLeave
}) {
  const {
    background: rawBackground,
    backgroundSize,
    titleColor,
    descriptionColor,
    arrowColor,
    name,
    description,
    img,
    icon,
    url,
    tag,
    slack
  } = item
  const isUrl = rawBackground && (rawBackground.startsWith('http') || rawBackground.startsWith('/'))
  const background = isUrl ? `url(${rawBackground}) center/cover no-repeat` : rawBackground
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
        '&:hover': { transform: 'scale(1.0625)', zIndex: 1000 },
        '.icon': {
          transition: 'transform 0.25s ease-in-out, opacity 0.43s ease-in-out'
        },
        ':hover,:focus': {
          '.icon': {
            transform: 'translateX(28px) translateY(-28px)',
            opacity: 0
          }
        },
        ...sx
      }}
    >
      <Link
        sx={{
          textDecoration: 'none',
          '&:hover': { cursor: 'pointer' },
          '&:hover svg': { opacity: 0.5 },
          ...(onMobile && {
            display: 'inline-block',
            height: '100%'
          })
        }}
        href={url}
        target="_blank"
        rel="noopener"
      >
        <Card
          // variant="interactive"
          onMouseOver={() => onHover()}
          onMouseLeave={() => onHoverLeave()}
          sx={{
            mr: 3,
            background: background,
            ...(backgroundSize && { backgroundSize }),
            position: 'relative',
            p: '0 !important',
            width: '100%',
            '@media screen and (max-width: 992px)': {
              height: '100%'
            },
            height: onMobile ? '100%' : 'initial',
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
                  background: background,
                  ...(backgroundSize && { backgroundSize }),
                  width: '100%',
                  height: '25px'
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
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 2,
              right: 2,
              opacity: 0.3,
              fontSize: [1, '16px', '20px']
            }}
          >
            <Icon
              glyph="external"
              size={32}
              color={arrowColor || "#E9E9E9"}
              className="icon"
            />
          </Box>
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
              '@media screen and (max-width: 992px)': {
                display: 'none'
              },
              display: onMobile ? 'none' : 'initial'
            }}
          >
            <Icon glyph="more" size={25} color={descriptionColor} opacity={0.7} />
          </Box>
          <Card
            sx={{
              background: background,
              ...(backgroundSize && { backgroundSize }),
              color: 'white',
              padding: [4, '20px !important'],
              '@media screen and (max-width: 992px)': {
                height: '100%'
              },
              height: onMobile ? '100%' : 'initial'
            }}
          >
            {img ? (
              <Image
                src={img}
                sx={{
                  width: ['50px', '58px'],
                  height: ['50px', '58px'],
                  objectFit: 'contain'
                }}
              />
            ) : icon ? (
              <Icon
                glyph={icon}
                size={58}
                color={titleColor || '#fff'}
              />
            ) : null}
            <Text as="h3" sx={{ color: titleColor, fontSize: '22px' }}>
              {name}
            </Text>
            <Text as="p" sx={{ color: descriptionColor, fontSize: '20px' }}>
              {description}
            </Text>
            {tag && (
              <Badge
                sx={{
                  bg: titleColor,
                  fontSize: 1,
                  borderRadius: 3,
                  px: 2,
                  mt: 2,
                  display: 'inline-block'
                }}
              >
                #{tag}
              </Badge>
            )}
            {slack && (
              <Box sx={{ mt: 2 }}>
                <Link
                  href={`https://hackclub.slack.com/archives/${slack.id}`}
                  target="_blank"
                  rel="noopener"
                  onClick={e => e.stopPropagation()}
                  sx={{
                    fontSize: 1,
                    color: descriptionColor || '#fff',
                    opacity: 0.85,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline', opacity: 1 }
                  }}
                >
                  #{slack.name}
                </Link>
              </Box>
            )}
          </Card>
        </Card>
      </Link>
    </Box>
  )
}
