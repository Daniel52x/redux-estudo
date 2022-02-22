import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/login';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        Usuário
      </label>
      <input
        id="username"
        type="text"
        value={username}
        className={styles.input}
        onChange={({ target }) => {
          setUsername(target.value);
        }}
      />
      <label className={styles.label} htmlFor="password">
        Senha
      </label>
      <input
        id="password"
        type="password"
        value={password}
        className={styles.input}
        onChange={({ target }) => {
          setPassword(target.value);
        }}
      />
      <button className={styles.button}>Enviar</button>
    </form>
  );
};

export default Login;
