import './Header.css';
import { Link } from "react-router-dom";


export default function Header(){
    return(
        <header>
          <h1>Semáforo Inteligente</h1>
      
          
          <nav>
            <ul>
                <li><Link to="/" class="a" >Home</Link></li>
                <li><Link to='/dados' class="a">Dados</Link></li>
                <li><Link to='/proposta' class="a">Proposta</Link></li>
                <li><Link to='/funcionamento' class="a">Funcionamento</Link></li>
                <li><Link to='/ibm' class="a">IBM</Link></li>
                <li><Link to='/cadastro' class="a">Cadastro</Link></li>
                <li><Link to='/login' class="a">Login</Link></li>
            </ul>
          </nav>
        </header>
    )
}
