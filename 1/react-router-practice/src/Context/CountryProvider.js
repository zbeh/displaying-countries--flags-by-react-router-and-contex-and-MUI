import React, { createContext, useState } from "react";
export const CountryContext = createContext({});
export default function CountryProvider({ children }) {
  const [country, setCountry] = useState();
  const [data, setData] = useState();
  const [select, setSelect] = useState();
  const [suggest, setSuggest] = useState([]);
  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
        data,
        setData,
        suggest,
        setSuggest,
        select,
        setSelect,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
