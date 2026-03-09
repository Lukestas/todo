import styles from '../styles/SignIn.module.css';

export default function SignIn(){
return (
    <section className={styles.signin}>
      <h1>Registrarse</h1>
      <form 
        method="post"
        action="#">
        <div>
          <label>
            <input 
              name='Nombre'
              type='text'
              placeholder='Nombre'
            />
          </label>
          <label>
            <input
              name='lastname'
              type='text'
              placeholder='Apellido'
            />
          </label>
          <label>
            <input
              name='email'
              type='text'
              placeholder='Correo'
            />
          </label>
          <label>
            <input
              name='telephone'
              type='text'
              placeholder='Telefono *Samsung S26*'
            />
          </label>
          <label>
            <input
              name='username'
              type='text'
              placeholder='Nickname'
            />
          </label>
          <label>
            <input
              name='password'
              type='text'
              placeholder='Contraseña'
            />
          </label>
        </div>



        <button>Crear usuario</button>
      </form>
      <p>¿Ya tienes una cuenta?
        <a href="./login"> Inicia Sesion</a>
      </p>
    </section>
  );
}