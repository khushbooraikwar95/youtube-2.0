import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSugguestions, setShowSuggestions] = useState(false);
  console.log(searchQuery);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /*

{
  ihone: ["iphone11", "ihone14"]
}
  */

  useEffect(() => {
    // API call
    // make an api call after evry key press
    // but if the diffrence between 2 APi calls is <200ms
    // then decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // update in my cache

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://cdn4.iconfinder.com/data/icons/ui-admin-side-menu-set-32-vol-1/40/Menu_Burder-512.png"
          alt="youtube menu"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-8 mx-6 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 ">
        <div>
          <input
            type="text"
            className="border px-5 py-2 w-1/2  rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {<button className="border p-2 rounded-r-full py-2 px-5">🔍</button>}
        </div>
        {showSugguestions && (
          <div className=" absolute bg-white py-2 px-2 w-[41.5rem] rounded-lg shadow-xl border border-gray-100">
            <ul>
              {suggestions.map((sugggestion) => (
                <li className="py-2 shadow-sm hover:bg-gray-200">
                  {sugggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
    </div>
  );
};

export default Head;
