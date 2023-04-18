export default [
  {
    category: 'Perks',
    color: 'primary',
    icon: 'bag',
    items: [
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
        name: 'Stickers',
        description: 'Get a box of stickers for your next meeting or event',
        icon: 'sticker',
        external: false,
        url: '/stickers.mdx',
        forUseBy: 'leaders'
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
        name: 'Branding & Logos',
        description: 'Make anything Hack Club branded',
        icon: 'like',
        external: true,
        url: 'https://hackclub.com/brand',
        forUseBy: 'everyone'
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
      }
    ]
  },
  {
    category: 'Resources',
    color: 'blue',
    icon: 'explore',
    items: [
      {
        name: 'Hack Club Bank',
        description: 'A full-stack toolkit for organizing anything',
        icon: 'bank-account',
        external: true,
        url: 'https://hackclub.com/bank',
        forUseBy: 'everyone'
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
        name: '$500 Hackathon Grant',
        description: 'Get up to $500 to run an unforgettable hackathon',
        icon: 'payment',
        external: true,
        url: 'https://hackclub.com/hackathons/grant',
        forUseBy: 'clubbers'
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
        name: 'Leader Newsletter',
        description: 'The bi-weekly run-down for Hack Club leaders',
        icon: 'docs',
        external: true,
        url: 'https://workshops.hackclub.com/leader-newsletters',
        forUseBy: 'leaders'
      },
      {
        name: 'Meetings',
        description:
          'A collection of real Hack Club meetings, paired with everything you need to run them in your own club',
        icon: 'clubs',
        external: true,
        url: 'https://meetings.hackclub.com',
        forUseBy: 'leaders'
      }
    ]
  },
  {
    category: 'Activities',
    color: 'orange',
    icon: 'idea',
    items: [
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
      },
      {
        name: 'Sprig',
        description: 'A JavaScript web-based game editor',
        icon: 'post',
        external: true,
        url: 'https://sprig.hackclub.com',
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
        name: 'Events',
        description: 'Join an event with other Hack Clubbers',
        icon: 'event-code',
        external: true,
        url: 'https://events.hackclub.com',
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
