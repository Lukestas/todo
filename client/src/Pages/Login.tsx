import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button/Button";
import Input from "../components/ui/Input/Input";
import Label from "../components/ui/Label/Label";
import styles from "../styles/Login.module.css";
import { useState, type FormEvent } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const canLogin = username.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <section className={styles.login}>
      <h1>Bienvenido</h1>
      <span>Inicie sesión para mantener su información</span>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <Label text="Usuario" for="username" />
          <Input
            type="text"
            id="username"
            placeholder="JuanGonzales"
            required={true}
            value={username}
            onChange={setUsername}
          />
        </div>
        <div className={styles.inputs}>
          <Label text="Contraseña" for="password" />
          <Input
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            required={true}
            value={password}
            onChange={setPassword}
          />
        </div>
        <div className={styles.button}>
          <Button
            text="Iniciar sesión"
            id="login"
            size="sm"
            title="Iniciar sesión"
            type="submit"
            disabled={!canLogin}
          />
        </div>
      </form>
    </section>
  );
}
