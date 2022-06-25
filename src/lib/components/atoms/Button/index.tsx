import styles from "./Button.module.css";

export default function Button(props: {
  onClick?: () => void;
  width?: string;
  child: any;
  loading?: boolean;
  color?: string;
  backgroundColor?: string;
  other?: any;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={props.disabled || props.loading || false}
      onClick={props.onClick}
      style={{
        width: props.width,
        color: props.color || "#fff",
        backgroundColor: props.loading || props.disabled
          ? "#bbb"
          : props.backgroundColor || "#3B82F6",
        ...props.other,
      }}
      type="submit"
      className={styles.button}
    >
      {props.child}
    </button>
  );
}