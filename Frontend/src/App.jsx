import Bg from './components/Bg.jsx'

const App = () => {
  return (
    <>
    < Bg />
    <div className="centerChild h-screen">
      <button className='relative cursor-pointer group overflow-hidden py-3 perspective-midrange'>
        <div className='bg-zinc-800 px-7 py-4 borderHot rounded-xl bg-clip-padding hover:rotate-y-[-25deg] duration-500 transition-transform'>
          <span className='text-shadow-indigo-100 text-2xl group-hover:opacity-0 group-hover:-translate-y-20 transition-all duration-300 block group-hover:delay-75 delay-300'>Book Your Flight</span>
          <span className='absolute h-0.5 w-full border border-dashed border-amber-100 left-0 top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:delay-200' />
          <img src="/plane.png" alt="Plane Icon" className='absolute -left-28 top-1/2 -translate-y-1/2 group-hover:left-20 group-hover:transition-all group-hover:delay-500 group-hover:duration-500'/>
        </div>
      </button>
    </div>
    </>
  )
}

export default App