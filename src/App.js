import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";

function App() {
  const [date, setDate] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Dp1pZfSlbfwWM2WdkdyfpP5DxhxO1daYxwQZxrdo" +
          date
      )
      .then((response) => setData(response.data));
  }, [date]);

  function dateChanger(date) {
    let gun = new Date(date);
    let gercekDate = `${gun.getFullYear()}-${gun.getMonth() +
      1}-${gun.getDate()}`;
    setDate(gercekDate);
  }
  return (
    <div className="App">
      <Header />
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip
        edin İyi eğlenceler!{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
