import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LineTitle, LineHeader } from './style'

export function Contact() {
  return (
    <>
      <Header />
      <LineHeader />
      <LineTitle>
        <div className="ln1"></div>
        <h2>Entre em Contato</h2>
      </LineTitle>
      <button>
        Contatar pelo Whatsapp!
      </button>
      <Footer></Footer>
    </>
  )
}