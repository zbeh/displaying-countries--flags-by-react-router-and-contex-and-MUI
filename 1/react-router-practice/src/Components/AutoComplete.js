import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CountryContext } from "../Context/CountryProvider";
import { ThemeContext } from "../Context/ThemeProvider";
import { THEME_TYPE } from "../Constant/Theme";
export default function AutoComplete() {
  const { data } = useContext(CountryContext);
  const { theme } = useContext(ThemeContext);
  const { country, setCountry } = useContext(CountryContext);
  let suggestions = data?.map((c) => c.name);
  console.log(suggestions);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const userInput = e.target.value;
    setSearchParams(userInput);
    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };
  const handleClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setCountry(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    navigate("/country-info");
  };
  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <div
        className={`main ${
          theme === THEME_TYPE.DARK && "main-dark"
        }  container ul-container`}
      >
        <ul
          className={`main ${
            theme === THEME_TYPE.DARK && "main-dark"
          } suggestions `}
        >
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            // Flag the active suggestion with a class
            if (index === activeSuggestionIndex) {
              className = "suggestion-active";
            }
            return (
              <li className={className} key={suggestion} onClick={handleClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      </div>
    ) : (
      <div
        className={`main ${
          theme === THEME_TYPE.DARK && "main-dark"
        } no-suggestions container`}
      >
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };

  return (
    <>
      <div
        className={`main ${
          theme === THEME_TYPE.DARK && "main-dark"
        } container input-container`}
      >
        <input
          type="text"
          class="icon-ltr"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={input}
        />
        
      </div>
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
}
