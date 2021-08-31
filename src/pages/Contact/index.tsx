import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LineTitle, LineHeader, ContainerButton } from './style'
import { RiWhatsappLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';

export function Contact() {
  return (
    <>
      <Header />
      <LineHeader />
      <LineTitle>
        <div className="ln1"></div>
        <h2>Entre em Contato</h2>
      </LineTitle>
      <ContainerButton>
        <button>
          Contatar pelo Whatsapp
          <RiWhatsappLine/>
        </button>
        <button>
          Contatar por E-mail
          <HiOutlineMail/>
        </button>
      </ContainerButton>
      <Footer position="absolute" direction="0" ></Footer>
    </>
  )
}