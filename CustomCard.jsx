import CustomButton from "./CustomButton.jsx";

export default function CustomCard({
  title,
  description,
  image,
  buttonText,
  onButtonClick,
  footer,
  variant,
  children,
}) {
  const bgClass = variant ? `text-bg-${variant}` : "";
  return (
    <div className={`card ${bgClass}`} style={{ width: "18rem" }}>
      {image && <img src={image} className="card-img-top" alt={title || "Imagem do card"} />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text">{description}</p>}
        {children}
        {buttonText && (
          <CustomButton
            text={buttonText}
            variant={variant === "light" ? "primary" : "light"}
            onClick={onButtonClick}
          />
        )}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
