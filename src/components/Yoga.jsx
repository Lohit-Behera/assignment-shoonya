import React from "react";

function Yoga({ data }) {
  const timestamp = data.date;
  const date = new Date(timestamp * 1000);
  return (
    <div className="bg-[#e0d9cf] p-4 rounded-lg space-y-1">
      <img src={data.image} className="w-full h-52 object-cover rounded-lg" />
      <h2 className="text-lg md:text-xl font-semibold">{data.title}</h2>
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
