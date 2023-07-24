import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rating = ({ rating }) => {
  const sty = {
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    fontSize: 150,
    width: 50,
    height: 50,
  };

  const styleClass = `absolute -bottom-2  rounded-full -left-2  `;
  return (
    <div style={sty} className={styleClass}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          textSize: "30px",
          textColor: "black",
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default Rating;
