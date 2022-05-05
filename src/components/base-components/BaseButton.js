import "../../App.css";

const baseButton = (props) => {
  return (
    <button className={`font-semibold ${props.customStyle}`}>
      {props.children}
    </button>
  );
};

export default baseButton;
