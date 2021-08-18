import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <Link href='/' passHref>
          <h2 className='header-title'>Carlos Franco</h2>
        </Link>
        <Link href='/projects'>
          <h2 className='header-page'>My Projects</h2>
        </Link>
      </div>
    </header>
  )
}
