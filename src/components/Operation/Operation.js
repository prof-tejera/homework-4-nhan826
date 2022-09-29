import "./Operation.css"

const Operation = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  return (
    <div className = "OpBtnStyles" onClick={() => onClick(value)}
    >
      {value}
    </div>
  );
};

export default Operation;
