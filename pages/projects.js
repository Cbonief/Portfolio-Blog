import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Projects({ posts }) {
  return (
    <div className='container'>
      <Head>
        <title>Carlos Franco - Projects</title>
      </Head>

      <div className='posts'>
        {posts.map((post) => (
          <Post key={post.key} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename, index) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    const tags = frontmatter.tags.split(';')
    return {
      slug,
      frontmatter,
      tags,
      key: filename
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}