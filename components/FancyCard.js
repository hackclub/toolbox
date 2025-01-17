import { Box, Card, Image, Link, Text } from 'theme-ui'
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
    background,
    titleColor,
    descriptionColor,
    arrowColor,
    name,
    description,
    img,
    url
  } = item
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
            background: background.includes('linear-gradient')
              ? ''
              : background,
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
                  backgroundColor: background.includes('linear-gradient')
                    ? 'black'
                    : background,
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
            <Icon glyph="more" size={25} />
          </Box>
          <Card
            sx={{
              background: background.includes('linear-gradient')
                ? 'black'
                : background,
              color: 'white',
              padding: [4, '20px !important'],
              '@media screen and (max-width: 992px)': {
                height: '100%'
              },
              height: onMobile ? '100%' : 'initial'
            }}
          >
            <Image
              src={img}
              sx={{
                width: ['50px', '58px'],
                height: ['50px', '58px'],
                objectFit: 'contain'
              }}
            />
            <Text as="h3" sx={{ color: titleColor, fontSize: '22px' }}>
              {name}
            </Text>
            <Text as="p" sx={{ color: descriptionColor, fontSize: '20px' }}>
              {description}
            </Text>
          </Card>
        </Card>
      </Link>
    </Box>
  )
}
