import Banner from '../components/Banner'
import Header from '../components/Header'
import Produtos from '../components/Produtos'
import Footer from '../components/Footer'
import Carrousel from '../components/Carrousel'
import Paralax from '../components/Paralax'
import Callout from '../components/Callout'

export default function Home() {
  return (
    <div>
      <Header />
      <Callout />
      <Carrousel />
      <Banner />
      <Produtos />
      <Footer />
    </div>
  )
}
