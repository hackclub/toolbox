export default [
  {
    // this category doesn't show up on the sidebar, it's just for current stuff that needs to be highlighted
    category: 'Highlighted',
    color: 'purple',
    icon: 'view',
    items: [
      {
        name: 'Scrapyard',
        description:
          'A scrappy hackathon organized by Hack Clubbers globally in 100+ cities',
        img: '/cards/scrapyard.png',
        background: '#337d78',
        titleColor: '#ffffff',
        descriptionColor: '#ffffff',
        external: true,
        url: 'https://scrapyard.hackclub.com',
        fancy: true
      }
    ]
  },
  {
    category: 'YSWS',
    color: 'green',
    icon: 'bolt',
    items: [
      {
        name: 'Boba Drops',
        description: 'Build an HTML + CSS static site, get free boba',
        img: '/cards/boba.png',
        background: '#C76B0F',
        titleColor: '#F6D193',
        descriptionColor: '#F6D193',
        external: true,
        url: 'https://hack.club/boba',
        fancy: true
      },
      {
        name: 'Hackaccino',
        description: 'Make a 3D website, get a free Frappuccino',
        img: '/cards/hackaccino.png',
        background: '#FFF1DE',
        titleColor: '#4F2A0E',
        descriptionColor: '#4F2A0E',
        arrowColor: '#ba9d75',
        external: true,
        url: 'https://hack.club/fraps',
        fancy: true
      },
      {
        name: 'OnBoard',
        description:
          'Join 1k teens designing PCBs, learning hardware, and building electronics',
        img: '/cards/onboard.png',
        background: 'dark',
        titleColor: 'green',
        descriptionColor: 'white',
        external: true,
        url: 'https://hackclub.com/onboard',
        fancy: true
      },
      {
        name: 'Sprig',
        description:
          'Join hundreds of teenagers making tile-based JavaScript games',
        img: '/cards/sprig.png',
        background: '#000',
        titleColor: 'green',
        descriptionColor: 'white',
        external: true,
        url: 'https://sprig.hackclub.com',
        fancy: true
      },
      {
        name: 'Cider',
        description:
          'Design and code an iOS app and get it shipped to the App Store for free',
        img: '/cards/cider.png',
        background: '#b93c3c',
        titleColor: '#fffffb',
        descriptionColor: '#ffffff',
        external: true,
        url: 'https://cider.hackclub.com/',
        fancy: true
      },
      // Limited-time YSWSs start here
      {
        name: 'Asylum',
        description: 'A series of fast-paced hardware "You-Ship-We-Ship"s',
        img: '/cards/asylum.png',
        background: '#e4e4e4',
        titleColor: '#6d6d6d',
        descriptionColor: '#444444',
        arrowColor: '#9a9a9a',
        external: true,
        url: 'https://hackclub.slack.com/archives/C083CCAAHM1',
        fancy: true
      },
      {
        name: 'Black Box',
        description:
          'Create a constrained, interactive C program and get a portable device to run it on (Ends March 15)',
        img: '/cards/blackbox.png',
        background: '#000000',
        titleColor: '#ef654d',
        descriptionColor: '#ffffff',
        external: true,
        url: 'https://blackbox.hackclub.com/',
        fancy: true
      },
      {
        name: 'BrowserBuddy',
        description:
          'Build a Chrome extension, get $30 to launch it on the Chrome Web Store (Ends March 19)',
        img: '/cards/browserbuddy.png',
        background: '#ffffff',
        titleColor: '#ec3750',
        descriptionColor: '#000000',
        external: true,
        url: 'https://browserbuddy.hackclub.com/',
        fancy: true
      },
      {
        name: 'TerminalCraft',
        description:
          'Build & publish a cross-platform terminal app, Get 10 users, and get a Raspberry Pi 4 (Ends March 19)',
        img: '/cards/terminalcraft.png',
        background: '#1e1e1e',
        titleColor: '#ffffff',
        descriptionColor: '#4af626',
        external: true,
        url: 'https://terminalcraft.hackclub.com/',
        fancy: true
      },
      {
        name: 'PixelDust',
        description:
          'Design a neopixel-based PCB, get the parts to make one yourself (Ends April 1)',
        img: '/cards/pixeldust.png',
        background: '#e9e9e9',
        titleColor: '#177cff',
        descriptionColor: '#000000',
        external: true,
        url: 'https://pixeldust.hackclub.com/',
        fancy: true
      },
      {
        name: 'Infill',
        description:
          'Design your own 3D printer, get the parts shipped to you. Get it printing, get flown to a 3D printing festival in Colorado (Ends March 31)',
        img: '/cards/infill.webp',
        background: '#121a1c',
        titleColor: '#ffffff',
        descriptionColor: '#C2CCD0',
        external: true,
        url: 'https://infill.hackclub.com/',
        fancy: true
      },
      {
        name: 'Retrospect ',
        description:
          'Create a J2ME game (Java MIDlet) and have it delivered on a J2ME-capable phone (Ends April 7)',
        img: '/cards/retrospect.png',
        background: '#f0f0f0',
        titleColor: '#000000',
        descriptionColor: '#000000',
        external: true,
        url: 'https://retrospect.hackclub.com/j2me',
        fancy: true
      }
    ]
  },
  {
    category: 'Activities',
    color: 'orange',
    icon: 'idea',
    items: [
      {
        name: 'Jams',
        description:
          'Collaborative coding workshops where sparks ignite, fears dissolve, and inventions come to life',
        img: '/cards/jams.png',
        background: '#1f2d3d',
        titleColor: '#ffffff',
        descriptionColor: '#ffffff',
        external: true,
        url: 'https://jams.hackclub.com/',
        fancy: true
      },
      {
        name: 'Some Assembly Required',
        description: 'An approachable introduction to assembly',
        img: '/cards/someassemblyrequired.png',
        background: '#ffffff',
        titleColor: '#17171d',
        descriptionColor: '#17171d',
        arrowColor: '#9a9a9a',
        external: true,
        url: 'https://github.com/hackclub/some-assembly-required',
        fancy: true
      },
      {
        name: 'Putting The "You" In CPU',
        description:
          'Curious exactly what happens when you run a program on your computer? Read this.',
        img: '/cards/puttingtheyouincpu.png',
        background: '#ffffff',
        titleColor: '#17171d',
        descriptionColor: '#17171d',
        arrowColor: '#9a9a9a',
        external: true,
        url: 'https://cpu.land/',
        fancy: true
      },
      {
        name: 'SineRider',
        description: 'Help build a game about love, math, and graphing 💖',
        img: '/cards/sinerider.png',
        background: '#271932',
        titleColor: '#CAB4D4',
        descriptionColor: '#ffffff',
        external: true,
        url: 'https://sinerider.com',
        fancy: true
      },
      {
        name: 'Workshops',
        description:
          'Learn programming and create fun projects with short, in-depth workshops',
        icon: 'idea',
        external: true,
        url: 'https://workshops.hackclub.com',
        forUseBy: 'everyone'
      },
      {
        name: 'Muse',
        description: 'Music programming language',
        icon: 'list',
        external: true,
        url: 'https://muse.hackclub.com',
        forUseBy: 'everyone'
      }
    ]
  },
  {
    category: 'Resources',
    color: 'blue',
    icon: 'explore',
    items: [
      {
        name: 'Spaces',
        description:
          'Create, share, and deploy websites or other apps instantly with GIT integration for clubs.',
        img: '/cards/spaces.png',
        background: '#e9e9e9',
        titleColor: '#1f2d3d',
        descriptionColor: '#1f2d3d',
        arrowColor: '#7f7f7f',
        external: true,
        url: 'https://spaces.hackclub.com',
        fancy: true
      },
      {
        name: 'Nest',
        description:
          'Free Linux server for all Hack Clubbers to host anything they need',
        img: '/cards/nest.png',
        background: '#e9e9e9',
        titleColor: '#1f2d3d',
        descriptionColor: '#1f2d3d',
        arrowColor: '#7f7f7f',
        external: true,
        url: 'https://hackclub.app/',
        fancy: true
      },
      {
        name: 'Pizza',
        description: 'Earn $5 per shipped project from your club to buy pizza!',
        icon: 'briefcase',
        external: true,
        url: 'https://airtable.com/appSUAc40CDu6bDAp/pagvu2xGhfsMC8AOL/form',
        forUseBy: 'leaders'
      },
      {
        name: 'Posters',
        description: 'Get large Hack Club posters to promote your Hack Club',
        icon: 'docs-fill',
        external: true,
        url: 'https://forms.hackclub.com/t/uzgyhTqvsFus',
        forUseBy: 'leaders'
      },
      {
        name: 'International Posters',
        description:
          "If you're outside of US/Canada, get large Hack Club posters to promote your Hack Club",
        icon: 'docs-fill',
        external: true,
        url: 'https://hack.club/intl-posters',
        forUseBy: 'leaders'
      },
      {
        name: 'Branding & Logos',
        description: 'Make anything Hack Club branded',
        icon: 'like',
        external: true,
        url: 'https://hackclub.com/brand',
        forUseBy: 'everyone'
      },
      {
        name: 'Stickers',
        description: 'Get a box of stickers for your next meeting or event',
        icon: 'sticker',
        external: false,
        url: '/stickers.mdx',
        forUseBy: 'leaders'
      },
      {
        name: 'School Toolbox',
        description: 'Resources to help with school admin or IT challenges',
        icon: 'briefcase',
        external: true,
        url: 'https://school-toolbox.hackclub.com',
        forUseBy: 'everyone'
      },
      {
        name: 'Slack Community',
        description:
          'Be part of a fun, technically-diverse and supportive community on Slack',
        icon: 'slack',
        external: true,
        url: 'https://hackclub.com/slack',
        forUseBy: 'everyone'
      },
      {
        name: 'Leadership Guide',
        description: 'Advice on how to lead a club',
        icon: 'docs-fill',
        external: true,
        url: 'https://archived.guide.hackclub.com/#/',
        forUseBy: 'leaders'
      },
      {
        name: 'Leader Newsletter',
        description: 'The bi-weekly run-down for Hack Club leaders',
        icon: 'docs',
        external: true,
        url: 'https://workshops.hackclub.com/leader-newsletters',
        forUseBy: 'leaders'
      },
      {
        name: 'DNS',
        description: 'Redeem a free hackclub.com subdomain',
        icon: 'web',
        external: true,
        url: 'https://github.com/hackclub/dns',
        forUseBy: 'clubbers'
      },
      {
        name: 'Theme Starter',
        description:
          'A sample Next.js project for getting started with MDX, Theme UI, & Hack Club Theme',
        icon: 'help',
        external: true,
        url: 'https://github.com/hackclub/theme-starter',
        forUseBy: 'everyone'
      },
      {
        name: 'Theme',
        description: "Hack Club's theme, using Theme UI",
        icon: 'grid',
        external: true,
        url: 'https://theme.hackclub.com',
        forUseBy: 'everyone'
      },
      {
        name: 'Gas Fund',
        description:
          'Drive to any high school hackathon and get the cost of gas reimbursed',
        icon: 'briefcase',
        external: true,
        url: 'https://gas.hackclub.com/',
        forUseBy: 'everyone'
      },
      {
        name: 'Hackathons Page',
        description:
          'Everything you need to know to run an amazing event, all in one place',
        icon: 'event-check',
        external: true,
        url: 'https://hackclub.com/hackathons/',
        forUseBy: 'everyone'
      },
      {
        name: 'HCB',
        description: 'A full-stack toolkit for organizing anything.',
        icon: 'bank-account',
        external: true,
        url: 'https://hackclub.com/hcb',
        forUseBy: 'everyone'
      }
    ]
  },
  {
    category: 'Perks',
    color: 'primary',
    icon: 'bag',
    items: [
      {
        name: 'Events',
        description: 'Join an event with other Hack Clubbers',
        icon: 'event-code',
        external: true,
        url: 'https://events.hackclub.com',
        forUseBy: 'clubbers'
      },
      {
        name: 'AMAs',
        description:
          'Call someone who we’ve always wanted to talk to—and the entire Hack Club Slack community is invited to ask questions & chat with the guest live.',
        icon: 'person',
        external: true,
        url: 'https://hackclub.com/amas/',
        forUseBy: 'everyone'
      },
      {
        name: 'Brilliant Premium',
        description: 'Free Brilliant Premium student access',
        icon: 'code',
        external: false,
        url: '/brilliant.mdx',
        forUseBy: 'clubbers'
      },
      {
        name: 'Zoom Pro Meetings',
        description: 'Run Zoom Pro meetings for free in your Hack Club',
        icon: 'welcome',
        external: false,
        url: '/zoom.mdx',
        forUseBy: 'clubbers'
      },
      {
        name: 'Figma',
        description: "Free access to Figma's team plan",
        icon: 'photo',
        external: false,
        url: '/figma.mdx',
        forUseBy: 'clubbers'
      },
      {
        name: 'CodeDay',
        description: 'Discount for in-person CodeDay events',
        icon: 'event-code',
        external: false,
        url: '/codeday.mdx',
        forUseBy: 'clubbers'
      },
      {
        name: 'Code Crafters',
        description: 'Code crafters free 2 years free membership',
        icon: 'code',
        external: true,
        url: 'https://codecrafters.io/event/hackclub',
        forUseBy: 'clubbers'
      },
      {
        name: 'Hackathons',
        description: 'Find hackathons to attend',
        icon: 'crosshairs',
        external: true,
        url: 'https://hackathons.hackclub.com',
        forUseBy: 'everyone'
      }
    ]
  }
]
