import React, { useEffect, useState } from 'react'
import EachTour from './EachTour';
import Loader from '../utils/Loader';

const Tours = () => {
    let [tourData,setTourData]=useState([])
    let [loading,setLoading]=useState(true)

    let url = "https://course-api.com/react-tours-project";
    let fetchData=async (url)=>
    {
        let response=await fetch(url)
        let data=await response.json()
        setTourData(data)
        setLoading(false)
    }


    let filterTours=(id)=>
    {
        let filtered=tourData.filter((items)=>
        {
            return items.id!==id
        })
        setTourData(filtered)
    }

    useEffect(()=>
    {
        fetchData(url);
    },[])

    if(loading)
    {
        return <Loader/>
    }
    if(tourData.length===0)
    {
      return <div className='mx-auto w-full h-screen text-center mt-20'>
        <h2 className='text-3xl'>No Tours Left</h2>
        <button onClick={()=>fetchData(url)} className='bg-green-600 px-6 py-1 text-lg mt-8 text-white tracking-wider rounded-md cursor-pointer hover:bg-green-700 hover:shadow-lg transition-all'>Refresh</button>
      </div>
    }

  return (
    <main className="bg-gray-50 h-screen w-[100vw] overflow-x-hidden pb-8">
      <h2 className="mt-8 py-2 font-bold mx-auto text-center text-3xl text-gray-800">
        Tour Buddy
      </h2>
      <div className="underline w-28 h-1 bg-green-400 mx-auto mb-8 rounded-md"></div>
      <section className="w-[90vw] mx-auto max-w-[1170px] grid items-start gap-2 lg:grid-cols-2 md:gap-4 md:gap-x-6 xl:grid-cols-3 xl:gap-6">
        {tourData.map((tour, idx) => {
          let { name, image, info, price, id } = tour;
          return <EachTour key={id} tour={tour} filterTours={filterTours} />;
        })}
      </section>
    </main>
  )
}
export default Tours