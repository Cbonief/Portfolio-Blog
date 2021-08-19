import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import marked from 'marked'
import { sortByDate } from '../utils'

export default function Home({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div>
      <Head>
        <title>Carlos Franco Portfolio</title>
      </Head>
      <h1 className='post-title'>{title}</h1>
        <img src={cover_image} alt='' width="120" height="120"  ALIGN="left" HSPACE="20"/>
      <div className='cv-body' dangerouslySetInnerHTML={{ __html: marked(content) }}>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(path.join('public/cv/cv.md'), 'utf-8')

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
    },
  }
}