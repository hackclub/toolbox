<p align="center">
    <img width="192" alt="Hack Club logo" src="https://assets.hackclub.com/flag-standalone.svg">
</p>
<h1 align="center">
    The new <a href="https://hackclub.com/">Hack Club Toolbox</a>!
</h1>

Deals for Hack Clubbers—powered by [Next.js], [Theme UI] & [MDX].

[next.js]: https://nextjs.org
[mdx]: https://mdxjs.com
[theme ui]: http://theme-ui.com

## How do I add a card?

All the cards except for the current ones are stored in `manifest.js`. If you take a look at it, you'll notice it's in JSON:

```js
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
      ...
    ]
  },
  ...
]
```

To add a card to an existing category, you simply add to the cards in the category, like so:

```diff
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
+      {
+        name: 'Theme',
+        description: "Hack Club's theme, using Theme UI",
+        icon: 'grid',
+        external: true,
+        url: 'https://theme.hackclub.com',
+        forUseBy: 'everyone'
+      }
    ]
  },
```

To add a new category, you'll follow a similar pattern at the bottom of the file:

```diff
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
    ]
  },
+  {
+    category: '<Category name>',
+    color: '<Category color>',
+    icon: '<Category icon>'
+    items: [
+      ...
+    ]
+  }
]
```

_For `color` and `icon`, you can use [Hack Club's theme](https://theme.hackclub.com)._

When you edit the file to make these changes, you'll be asked to make a pull request.

Let us know if you have any questions in [Slack](https://hackclub.slack.com)!
