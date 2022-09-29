import "./Number.css"


const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div className = {"DefaultNum"} onClick={() => onClick(value)} 
    >
      {value}
    </div>
  );
};

export default Number;
