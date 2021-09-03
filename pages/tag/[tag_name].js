import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../components/Post'
import { sortByDate } from '../../utils'
import { useRouter } from 'next/router'
import { capitalizeFirstLetter } from '../../utils'
import Head from 'next/head'

export default function TagPage({ posts }) {
  const router = useRouter()
  const { tag_name } = router.query
  return (
    <div className='container'>
    <Head>
        <title>{capitalizeFirstLetter(tag_name)}</title>
    </Head>
    <div>
      <div className='posts'>
        {posts.map((post) => (
          <Post key={post.key} post={post}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
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
      posts: posts.filter(post => post.tags.includes(params.tag_name)).sort(sortByDate),
    },
  }
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

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

  let unique = []
  let paths = []
  posts.forEach(post => {
    console.log(post.tags)
    post.tags.forEach(tag => {
      if(!unique.includes(tag)){
        unique.push(tag)
        paths.push({ params: { tag_name: tag } })
      }
      }
    )
    }
  );

  return {
    paths,
    fallback: false
  };
}