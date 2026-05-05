import React, { useState } from 'react'
import Bg from './components/Bg.jsx'

const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      < Bg />
      <div className="centerChild h-screen">
        {/* Show Modal button */}
        <button
          onClick={() => setShowModal(true)}
          className='relative cursor-pointer group overflow-hidden py-3 perspective-midrange'>

          <div
            className='bg-zinc-800 px-7 py-4 borderHot rounded-xl bg-clip-padding 
                         hover:rotate-y-[-25deg] duration-500 transition-transform'
          >

            <span className='text-shadow-indigo-100 text-2xl group-hover:opacity-0 group-hover:-translate-y-20 
                               transition-all duration-300 block group-hover:delay-75 delay-300'>
              Book Your Flight
            </span>

            <span className='absolute h-0.5 w-full border border-dashed border-amber-100 left-0 
                             top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform 
                             duration-500 origin-right group-hover:delay-200'
            />

            <img
              src="/plane.png"
              alt="Plane Icon"
              className='absolute -left-28 top-1/2 -translate-y-1/2 group-hover:left-20 group-hover:transition-all 
                         group-hover:delay-500 group-hover:duration-500'
            />
          </div>

        </button>
        {/* Modal Wrapper */}
        <div
          className={`centerChild absolute w-full h-full bg-fuchsia-300 -z-10 opacity-0 invisible transition-opacity 
                      ${showModal && ("opacity-100! visible! z-10!")}`}>
          {/* Modal */}
          <div className=' centerChild relative w-183.75 h-150 bg-white rounded-3xl'>
            {/* Close Modal Button */}
            <button
              onClick={() => setShowModal(false)}
              className='absolute top-4 right-5 cursor-pointer hover:scale-110 transition-transform'>

              <img
                src="/cancel.png"
                alt="cancel-icon"
                width={24}
              />

            </button>
            {/* Modal Heading */}
            <h1 className='text-3xl font-semibold  text-gray-800'>
              Book Your <b>Trip</b> Around the Globe
            </h1>

            <div className='globeWrapper'>
              <div className='globe'></div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default App