import React, { useState } from 'react'

const EachTour = ({tour,filterTours}) => {
       let { name, image, info, price,id } = tour;
       let [expand,setExpand]=useState(false)
  return (
    <article className="rounded-md border overflow-hidden shadow-md max-w-[400px] mx-auto mb-3 relative">
      <img src={image} alt="" className="w-[100%] h-[250px] object-cover" />
      <div className="px-6 bg-white py-6">
        <h2 className="text-xl font-semibold text-center" role="tour-package">
          {name}
        </h2>
        <p className="text-gray-600 mt-4 leading-6" role="info">
          {expand ? info : info.slice(0, 200)}
        </p>
        <button
          className="text-green-500"
          onClick={() => setExpand(!expand)}
          role="expand-contract"
        >
          {expand ? "Show Less" : "Read More..."}
        </button>
        <button
          onClick={() => filterTours(id)}
          role="not-interested"
          className="block border-green-500 text-green-500 py-1 border-[1px] w-[100%] mt-4 rounded-md text-sm hover:bg-green-500 hover:text-white transition-all hover:shadow-lg"
        >
          Not Interested
        </button>
        <button className="absolute top-0 right-0 px-4 py-1 bg-[#10b981] font-semibold text-white text-[17px] tracking-wider">
          ${price}
        </button>
      </div>
    </article>
  );
}



export default EachTour