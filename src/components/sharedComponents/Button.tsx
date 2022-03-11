import React from "react";
type Props = {
  success?: string;
  icon: string;
  text: string;
  handleClick?: React.MouseEventHandler;
};
export const Button: React.FC<Props> = ({
  success,
  icon,
  text,
  handleClick,
}): JSX.Element => {
  return (
    <p className="card-footer-item">
      <button className={`button ${success}`} onClick={handleClick}>
        <span className="icon">
          <i className={`fas fa-${icon}`}></i>
        </span>
        <span className="paddingLeft">{text}</span>
      </button>
    </p>
  );
};
