import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertModal } from '../../components/AlertModal';
import { InputGroup } from '../../components/InputGroup';
import { signUp } from '../../services/api';
import { Container } from './styles';

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const [modalType, setModalType] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalLink, setModalLink] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);


  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    let error_message: string = "";

    if (email === "") {
      error_message = "E-mail is required!";
    } else if (password === "") {
      error_message = "Password is required!";
    } else if (password.length < 6) {
      error_message = "Password is must to have 6 caracters!";
    } else if (password !== confirmationPassword) {
      error_message = "Confirmation password isn't equals password!";
    } else {
      const data = {
        email,
        password
      }

      try {
        const r = await signUp(data);

        if (!r.success && !!r.error_message) {
          error_message = r.error_message;
        }else{
          setModalType("success");
          setModalTitle("Success");
          setModalIsOpen(true);
          setModalMessage("User created with success!");
          setModalLink("/");
        }
      } catch (e) {
        error_message = "Error server connection.";
      }
    }

    if (error_message !== "") {
      setModalType("error");
      setModalTitle("Error");
      setModalIsOpen(true);
      setModalMessage(error_message);
    }
  }

  function handleOnCloseModal(): void{
    setModalIsOpen(false);
  }

  return (
    <>
      <AlertModal
        type={modalType}
        isOpen={modalIsOpen} 
        link={modalLink} 
        message={modalMessage} 
        title={modalTitle} 
        onClose={handleOnCloseModal}
      />

      <Container>
        <div>
          <div className="login-title">
            Plants Monitoring
          </div>

          <form onSubmit={handleSignUp}>
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
            <InputGroup
              name="confirmation_password"
              label="Confirmation password"
              type="password"
              value={confirmationPassword}
              onChange={event => setConfirmationPassword(event.target.value)}
            />

            <div className="group-button">
              <button type="submit">Sign Up</button>
            </div>
          </form>

          <div>
            <span>Already has account? <Link to="/">Click here to sign in!</Link></span>
          </div>
        </div>
      </Container>
    </>
  );
}