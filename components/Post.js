import Link from 'next/link'
import { capitalizeFirstLetter } from '../utils'


export default function Post({post}) {
  return (
    <div className='card fill_vertical'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className="card-content">
        <div className='post-date'>Posted on {post.frontmatter.date}</div>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
      </div>

      <Link href={`/posts/${post.slug}`} className='btn'>Read More</Link>

      <div>
        <p className='card-tag'>Tags:</p>{post.tags.map((tag) => (
          <div key={post.key} className='card-tags'>
            <Link key={post.key} href={`/tag/${tag}`}>
              {capitalizeFirstLetter(tag)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
