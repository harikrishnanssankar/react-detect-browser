import { detect } from "detect-browser";
import "./styles.css";

export default function App() {
  const browser = detect();
  return (
    <div className="App">
      <h2>{browser.name}</h2>
      <h2>{browser.os}</h2>
      <h2>{browser.type}</h2>
      <h2>{browser.version}</h2>
    </div>
  );
}
