import React from "react";
import Header from "./Header/Header";
import Page from "./Page/Page";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Page />
    </div>
  );
};

export default App;
