import React, { useEffect, useState } from "react";
import axios from "axios";
import Yoga from "../components/Yoga";

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);

  const types = data ? data.map((item) => item.type) : [];
  const uniqueTypes = types && [...new Set(types)];

  const tags = data && data.flatMap((item) => item.tag);
  const uniqueTags = tags && [...new Set(tags)];

  const filterData = data
    .filter(
      (item) =>
        (!type || type === "all" || item.type === type) &&
        (!tag || tag === "all" || item.tag.includes(tag))
    )
    .slice((page - 1) * 6, page * 6);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  const handleNext = () => {
    setPage(page + 1);
    scrollToTop();
  };

  const handlePrev = () => {
    setPage(page - 1);
    scrollToTop();
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          <div className="w-full bg-[#e0d9cf] p-4 rounded-lg space-y-3">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxZb2dhJTIwfGVufDF8fHx8MTcyMTc1MzMzNXww&ixlib=rb-4.0.3&q=80&w=1080"
              className="w-full h-60 object-cover rounded-lg"
              alt=""
            />
            <h2 className="text-lg md:text-xl font-semibold">
              Discover Your Inner Peace
            </h2>
            <p>
              Join us for a series of wellness retreats designed to help you
              find tranquility and rejuvenation.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-2 md:space-y-0 justify-between">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-2 md:space-y-0 ">
              <select
                name="type"
                id="type"
                className="bg-[#1b3252] text-white text-sm md:text-base p-2 rounded-lg"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="all">Filter By Type</option>
                <option value="all">All</option>
                {uniqueTypes.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>
              <select
                name="tag"
                id="tag"
                className="bg-[#1b3252] text-white text-sm md:text-base p-2 rounded-lg"
                onChange={(e) => setTag(e.target.value)}
              >
                <option value="all">Filter By Tag</option>
                <option value="all">All</option>
                {uniqueTags.map((tag) => (
                  <option value={tag} key={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1b3252] text-white text-sm md:text-base p-2 rounded-lg"
            />
          </div>
          {filterData.length === 0 && (
            <p className="text-center text-base md:text-lg font-semibold">
              No data found
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterData.map((item) => (
              <Yoga key={item.id} data={item} />
            ))}
          </div>
          <div className="flex justify-center space-x-2">
            <button
              className="bg-[#1b3252] text-white text-sm md:text-base p-2 px-4 rounded-lg disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="bg-[#1b3252] text-white text-sm md:text-base p-2 px-4 rounded-lg disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handleNext}
              disabled={filterData.length < 6}
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
