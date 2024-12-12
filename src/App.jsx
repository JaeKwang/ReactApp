import "./App.css"
import Calendar from "./components/Calendar"
import Date from "./date.json"

function App() {
  return (
    <div className="app-container">
      <div className="rounded-div">
        <h1>£ 2024 . 12 月 ¢</h1>
      </div>
    <Calendar Date={Date}/>
    </div>
  );
}

export default App;