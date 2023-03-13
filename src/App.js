import "./styles.css";
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div className="App">
      <h1>Tooltip Example</h1>
      <Tooltip content="Thanks for hovering! I'm a tooltip" position="bottom">
        <button className="tooltip-btn">Hover over me!</button>
      </Tooltip>
    </div>
  );
}
