import React from "react";
import logo from "./logo.svg";
import mylogo from "./myLogo.png";
import "./App.css";
import Footer from './components/Footer';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={mylogo} className="My-Logo" alt="logo" />
        <p className="siteText">{!data ? "Waiting response from server ..." : data}</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;