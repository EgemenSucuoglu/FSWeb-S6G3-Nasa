import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Date from "./Date";
import styled from "styled-components";

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
      <Date onChange={dateChanger}></Date>
    </div>
  );
}

export default App;
