import React from 'react'
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <section className='mx-auto w-[100vw] h-screen text-center bg-transparent flex items-center justify-center'>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </section>
  );
}

export default Loader