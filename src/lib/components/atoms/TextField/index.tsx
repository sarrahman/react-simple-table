import styles from "./Textfield.module.css";

export default function TextField(props: {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  id?: string;
  required?: boolean;
  otherStyle?: any;
  onInput?: any;
  styleInput?: any;
  colorLabel?: string;
  styleLabel?: any;
  backgroundInput?: string;
  fontSize?: string;
  pattern?: string;
  value?: any;
  fontWeight?: string;
  readOnly?: boolean;
}) {
  return (
    <div style={props.otherStyle} className={styles.textField}>
      {props.label !== undefined || null ? (
        <label
          htmlFor={props.id}
          style={{
            color: props.colorLabel || "#1A1A1A",
            fontSize: props.fontSize || "18px",
            fontWeight: props.fontWeight || "700",
            marginBottom: "5px",
            ...props.styleLabel,
          }}
          className={styles.labelInput}
        >
          {props.label}
        </label>
      ) : null}
      <input
        autoComplete="off"
        className={styles.input}
        onInput={props.onInput}
        placeholder={props.placeholder}
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        readOnly={props.readOnly}
        pattern={props.pattern}
        defaultValue={props.value || ""}
        required={props.required || false}
        style={{
          background: props.backgroundInput || "#FFFFFF",
          ...props.styleInput,
        }}
      />
    </div>
  );
}
