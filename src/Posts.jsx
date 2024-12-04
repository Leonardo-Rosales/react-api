import post1 from '../src/assets/post_1.jpg'
import post2 from '../src/assets/post_2.jpg'
import post3 from '../src/assets/post_3.jpg'



const posts = [
    {
        id: 1,
        title: 'Titolo del Post',
        image: post1,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html', 'css'],
        published: true,
        category: 'backend'
    },
    {
        id: 2,
        title: 'Titolo del Post',
        image: post2,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'css'],
        published: true,
        category: 'frontend'
    },
    {
        id: 3,
        title: 'Titolo del Post',
        image: post3,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'php'],
        published: true,
        category: 'express'
    },
    {
        id: 4,
        title: 'Titolo del Post',
        image: undefined,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html'],
        published: false,
        category: 'react'
    },
]

export default posts