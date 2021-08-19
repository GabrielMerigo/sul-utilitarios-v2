import { HeaderContainer } from './styles';
import Logo from '../../assets/logo-loja.png';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Sul Utilitarios" />
      <nav>
        <ul>
          <li><span>Principal</span></li>
          <li><span>Venda</span></li>
          <li><span>Sobre</span></li>
          <li><span>Contato</span></li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}