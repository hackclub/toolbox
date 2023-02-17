import { getRawFileFromRepo } from './github'
import { shuffle } from './utils'
import manifest from '../manifest'

export const everything = async () => {
  const everything = await getRawFileFromRepo('lib/carousel.json')
  return [
    ...JSON.parse(everything).map(item => ({
      ...item,
      name: item.title,
      url: item.link.startsWith('/')
        ? `https://hackclub.com${item.link}`
        : item.link,
      category: 'Current',
      external: item.external ? item.external : true
    })),
    ...manifest
      .flatMap(category => {
        return category.items.map(item => ({
          ...item,
          color: category.color,
          category: category.category,
          url: item.external ? item.url : item.url.replace('.mdx', '')
        }))
      })
      .sort((a, b) => (a.current === true ? -1 : 1))
  ]
}

export const categories = async () => {
  return [
    {
      category: 'Current',
      color: 'secondary',
      icon: 'explore'
    },
    ...manifest.map(category => ({
      category: category.category,
      color: category.color,
      icon: category.icon
    }))
  ]
}
