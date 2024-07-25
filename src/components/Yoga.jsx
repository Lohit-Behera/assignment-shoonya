import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

function Yoga({ data }) {
  const timestamp = data.date;
  const date = new Date(timestamp * 1000);
  return (
    <div className="bg-[#e0d9cf] p-4 rounded-lg space-y-1">
      <Link to={`details/${data.id}`}>
        <Image
          src={data.image}
          alt={data.title}
          className="w-full h-52 object-cover rounded-lg"
        />
      </Link>
      <Link to={`details/${data.id}`}>
        <h2 className="text-lg md:text-xl font-semibold hover:underline">
          {data.title}
        </h2>
      </Link>
      <p className="text-sm md:text-base">{data.description}</p>
      <p className="text-sm md:text-base">
        Date: {date.toISOString().split("T")[0]}
      </p>
      <p className="text-sm md:text-base">Location: {data.location}</p>
      <p className="text-sm md:text-base">Price: ${data.price}</p>
    </div>
  );
}

export default Yoga;
