import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

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
  const [currencyFirst, setCurrencyFirst] = useState("USD");
  const [currencySecond, setCurrencySecond] = useState("BRL");
  const [inputFirst, setInputFirst] = useState("1");
  const [inputSecond, setInputSecond] = useState("");

  const loadCurrency = useCallback(
    async (first = currencyFirst, second = currencySecond) => {
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
        } catch (err) {
          console.log(err);
        }
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
    setInputSecond(String(dataResponse.bid));
  }, [loadCurrency, currencyFirst, currencySecond, dataResponse.bid]);

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
        <h4>
          {inputFirst} {currencyFirst} equivale a
        </h4>

        <h1>
          {inputSecond} {currencySecond}
        </h1>
      </ContainerInfo>
    </Container>
  );
}
