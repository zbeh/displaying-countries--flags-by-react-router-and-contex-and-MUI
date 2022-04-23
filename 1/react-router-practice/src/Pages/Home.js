import React, { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CountryContext } from "../Context/CountryProvider";
import AutoComplete from "../Components/AutoComplete";
import { ThemeContext } from "../Context/ThemeProvider";
import { THEME_TYPE } from "../Constant/Theme";
import Region from "../Components/Region";
export default function Home() {
  let continent;
  const { setCountry } = useContext(CountryContext);
  const { data, setData } = useContext(CountryContext);
  const { suggest } = useContext(CountryContext);
  const { select } = useContext(CountryContext);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  console.log(suggest);
  const handleClick = (e) => {
    setCountry(e.target.value);
  };
  console.log(select);
  if (select) {
    continent = data.filter((r) => r.region === select);
  }
  console.log(continent);
  return (
    <div className={`main ${theme === THEME_TYPE.DARK && "main-dark"}`}>
      <div
        className={`main ${
          theme === THEME_TYPE.DARK && "main-dark"
        } d-flex justify-between container search`}
      >
        <AutoComplete />
        <Region />
      </div>

      <div
        className={`main ${
          theme === THEME_TYPE.DARK && "main-dark"
        } d-flex  container card-container`}
      >
        {!continent
          ? data?.map((c, i) => (
              <div
                className={`main ${
                  theme === THEME_TYPE.DARK && "main-dark"
                } card`}
                key={i}
              >
                <Link to="/country-info">
                  <input
                    type="image"
                    src={c.flag}
                    className={`main ${
                      theme === THEME_TYPE.DARK && "main-dark"
                    } c-image`}
                    value={c.alpha3Code}
                    onClick={handleClick}
                  />
                  <div
                    className={`main ${
                      theme === THEME_TYPE.DARK && "main-dark"
                    } content-container`}
                  >
                    <p className="c-name">{c.name}</p>
                    <p className="c-population">
                      Population:<span className="normal">{c.population}</span>
                    </p>
                    <p className="c-region">
                      Region:<span className="normal">{c.region}</span>
                    </p>
                    <p className="c-capital">
                      Capital:<span className="normal">{c.capital}</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))
          : continent.map((c, i) => (
              <div
                className={`main ${
                  theme === THEME_TYPE.DARK && "main-dark"
                } card`}
                key={i}
              >
                <Link to="/country-info">
                  <input
                    type="image"
                    src={c.flag}
                    className={`main ${
                      theme === THEME_TYPE.DARK && "main-dark"
                    } c-image`}
                    value={c.alpha3Code}
                    onClick={handleClick}
                  />
                  <div
                    className={`main ${
                      theme === THEME_TYPE.DARK && "main-dark"
                    } content-container`}
                  >
                    <p className="c-name">{c.name}</p>
                    <p className="c-population">
                      Population:<span className="normal">{c.population}</span>
                    </p>
                    <p className="c-region">
                      Region:<span className="normal">{c.region}</span>
                    </p>
                    <p className="c-capital">
                      Capital:<span className="normal">{c.capital}</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
