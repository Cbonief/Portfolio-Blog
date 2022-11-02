import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/pushlowski.css'
import '../styles/test_canvas.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
