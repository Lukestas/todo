import styles from "./Button.module.css";

interface ButtonAttributes {
  text: string;
  title: string;
  id: string;
  type: "button" | "submit";
  size: "sm" | "md";
  name?: string;
  disabled?: boolean;
  variant?: "Outline" | "Cancel" | "Warning";
  onClick?: () => void;
}

export default function Button(options: ButtonAttributes) {
  const buttonSize = options.size === "sm" ? `${styles.ButtonSM}` : ``;
  const buttonVariant = options.variant ? `${styles[options.variant]}` : ``;
  return (
    <button
      title={options.title}
      id={options.id}
      type={options.type}
      disabled={options.disabled ?? false}
      onClick={options.onClick}
      className={`${styles.button} ${buttonSize} ${buttonVariant}`}
      name={options.name}
    >
      {options.text}
    </button>
  );
}
