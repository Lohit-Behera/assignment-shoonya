import React, { useEffect, useState } from "react";
import axios from "axios";
import Yoga from "../components/Yoga";
import HomePageLoader from "../components/Loader/HomePageLoader";
import Image from "../components/Image";

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [loc, setLoc] = useState("");

  const filterItem = [
    "Signature",
    "Standalone",
    "relaxation",
    "meditation",
    "weekend",
    "flexibility",
    "yoga",
    "workshop",
    "weight loss",
    "diet",
    "fitness",
    "camp",
    "pain management",
    "mental wellness",
    "pre-natal",
    "post-natal",
    "detox",
    "cleanse",
    "spiritual growth",
  ];

  const locations = ["Goa", "Rishikesh", "Kerala", "Mumbai", "Delhi", "Pune"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=6${
          filter === "" ? "" : `&filter=${filter}`
        }${loc === "" ? "" : `&location=${loc}`}${
          keyWord === "" ? "" : `&search=${keyWord}`
        }`
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, [keyWord, page, filter, loc]);

  const handleNext = () => {
    setPage(page + 1);
    scrollToTop();
  };

  const handlePrev = () => {
    setPage(page - 1);
    scrollToTop();
  };

  const handleSearch = () => {
    setKeyWord(searchTerm);
    setPage(1);
  };
  const handleFilter = (e) => {
    if (e.target.value === "all") {
      setPage(1);
      setFilter("");
    } else {
      setFilter(e.target.value);
      setPage(1);
    }
  };

  const handleLoc = (e) => {
    if (e.target.value === "all") {
      setPage(1);
      setLoc("");
    } else {
      setLoc(e.target.value);
      setPage(1);
    }
  };

  const handleReset = () => {
    setKeyWord("");
    setFilter("");
    setLoc("");
    setPage(1);
  };

  return (
    <>
      {loading ? (
        <HomePageLoader />
      ) : (
        <div className="space-y-4">
          {keyWord === "" && filter === "" && loc === "" ? (
            <div className="w-full bg-[#e0d9cf] p-4 rounded-lg space-y-3">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxZb2dhJTIwfGVufDF8fHx8MTcyMTc1MzMzNXww&ixlib=rb-4.0.3&q=80&w=1080"
                className="w-full h-60 object-cover rounded-lg"
                alt="Yoga"
              />
              <h2 className="text-lg md:text-xl font-semibold">
                Discover Your Inner Peace
              </h2>
              <p>
                Join us for a series of wellness retreats designed to help you
                find tranquility and rejuvenation.
              </p>
            </div>
          ) : null}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-2 md:space-y-0 justify-between">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-2 md:space-y-0 ">
              <select
                name="type"
                id="type"
                className="bg-[#1b3252] text-white text-sm md:text-base p-2 rounded-lg"
                onChange={(e) => handleFilter(e)}
              >
                <option value="">Filter By Type</option>
                <option value="">All</option>
                {filterItem.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>
              <select
                name="tag"
                id="tag"
                className="bg-[#1b3252] text-white text-sm md:text-base p-2 rounded-lg"
                onChange={(e) => handleLoc(e)}
              >
                <option value="">Filter By Location</option>
                <option value="">All</option>
                {locations.map((location) => (
                  <option value={location} key={location}>
                    {location}
                  </option>
                ))}
              </select>
              <button
                className="bg-[#1b3252] text-white text-sm md:text-base p-2 px-3 rounded-lg hover:bg-[#1b3252]/80 duration-200"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
            <div className="flex h-9 w-full bg-[#1b3252] text-white text-sm md:text-base md:w-[50%] p-2 px-3 rounded-lg">
              <input
                className="bg-[#1b3252] text-white text-sm md:text-base w-full focus:outline-none"
                id="search"
                type="text"
                placeholder="Search retreats by title"
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <span onClick={handleSearch} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                  style={{ fill: "#ffffff" }}
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
              </span>
            </div>
          </div>
          {data.length === 0 && (
            <p className="text-center text-base md:text-lg font-semibold">
              No data found
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <Yoga key={item.id} data={item} />
            ))}
          </div>
          <div className="flex justify-center space-x-2">
            <button
              className="bg-[#1b3252] text-white text-sm md:text-base p-2 px-4 rounded-lg hover:opacity-80 transition duration-300 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="bg-[#1b3252] text-white text-sm md:text-base p-2 px-4 rounded-lg hover:opacity-80 transition duration-300 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handleNext}
              disabled={data.length < 6}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
