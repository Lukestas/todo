import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <section className={styles.login}>
      <h1>Inicio de sesión</h1>
      <form>
        <label>
          <input
            type='text'
            placeholder='Nombre de usuario'
          />
        </label>
        <label>
          <input
            type='password'
            placeholder='Contraseña'
          />
        </label>
        <label>
          <input
            type='email'
            placeholder='Correo Electrónico'
          />
        </label>
      </form>
    </section>
  );
}
