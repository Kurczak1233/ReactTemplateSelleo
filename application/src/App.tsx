import "./App.scss";
import SelleoApplication from "./components/Application/Application";

export interface IPresent {
  value: number;
  content: string;
}

function App() {
  return <SelleoApplication />;
}

export default App;
