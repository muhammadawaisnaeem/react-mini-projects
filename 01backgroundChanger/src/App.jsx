import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#475569")

  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className="bg-slate-200 h-5/6 w-28 flex flex-wrap flex-col justify-center items-center gap-5 rounded-2xl fixed top-10 left-5 shadow-md py-2 border-neutral-500 border-2">
        <div className="bg-red-600 px-3 py-2 cursor-pointer w-20 text-white text-center rounded-xl text-lg font-medium" onClick={() => { setColor("red") }}>Red</div>
        <div className="bg-green-600 px-3 py-2 cursor-pointer w-20 text-white text-center rounded-xl text-lg font-medium" onClick={() => { setColor("green") }}>Green</div>
        <div className="bg-blue-600 px-3 py-2 cursor-pointer w-20 text-white text-center rounded-xl text-lg font-medium" onClick={() => { setColor("blue") }}>Blue</div>
        <div className="bg-orange-600 px-3 py-2 cursor-pointer w-20 text-white text-center rounded-xl text-lg font-medium" onClick={() => { setColor("orange") }}>Orange</div>
        <div className="bg-yellow-400 px-3 py-2 cursor-pointer w-20 text-white text-center rounded-xl text-lg font-medium" onClick={() => { setColor("yellow") }}>Yellow</div>
        <div className="bg-violet-600 px-3 py-2 cursor-pointer w-20 text-white text-center rounded-xl text-lg font-medium" onClick={() => { setColor("#7c3aed") }}>Violet</div>
        <div className="bg-pink-600 px-3 py-2 cursor-pointer w-20 text-white text-center rounded-xl text-lg font-medium" onClick={() => { setColor("#db2777") }}>Pink</div>
        <div className="bg-rose-700 px-3 py-2 cursor-pointer w-20 text-white text-center rounded-xl text-lg font-medium" onClick={() => { setColor("#be123c") }}>Rose</div>


      </div>
    </div>
  )
}

export default App
