import {
  FooterContainer
} from './styles';


export function Footer() {
  return (
    <FooterContainer absolute={true}>
      <p>Todos os direitos reservados, Sul Utilitários - Porto Alegre (RS)</p>
      <p>Desenvolvido por <span>Gabriel Merigo</span></p>
    </FooterContainer>
  )
}