import "./App.css";
import { MidPage } from "./components/MidPage/MidPage";
import { TopPage } from "./components/TopPage/TopPage";

function App() {
  return (
    <div className="app">
      <TopPage />
      <MidPage />
    </div>
  );
}

export default App;
