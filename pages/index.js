import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import marked from 'marked'

export default function Home({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div>
      <Head>
        <title>Carlos Franco</title>
      </Head>
      <h1 className='post-title'>{title}</h1>
        <img className='my-photo' src={cover_image} alt='' width="120px" height="120px"  ALIGN="left"/>
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