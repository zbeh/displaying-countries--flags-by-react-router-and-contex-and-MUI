import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CountryContext } from "../Context/CountryProvider";
import { ThemeContext } from "../Context/ThemeProvider";
import { THEME_TYPE } from "../Constant/Theme";
export default function CountryInfo() {
  const { theme } = useContext(ThemeContext);
  const { country, setCountry } = useContext(CountryContext);
  const { data } = useContext(CountryContext);
  const selectCountry = data.find(
    (c) => c.alpha3Code === country || c.name == country
  );
  console.log(selectCountry);
  console.log(country);
  return (
    <div
      className={`header ${
        theme === THEME_TYPE.DARK && "header-dark"
      } container main-container`}
    >
      <Link to="/home" className="back d-flex align-center">
        <FaArrowLeft className="icon" /> Back
      </Link>
      <div className="d-flex justify-between align-center country-container">
        <div className="image-container">
          <img src={selectCountry.flag} width="100%" />
        </div>
        <div className="country-detail">
          <p className="c-name">{selectCountry.name}</p>
          <div className="d-flex justify-between  more-detail">
            <div>
              <p className="c-name">
                Native Name:{" "}
                <span className="normal">{selectCountry.nativeName}</span>
              </p>
              <p className="c-name">
                Population:{" "}
                <span className="normal">{selectCountry.population}</span>
              </p>
              <p className="c-name">
                Region: <span className="normal">{selectCountry.region}</span>
              </p>
              <p className="c-name">
                Sub Region:{" "}
                <span className="normal">{selectCountry.subregion}</span>
              </p>
              <p className="c-name">
                Capital: <span className="normal">{selectCountry.capital}</span>
              </p>
            </div>
            <div>
              <p className="c-name">
                Top Level Domain:
                <span className="normal">{selectCountry.topLevelDomain}</span>
              </p>
              <p className="c-name">
                Currency:
                {selectCountry.currencies?.map((c) => (
                  <span className="normal">{c.name}</span>
                ))}
              </p>
              <p className="c-name">
                Language:
                {selectCountry.languages?.map((l) => (
                  <span className="normal">{l.name}</span>
                ))}
              </p>
            </div>
          </div>
          <p className="c-name">Border Coutnries:</p>
          <div className={"d-flex border-detail start "} width="100%">
            {selectCountry.borders?.map((b) => (
              <Link
                to="/country-info"
                className="normal border"
                onClick={() => setCountry(b)}
              >
                {b}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
