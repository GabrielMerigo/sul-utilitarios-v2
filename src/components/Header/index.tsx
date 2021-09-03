import { HeaderContainer } from './styles';
import Logo from '../../assets/logo-loja.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo Sul Utilitarios" />
      <nav>
        <ul>
          <Link to="/"><span>Principal</span></Link>
          <Link to="/storage"><span>Estoque</span></Link>
          <Link to="/about"><span>Sobre</span></Link>
          <Link to="/contact"><span>Contato</span></Link>
        </ul>
      </nav>
    </HeaderContainer>
  )
}