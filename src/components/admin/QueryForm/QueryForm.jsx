import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./query.css";
import Chart from "./Chart";

function QueryForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data1, setData1] = useState({
    labels: [" 5", " 4", " 3", " 2", " 1"],
    datasets: [
      {
        label: "Rapunsuri Intrebarea 1",
        data: [],
      },
    ],
  });
  const [data2, setData2] = useState({
    labels: [" 5", " 4", " 3", " 2", " 1"],
    datasets: [
      {
        label: "Rapunsuri Intrebarea 2",
        data: [],
        backgroundColor: ["lightsalmon"],
      },
    ],
  });

  const getData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/feedback/date?start=${startDate}&end=${endDate}`,
        {
          method: "GET",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const response = await res.json();
      const filtered1 = [
        { f: response.data.filter((el) => el.q1 === 5) },
        { f: response.data.filter((el) => el.q1 === 4) },
        { f: response.data.filter((el) => el.q1 === 3) },
        { f: response.data.filter((el) => el.q1 === 2) },
        { f: response.data.filter((el) => el.q1 === 1) },
      ];
      const filtered2 = [
        { f: response.data.filter((el) => el.q2 === 5) },
        { f: response.data.filter((el) => el.q2 === 4) },
        { f: response.data.filter((el) => el.q2 === 3) },
        { f: response.data.filter((el) => el.q2 === 2) },
        { f: response.data.filter((el) => el.q2 === 1) },
      ];
      setData1({
        ...data1,
        datasets: [
          {
            label: "Raspunsuri Intrebarea 1",
            data: filtered1.map((el) => el.f.length),
          },
        ],
      });
      setData2({
        ...data2,
        datasets: [
          {
            label: "Raspunsuri Intrebarea 2",
            data: filtered2.map((el) => el.f.length),
            backgroundColor: ["lightsalmon"],
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="query">
      <form className="query-form" onSubmit={getData}>
        <div className="inputs">
          <div className="input-query">
            <label htmlFor="start">De la</label>
            <input
              id="start"
              className="date-input"
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="input-query">
            <label htmlFor="end">Până la</label>
            <input
              id="end"
              className="date-input"
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" variant="contained">
          Afiseaza
        </Button>
      </form>
      <div className="query-data">
        <div className="chart">
          <Chart charData={data1} />
        </div>
        <div className="chart">
          <Chart charData={data2} />
        </div>
      </div>
    </div>
  );
}

export default QueryForm;
