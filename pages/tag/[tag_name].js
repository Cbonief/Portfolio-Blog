import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../components/Post'
import { sortByDate } from '../../utils'
import { useRouter } from 'next/router'

export default function Tag({ posts }) {
  const router = useRouter()
  const { tag_name } = router.query
  return (
    <div>
      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  // Get files from the posts dir
  console.log(path.join('posts'))
  const files = fs.readdirSync(path.join('posts'))

  console.log(files)

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    const tags = frontmatter.tags.split(';')
    console.log(tags)
    return {
      slug,
      frontmatter,
      tags
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

  const posts = files.map((filename) => {
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
      tags
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

  console.log(paths)

  return {
    paths,
    fallback: false
  };
}