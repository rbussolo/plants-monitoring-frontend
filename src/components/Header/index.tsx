import { Link } from "react-router-dom";
import { Container } from "./styles";

interface HeaderProps {
  logout: () => void;
}

export function Header({ logout }: HeaderProps){
  return (
    <Container>
      <div>
        <div>
          Plants Monitoring
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}