import { Box, Card, Image, Link, Text } from 'theme-ui'
import Icon from '@hackclub/icons'
import { useState } from 'react'

export default function CurrentCard({ item, sx = {}, onHover, onHoverLeave }) {
  const {
    background,
    titleColor,
    descriptionColor,
    title,
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
          '&:hover svg': { opacity: 0.5 }
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
            backgroundColor: background,
            position: 'relative',
            p: '0 !important',
            width: '100%',
            maxHeight: '175px',
            position: 'relative',
            '::after': {
              content: '""',
              position: 'absolute',
              zIndex: 1,
              bottom: 0,
              left: 0,
              pointerEvents: 'none',
              backgroundColor: background,
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
          }}
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
              width: '100%'
            }}
          >
            <Icon glyph="more" size={25} />
          </Box>
          <Card
            sx={{
              bg: background,
              color: 'white',
              padding: [4, '20px !important']
            }}
          >
            <Image
              src={img}
              sx={{
                width: ['50px', '58px'],
                height: ['50px', '58px']
              }}
            />
            <Text as="h3" sx={{ color: titleColor, fontSize: '22px' }}>
              {title}
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
