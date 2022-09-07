import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ session,Component, pageProps }) {
  return (
  <SessionProvider session={session}>
  <Component {...pageProps} />
  </SessionProvider>
  )
}


export default MyApp
