import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../Context/CountryProvider";
import { ThemeContext } from "../Context/ThemeProvider";
import { THEME_TYPE } from "../Constant/Theme";
export default function Region() {
  const { data } = useContext(CountryContext);
  const { theme } = useContext(ThemeContext);
  const [region, setRegion] = useState([]);
  const { select, setSelect } = useContext(CountryContext);
  console.log(data);
  useEffect(() => {
    data?.map((c) => setRegion((region) => [...region, c.region]));
  }, []);
  console.log(region);
  let uniqueRegion = [...new Set(region)];
  console.log(uniqueRegion);
  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div
      className={`main ${
        theme === THEME_TYPE.DARK && "main-dark"
      } container input-container region`}
    >
      <select onChange={handleChange} className="filter" >
        <option value="" disabled selected  >
          Filter by region...
        </option>     
        {uniqueRegion?.map((i) => (
          <option style={{color:"black"}}> {i}</option>
        ))}
      </select>
    </div>
  );
}
