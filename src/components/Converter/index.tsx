import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import currencyList from "../../utils/currencyList.json";

import { Container, ContainerInfo } from "./styles";

interface Props {
  ask: string;
  bid: string;
  code: string;
  codein: string;
  create_date: string;
  high: string;
  low: string;
  name: string;
  pctChange: string;
  timestamp: string;
  varBid: string;
}

export function Converter() {
  const [data] = useState(currencyList);
  const [dataResponse, setDataResponse] = useState({} as Props);
  const [dataQuotes, setDataQuotes] = useState([]);
  const [dateLastQuotes, setDateLastQuotes] = useState([]);
  const [currencyFirst, setCurrencyFirst] = useState("USD");
  const [currencySecond, setCurrencySecond] = useState("BRL");
  const [inputFirst, setInputFirst] = useState("1");
  const [inputSecond, setInputSecond] = useState("");
  const [newDate, setNewDate] = useState("");

  var options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: `var(--text-body)`,
      type: "area",
    },
    grid: {
      show: true,
    },
    xaxis: {
      categories: dateLastQuotes,
    },
  };

  const series = [
    {
      name: "series-1",
      data: dataQuotes,
    },
  ];

  const getDateData = useCallback(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date();

    const month = months[date.getMonth()];

    setNewDate(
      `${String(
        date.getDate()
      )} de ${month} de ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
    );
  }, []);

  const loadCurrency = useCallback(
    async (first: string = currencyFirst, second: string = currencySecond) => {
      if (first.length > 0 && second.length > 0) {
        try {
          const response = await axios.get(
            `https://economia.awesomeapi.com.br/json/last/${first}-${second}`
          );

          const currencys = response.data;

          const [result] = Object.keys(currencys).map(function (key) {
            return currencys[key];
          });

          setDataResponse(result);
          getDateData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    [currencyFirst, currencySecond, getDateData]
  );

  const loadQuotesCurrency = useCallback(
    async (first: string = currencyFirst, second: string = currencySecond) => {
      try {
        const response = await axios.get(
          `https://economia.awesomeapi.com.br/json/daily/${first}-${second}/5`
        );

        const dataCurrency = response.data.map((item: Props) => {
          return Number(item.bid);
        });

        const dataQuoteFormatted = dataCurrency.reverse();

        const dateLastQuotes = response.data.map((item: Props) => {
          return `${new Date(Number(item.timestamp)).getHours()}:${
            new Date(Number(item.timestamp)).getMinutes() < 10
              ? "0" + new Date(Number(item.timestamp)).getMinutes()
              : new Date(Number(item.timestamp)).getMinutes()
          }`;
        });

        setDateLastQuotes(dateLastQuotes.reverse());

        setDataQuotes(dataQuoteFormatted);
      } catch (err) {
        console.log("Erro " + err);
      }
    },
    [currencyFirst, currencySecond]
  );

  const calculatorCurrencyEventInputFirst = useCallback(
    (event) => {
      setInputFirst(event.target.value);

      const calc = Number(event.target.value) * Number(dataResponse.bid);

      setInputSecond(String(calc.toFixed(4)));
    },
    [dataResponse.bid]
  );

  const calculatorCurrencyEventInputSecond = useCallback(
    (event) => {
      setInputSecond(event.target.value);

      const calc = Number(event.target.value) / Number(dataResponse.bid);

      setInputFirst(String(calc.toFixed(4)));
    },
    [dataResponse.bid]
  );

  useEffect(() => {
    loadCurrency(currencyFirst, currencySecond);
    loadQuotesCurrency();
    setInputSecond(String(dataResponse.bid));
  }, [
    loadCurrency,
    currencyFirst,
    currencySecond,
    dataResponse.bid,
    loadQuotesCurrency,
  ]);

  return (
    <Container>
      <form>
        <h3>Conversor de Moedas</h3>

        <div>
          <input
            type="number"
            placeholder="0.00"
            alt="cotação moeda"
            value={inputFirst}
            onChange={(event) => calculatorCurrencyEventInputFirst(event)}
          />

          <select
            value={currencyFirst}
            onChange={(event) => setCurrencyFirst(event.target.value)}
          >
            {data.currency.map((item) => (
              <option key={item.name} value={item.id}>
                {item.id} - {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="number"
            placeholder="0.00"
            alt="cotação moeda"
            value={inputSecond}
            onChange={(event) => calculatorCurrencyEventInputSecond(event)}
          />

          <select
            value={currencySecond}
            onChange={(event) => setCurrencySecond(event.target.value)}
          >
            {data.currency.map((item) => (
              <option key={item.name} value={item.id}>
                {item.id} - {item.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      <ContainerInfo>
        <div>
          <h5>1 {currencyFirst} equivale a</h5>

          <h1>
            {dataResponse.bid} {currencySecond}
          </h1>

          <h5>{newDate}</h5>
        </div>

        <div>
          <Chart options={options} series={series} type="area" height={160} />
        </div>
      </ContainerInfo>
    </Container>
  );
}
