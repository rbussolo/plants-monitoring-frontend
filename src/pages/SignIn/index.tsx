import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup } from '../../components/InputGroup';
import { signIn } from '../../services/api';
import { Container } from './styles';

interface SignInProps {
  authenticate: () => void;
}

export function SignIn({ authenticate }: SignInProps) {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(event: FormEvent){
    event.preventDefault();

    if(email === ""){
      setError("E-mail is required!")
    }else if(password === ""){
      setError("Password is required!")
    }else{
      const data = {
        email,
        password
      }

      try {
        const r = await signIn(data);

        if (!r.success && !!r.error_message) {
          setError(r.error_message);
        } else {
          authenticate();
        }
      } catch(e) {
        setError("Error server connection.");
      }
    }
  }

  return (
    <Container>
      <div>
        <div className="login-title">
          Plants Monitoring
        </div>

        {
          !!error && <div className="error">{error}</div>
        }

        <form onSubmit={handleSignIn}>
          <InputGroup
            name="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <InputGroup 
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <div className="group-button">
            <button type="submit">Login</button>
          </div>
        </form>
        
        <div>
          <span>Still don't have account? <Link to="/signup">Click here to create!</Link></span>
        </div>
      </div>
    </Container>
  );
}