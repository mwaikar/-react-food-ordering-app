import React from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals/Meals";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
