import "../../App.css";

const BaseCard = (props) => {
  return <div className={`w-fit ${props.extraStyle}`}>{props.children}</div>;
};

export default BaseCard;
