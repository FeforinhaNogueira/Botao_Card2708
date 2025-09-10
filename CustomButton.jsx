export default function CustomButton({ text, variant = "primary", size = "md", onClick }) {
    const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
    return (
      <button type="button" className={`btn btn-${variant} ${sizeClass}`} onClick={onClick}>
        {text}
      </button>
    );
  }
  