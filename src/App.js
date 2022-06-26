import React from "react";
import {Header} from "./components/headers/Header";
import {TaskCards} from "./components/tssk/TaskCards";

function App() {
  return (
    <div className="app">
      <Header />
        <TaskCards />
    </div>
  );
}

export default App;
