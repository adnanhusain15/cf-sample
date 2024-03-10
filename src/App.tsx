import AppHeader from "Components/AppHeader";
import "./App.css";
import Home from "Screens/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div
      id="my-app"
      className="app h-screen w-screen relative overflow-x-hidden"
    >
      <AppHeader />
      <div className="overflow-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
