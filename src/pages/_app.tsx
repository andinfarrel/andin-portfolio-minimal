import 'app/styles/globals.css'
import NavBar from '../components/NavBar';
// import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
