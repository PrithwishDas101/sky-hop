import React, { useRef, useState } from 'react'
import Bg from './components/Bg.jsx'
import { flightOffers, images } from './data'

const getRandom = () => Math.floor(Math.random() * 41) - 20

const App = () => {
  const modalWrapperRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const handleClickOutside = (event) => {
    if (modalWrapperRef.current === event.target) {
      setShowModal(false)
    }
  }

  return (
    <>
      <Bg />

      <div className="centerChild h-screen">
        {/* Show Modal button */}
        <button
          onClick={() => setShowModal(true)}
          className={`relative cursor-pointer group overflow-hidden py-3 perspective-midrange ${
            showModal ? 'overflow-visible rotate-y-[-25deg]' : 'overflow-hidden'
          }`}
        >
          <div className="bg-zinc-800 px-7 py-4 borderHot rounded-xl bg-clip-padding hover:rotate-y-[-25deg] duration-500 transition-transform">
            <span
              className={`text-shadow-indigo-100 text-2xl group-hover:opacity-0 group-hover:-translate-y-20 transition-all duration-300 block group-hover:delay-75 delay-300 ${
                showModal && '-translate-y-24'
              }`}
            >
              Book Your Flight
            </span>

            <span
              className={`absolute h-0.5 w-full border border-dashed border-amber-100 left-0 top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:delay-200 ${
                showModal && 'scale-x-100'
              }`}
            />

            {/* Plane */}
            <img
              src="/plane.png"
              alt="Plane Icon"
              className={`absolute -left-28 top-1/2 -translate-y-1/2 group-hover:left-20 group-hover:transition-all group-hover:delay-500 group-hover:duration-500 ${
                showModal &&
                'transition-all left-44! scale-200! opacity-0! delay-[0s]!'
              }`}
            />
          </div>
        </button>

        {/* Modal Wrapper */}
        <div
          ref={modalWrapperRef}
          onClick={handleClickOutside}
          className={`centerChild absolute w-full h-full bg-fuchsia-400 -z-10 opacity-0 invisible transition-opacity ${
            showModal && 'opacity-100! visible! z-10! delay-500'
          }`}
        >
          {/* Modal */}
          <div className="centerChild flex-col gap-y-5 relative w-[92vw] sm:w-176 lg:w-184 max-w-184 min-h-152 sm:min-h-160 bg-white rounded-3xl px-4 sm:px-6 pt-8 pb-24 overflow-y-auto">
            {/* Close Modal Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-5 cursor-pointer hover:scale-110 transition-transform"
            >
              <img src="/cancel.png" alt="cancel-icon" width={24} />
            </button>

            {/* Modal Heading */}
            <h1 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xl sm:text-3xl font-semibold text-gray-800 text-center px-2 sm:px-4">
              <span>Book Your Trip Around the</span>

              <div className="relative globeWrapper shrink-0">
                <div className="globe"></div>

                {/* Plane */}
                <img
                  src="/plane.png"
                  alt="Plane Icon"
                  className={`absolute right-52 top-1/2 -translate-y-1/2 scale-200 opacity-35 ${
                    showModal &&
                    '-right-2! scale-100! transition-all delay-500 duration-500 opacity-100'
                  }`}
                />
              </div>
            </h1>

            {/* Gallery */}
            <div className="centerChild gap-2 sm:gap-4 px-2 sm:px-4 w-full flex flex-wrap justify-center">
              {images.map((img, index) => (
                <img
                  src={`/${img}`}
                  alt="image"
                  key={index}
                  className="w-[28%] sm:w-[17%] aspect-square object-cover border-[3px] border-double border-cyan-400 rounded-2xl sm:rounded-3xl opacity-80 hover:z-10 hover:opacity-100 hover:scale-110 transition-all"
                  style={{ transform: `rotate(${getRandom()}deg)` }}
                />
              ))}
            </div>

            {/* Flight Offers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 w-full px-2 sm:px-6 mb-4 sm:mb-6">
              {flightOffers.map((offer, index) => (
                <p
                  className="text-xs sm:text-sm font-semibold text-gray-800"
                  key={index}
                >
                  {offer}
                </p>
              ))}
            </div>

            {/* Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2 bg-white pl-2">
              <button className="rounded-sm px-3 py-1.5 text-xs sm:text-sm cursor-pointer font-semibold bg-cyan-500 text-indigo-50 hover:bg-cyan-600 transition-colors">
                Book Now
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="rounded-sm px-3 py-1.5 text-xs sm:text-sm cursor-pointer font-semibold bg-gray-100 text-cyan-400 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App