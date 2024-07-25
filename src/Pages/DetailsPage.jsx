import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DetailsPageLoader from "../components/Loader/DetailsPageLoader";
import Image from "../components/Image";

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const timestamp = data ? data.date : 0;
  const date = timestamp > 0 ? new Date(timestamp * 1000) : "";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <DetailsPageLoader />
      ) : (
        <div className="space-y-4 min-h-[80vh]">
          <div className="w-full bg-[#e0d9cf] p-4 rounded-lg space-y-2">
            <Image
              src={data.image}
              className="w-full h-[28rem] object-cover rounded-lg"
              alt=""
            />
            <h2 className="text-xl md:text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm md:text-base">{data.description}</p>
            <p className="text-sm md:text-base">
              Date: {date === "" ? "" : date.toISOString().split("T")[0]}
            </p>
            <p className="text-sm md:text-base">Location: {data.location}</p>
            <p className="text-sm md:text-base">type: {data.type}</p>
            <p className="text-sm md:text-base">condition: {data.condition}</p>
            <p className="text-sm md:text-base">duration: {data.duration}</p>
            <p className="text-lg md:text-xl font-semibold">
              Price: ${data.price}
            </p>
            <div className="flex justify-between">
              <button
                className="bg-[#1b3252] text-white px-4 py-2 rounded-lg hover:opacity-80 transition duration-300"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button className="bg-[#1b3252] text-white px-4 py-2 rounded-lg hover:opacity-80 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailsPage;
