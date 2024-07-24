import React, { useEffect, useState } from "react";
import axios from "axios";
import Yoga from "../components/Yoga";

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      });
  }, []);
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <Yoga key={item.id} data={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
