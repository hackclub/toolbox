import '@hackclub/theme/fonts/reg-bold.css'
import dynamic from 'next/dynamic'
import { Box, Button, Container, Flex, Heading, Image, Link } from 'theme-ui'

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
            <Flex sx={{
                flexDirection: 'column',
                width: '100%',
                minHeight: '100vh',
            }}>
                <Flex variant="wide" sx={{ position: 'relative', height: '100%', flexGrow: 1, minHeight: '400px' }}>
                    <Flex
                        sx={{
                            p: 4,
                            justifyContent: 'space-between',
                            position: 'relative',
                            zIndex: 600,
                            pointerEvents: 'none',
                            flexDirection: 'column',
                            height: '100%',
                            mt: [0, 0, 'auto'],
                            flexGrow: 1,
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
                        <Flex sx={{
                            width: 'max-content',
                            ml: [0, 0, 'auto'],
                            flexWrap: 'wrap',
                            columnGap: 4,
                            rowGap: 3,
                        }}>
                            <Button
                                variant="cta"
                                as="a"
                                href="https://hackclub.com/slack"
                                target="_blank"
                                sx={{
                                    pointerEvents: 'all',
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
                                    // '@media screen and (max-width: 991.98px)': {
                                    //     display: 'none'
                                    // }
                                }}
                            >
                                Start Your Hack Club
                            </Button>
                        </Flex>
                    </Flex>
                    <Map height='100%' />
                </Flex>
                <Container
                    sx={{
                        position: 'relative', 
                        padding: 48,
                        mx: 'auto',
                    }}>
                    <Box sx={{ ml: [0, 0, '1.5em'], fontSize: 6 }} >
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
                                    display: ['none', 'none', 'unset']
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
                            <Box sx={{
                                transform: 'rotateZ(-16deg)',
                                flexShrink: 0,
                                fontSize: 1,
                                display: ['none', 'none', 'block'],    
                            }}>
                                scroll&nbsp;down!
                                <br />
                                <Image src='/arrow.svg' sx={{ height: '4rem', width: '100%' }} ></Image>
                            </Box>
                        </Flex>
                    </Box>
                </Container>
            </Flex>
            <Box
                variant="wide"
                sx={{
                    height: ['auto', '100vh'],
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr 1fr'],
                    gridAutoRows: ['1fr', '1fr 1fr'],
                    gap: 3,
                    padding: 3,
                }}
            >
                <Link href="activities" sx={{textDecoration: 'none'}}>
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
                        py: 5,
                        position: 'relative',
                        zIndex: 1,
                        cursor: 'pointer',
                        ':hover': {
                            filter: 'brightness(1.03)'
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
                </Link>
                <Link href="ysws" sx={{textDecoration: 'none'}}>
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
                        py: 5,
                        position: 'relative',
                        zIndex: 1,
                        cursor: 'pointer',
                        ':hover': {
                            filter: 'brightness(1.03)'
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
                </Link>
                <Link href="resources" sx={{textDecoration: 'none'}}>
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
                        py: 5,
                        position: 'relative',
                        zIndex: 1,
                        cursor: 'pointer',
                        ':hover': {
                            filter: 'brightness(1.03)'
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
                </Link>
                <Link href="perks" sx={{textDecoration: 'none'}}>
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
                        py: 5,
                        position: 'relative',
                        zIndex: 1,
                        cursor: 'pointer',
                        ':hover': {
                            filter: 'brightness(1.03)'
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
                </Link>
            </Box>
        </div>
    );
}