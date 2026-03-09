import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <section className={styles.login}>
      <h1>Inicio de sesión</h1>
      <form 
        method="post"
        action="#">
        <label>
          <input 
            name='userMail'
            type='text'
            placeholder='Usuario o Email'
          />
        </label>
        <label>
          <input
            name='password'
            type='password'
            placeholder='Contraseña'
          />
        </label>
        <button>Iniciar Sesion</button>
      </form>
      <p>¿Aun no tienes usuario?
        <a href="./register"> Registrarse</a>
      </p>
    </section>
  );
} 
