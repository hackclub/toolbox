import '@hackclub/theme/fonts/reg-bold.css'
import { Box, Flex, Grid, Heading, Button, Image, Container } from 'theme-ui'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

let Map
if (!Map) {
  try {
    Map = dynamic(() => import('../../components/Map'), {
      ssr: false
    })
  } catch (err) {}
}

export default function Index() {

    if (!Map) {
    try {
        Map = dynamic(() => import('../../components/Map'), {
        ssr: false
        })
    } catch (err) {}
    }

    return (
        <div>
            <Box variant="wide" sx={{ position: 'relative', minHeight: 'max(350px,60vh)', height: '100%' }}>
                <Flex
                    sx={{
                        p: [0, 4],
                        justifyContent: 'space-between',
                        position: 'relative',
                        zIndex: 600,
                        pointerEvents: 'none',
                        flexDirection: 'column',
                        height: '100%',
                        minHeight: 'max(350px,60vh)'
                    }}
                >
                    {/* <Card
                        sx={{
                            background: 'primary',
                            p: 4,
                            borderRadius: [0, 'default']
                        }}
                    >
                        <Heading
                        as="h2"
                        sx={{
                            fontSize: 4,
                            color: 'white',
                            textShadow: 'card',
                            pointerEvents: 'all',
                            lineHeight: ['0.95', 'default'],
                            mb: 2
                        }}
                        >
                        Hack Club Toolbox
                        </Heading>
                        <Heading
                        as="h4"
                        sx={{
                            fontSize: 2,
                            fontWeight: 400,
                            color: 'white',
                            textShadow: 'card',
                            pointerEvents: 'all'
                        }}
                        >
                        Tools for hacking, learning, and leading.
                        </Heading>
                    </Card> */}
                    <Box sx={{
                        width: 'max-content',
                        ml: 'auto',
                        mt: 'auto',
                    }}>
                        <Button
                            variant="cta"
                            as="a"
                            href="https://hackclub.com/slack"
                            target="_blank"
                            sx={{
                                pointerEvents: 'all',
                                mt: 2,
                                mb: [3, 0],
                                // '@media screen and (max-width: 991.98px)': {
                                //     display: 'none'
                                // }
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
                                // '@media screen and (max-width: 991.98px)': {
                                //     display: 'none'
                                // }
                            }}
                        >
                            Start Your Hack Club
                        </Button>
                    </Box>
                </Flex>
                <Map height='max(350px,60vh)' />
            </Box>
            <Container
                sx={{
                    position: 'relative', 
                    height: 'calc(100vh - max(350px,60vh))',
                    padding: 48,
                    mx: 'auto',
                }}>
                <Box sx={{ ml: '1.5em', fontSize: 6 }} >
                    <Heading
                        as="h1"
                        sx={{
                            fontSize: 6,
                            fontWeight: 600,
                            mb: 3,
                            position: 'relative'
                        }}
                    >
                        <Image
                            src='/hammer-and-wrench.svg'
                            sx={{
                                fontSize: 6,
                                width: '1em',
                                // height: '2em',
                                height: 'max-content',
                                objectFit: 'contain',
                                position: 'absolute',
                                top: '50%',
                                left: '-0.5em',
                                transform: 'translateY(-50%) translateX(-100%)',
                            }}
                        />
                        The Hack Club Toolbox
                    </Heading>
                    <Flex sx={{ flexGrow: 1, gap: '8vw' }}>
                        <Heading
                            as="h4"
                            sx={{
                                fontSize: 2,
                                fontWeight: 400
                            }}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat
                        </Heading>
                        <Box sx={{ transform: 'rotateZ(-16deg)', flexShrink: 0, fontSize: 1 }}>
                            scroll&nbsp;down!
                            <br />
                            <Image src='/arrow.svg' sx={{ height: '4rem', width: '100%' }} ></Image>
                        </Box>
                    </Flex>
                </Box>
            </Container>
            <Box
                variant="wide"
                sx={{
                    height: '100vh',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 3,
                    padding: 3,
                }}
            >
                <a href="activities" style={{textDecoration: 'none'}}>
                    <Flex sx={{
                        background: 'yellow',
                        color: 'white',
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        px: 4,
                        position: 'relative',
                        zIndex: 1,
                        cursor: 'pointer',
                        ':hover': {
                            filter: 'brightness(1.05)'
                        },
                        ':hover > div': {
                            animationPlayState: 'running',
                        },
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'url(/tile-activities.png)',
                            backgroundSize: '300px',
                            opacity: 0.09,
                            zIndex: -1,
                            pointerEvents: 'none',
                            animation: 'move-bg 24s linear infinite forwards',
                            animationPlayState: 'paused',
                        }}></Box>
                        <Heading
                            as="h2"
                            sx={{
                                fontSize: 4,
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            Activities
                        </Heading>
                        <Heading
                            as="h4"
                            sx={{
                                fontSize: 2,
                                fontWeight: 'normal',
                                textAlign: 'center',
                            }}
                        >
                            Ready-to-use workshops, lessons, and coding challenges.
                        </Heading>
                    </Flex>
                </a>
                <a href="ysws" style={{textDecoration: 'none'}}>
                    <Flex sx={{
                        background: 'green',
                        color: 'white',
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        px: 4,
                        position: 'relative',
                        zIndex: 1,
                        cursor: 'pointer',
                        ':hover': {
                            filter: 'brightness(1.05)'
                        },
                        ':hover > div': {
                            animationPlayState: 'running',
                        },
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'url(/tile-ysws.png)',
                            backgroundSize: '300px',
                            backgroundPositionX: '50px',
                            opacity: 0.09,
                            zIndex: -1,
                            pointerEvents: 'none',
                            animation: 'move-bg 24s linear infinite forwards',
                            animationPlayState: 'paused',
                        }}></Box>
                        <Heading
                            as="h2"
                            sx={{
                                fontSize: 4,
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            You Ship, We Ship
                        </Heading>
                        <Heading
                            as="h4"
                            sx={{
                                fontSize: 2,
                                fontWeight: 'normal',
                                textAlign: 'center',
                            }}
                        >
                            A collection of specialized programs you can run as club meetings, with rewards for every project.
                        </Heading>
                    </Flex>
                </a>
                <a href="resources" style={{textDecoration: 'none'}}>
                    <Flex sx={{
                        background: 'blue',
                        color: 'white',
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        px: 4,
                        position: 'relative',
                        zIndex: 1,
                        cursor: 'pointer',
                        ':hover': {
                            filter: 'brightness(1.05)'
                        },
                        ':hover > div': {
                            animationPlayState: 'running',
                        },
                    }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: 'url(/tile-resources.png)',
                                backgroundSize: '300px',
                                backgroundPositionX: '-30px',
                                opacity: 0.09,
                                zIndex: -1,
                                pointerEvents: 'none',
                                animation: 'move-bg 24s linear infinite forwards',
                                animationPlayState: 'paused',
                            }}
                        ></Box>
                        <Heading
                            as="h2"
                            sx={{
                                fontSize: 4,
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            Resources
                        </Heading>
                        <Heading
                            as="h4"
                            sx={{
                                fontSize: 2,
                                fontWeight: 'normal',
                                textAlign: 'center',
                            }}
                        >
                            Practical support including free materials & leader community connections.
                        </Heading>
                    </Flex>
                </a>
                <a href="perks" style={{textDecoration: 'none'}}>
                    <Flex sx={{
                        background: 'red',
                        color: 'white',
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        px: 4,
                        position: 'relative',
                        zIndex: 1,
                        cursor: 'pointer',
                        ':hover': {
                            filter: 'brightness(1.05)'
                        },
                        ':hover > div': {
                            animationPlayState: 'running',
                        },
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'url(/tile-perks.png)',
                            backgroundSize: '300px',
                            backgroundPositionXX: '150px',
                            opacity: 0.09,
                            zIndex: -1,
                            pointerEvents: 'none',
                            animation: 'move-bg 24s linear infinite forwards',
                            animationPlayState: 'paused',
                        }}></Box>
                        <Heading
                            as="h2"
                            sx={{
                                fontSize: 4,
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            Perks
                        </Heading>
                        <Heading
                            as="h4"
                            sx={{
                                fontSize: 2,
                                fontWeight: 'normal',
                                textAlign: 'center',
                            }}
                        >
                            Exclusive benefits like premium software, industry AMAs, and event opportunities.
                        </Heading>
                    </Flex>
                </a>
            </Box>
        </div>
    );
}