import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"


function MyApp({ session,Component, pageProps }) {
  return (
  <SessionProvider session={session}>
  <Component {...pageProps} />
  </SessionProvider>
  )
}


export default MyApp
