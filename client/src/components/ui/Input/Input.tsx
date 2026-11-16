import styles from "./Input.module.css";

type InputType =
  | "email"
  | "text"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "time"
  | "datetime-local";

interface BaseInputAttributes {
  id: string;
  type: InputType;
  value?: string | number;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

interface TextInputAttributes extends BaseInputAttributes {
  type: "text" | "email" | "password" | "search" | "tel" | "url";
  minLength?: number;
  maxLength?: number;
}

interface NumberInputAttributes extends BaseInputAttributes {
  type: "number";
  min?: number;
  max?: number;
  step?: number;
}

interface DateInputAttributes extends BaseInputAttributes {
  type: "date" | "time" | "datetime-local";
  min?: string;
  max?: string;
  step?: number;
}

type InputAttributes =
  | TextInputAttributes
  | NumberInputAttributes
  | DateInputAttributes;

export default function Input(options: InputAttributes) {
  return (
    <input
      type={options.type}
      id={options.id}
      defaultValue={options.value}
      disabled={options.disabled}
      name={options.name}
      placeholder={options.placeholder ?? "Introduzca un texto"}
      required={options.required}
      readOnly={options.readOnly}
      minLength={"minLength" in options ? options.minLength : undefined}
      maxLength={"maxLength" in options ? options.maxLength : undefined}
      max={"max" in options ? options.max : undefined}
      min={"min" in options ? options.min : undefined}
      step={"step" in options ? options.step : undefined}
      className={styles.input}
      onChange={(event) => options.onChange?.(event.target.value)}
    />
  );
}
