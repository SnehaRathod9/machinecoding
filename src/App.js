// import "./styles.css";
import Apifetch from "./components/Apifetch";
import Counter from "./components/Counter";
import Forminput from "./components/Forminput";
import Listcomponent from "./components/Listcomponent";
import LoginForm from "./components/LoginForm";
import Pagination from "./components/Pagination";
import Router from "./components/Router";

import Search from "./components/Search";
import Timer from "./components/Timer";
import Toggle from "./components/Toggle";
import WeatherApi from "./components/WeatherApi";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Forminput /> */}
      {/* <Listcomponent /> */}
      {/* <Toggle /> */}
      {/* <Apifetch /> */}
      {/* <WeatherApi /> */}
      {/* <LoginForm /> */}
      {/* <Search /> */}
      {/* <Pagination items={items} itemsPerPage={4} /> */}
      {/* <Timer /> */}
      <Router />
    </div>
  );
}

export default App;
