import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const suggested = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Pune",
    "Hyderabad",
    "Chandigadh",
    "Noida",
    "Gurgaon",
  ];

  const [searchWord, setSearchWord] = useState("");
  const [searchBox, setSearchBox] = useState(false);
  const [suggestions, setSuggestions] = useState(false);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchBox(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const searchWordChanges = (val) => {
    console.log(response, suggestions);
    setSearchWord(val);
    if (val.length > 2) {
      setLoading(true);
      optimizedFn(val);
      setSuggestions(false);
    } else {
      setLoading(false);
      setSuggestions(true);
      setResponse([]);
    }
  };

  const searchBoxFocused = () => {
    setSearchBox(true);
    if (searchWord.length < 2) setSuggestions(true);
  };

  const suggestedClick = (val) => {
    setLoading(true);
    setSearchWord(val);
    setSuggestions(false);
    optimizedFn(val);
  };

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (val) => {
    fetch(
      `https://base.amberstudent.com/api/v0/regions?sort_key=search_name&sort_order=desc&states=active&search_name=${val}`
    )
      .then((res) => res.json())
      .then((json) =>
        setTimeout(() => {
          setResponse([...json.data.result]);
          setLoading(false);
        }, 3000)
      );
  };

  const optimizedFn = useCallback(debounce(handleChange), []);

  return (
    <div ref={wrapperRef} className="heroSearch">
      <input
        value={searchWord}
        onChange={(e) => searchWordChanges(e.target.value)}
        onFocus={(e) => searchBoxFocused(e.target.value)}
        placeholder="Search Destinations, Tours, Activities"
        className="heroSearchInput"
      />
      <button className="heroSearchButton">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <span className="heroSearchBtnTxt">Search</span>
      </button>
      {searchBox && (
        <div className="searchBox">
          {suggestions && (
            <div className="suggestionBox">
              <div className="suggestionHeading">Suggestions</div>
              <div className="suggestionContent">
                {suggested.map((i, key) => {
                  return (
                    <div
                      key={key}
                      onClick={() => suggestedClick(i)}
                      className="suggestionItem"
                    >
                      <span className="arrowTrendUp">
                        <FontAwesomeIcon icon={faArrowTrendUp} />
                      </span>
                      {i}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {loading && (
            <div className="loader">
              <div className="lds-ring">
                {console.log("lolo")}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              Loading...
            </div>
          )}
          {response.length > 0 && !loading && searchWord.length>2 ? (
            <>
              {response?.map((i, key) => {
                return (
                  <div key={key} className="responseItem">
                    <span className="locationIcon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <span className="responseText">
                      <div className="responsePlace">{i.name}</div>
                      <div>
                        {i?.location?.district?.long_name &&
                          `${i?.location?.district?.long_name}, `}
                        {i?.location?.country?.long_name}
                      </div>
                    </span>
                  </div>
                );
              })}
            </>
          ) : (
            !suggestions &&
            !loading && <div className="noData">Nothing to display!!!</div>
          )}
        </div>
      )}
    </div>
  );
}
