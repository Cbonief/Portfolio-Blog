import Link from 'next/link'
import { capitalizeFirstLetter } from '../utils'


export default function Post({post }) {
    return (
    <div className='card'>
      <img src={post.frontmatter.cover_image} alt='' />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>


      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>

      <div>
        <p className='card-tag'>Tags:</p>{post.tags.map((tag) => (
          <Link href={`/tag/${tag}`}>
          <div className='card-tags'>
            <a >{capitalizeFirstLetter(tag)}</a>
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}
