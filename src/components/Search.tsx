import { ChangeEvent } from 'react'
import { optionType } from '../types'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({term, options, onInputChange, onOptionSelect, onSubmit}: Props): JSX.Element => {
  // Ivano-Frankivsk
  return (
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-screen sm:h-full lg:h-[90vh] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">

        <h1 className="text-4xl font-thin">Weather <span className="font-black">Forecast</span></h1>
        <p className="text-sm mt-2">Напишіть назву міста, погода якого вас цікавить, та оберіть запропонований варіант</p>

        <div className="relative flex mt-10 md:mt-4">
          <input onChange={onInputChange} type="text" value={term} className="px-2 py-1 rounded-1-md border-2 border-white    focus:outline-none " />
          
          <ul className="absolute top-9 bg-white rounded-b-md">
            {options.map((option: optionType, index: number) => <li key={option.name + '-' + index} className="last:hover:rounded-b-md">
            <button className="text-left text-sm w-full hover:bg-zinc-500 hover:text-white px-2 py-1 cursor-pointer" onClick={() => onOptionSelect(option)}>{option.name}, {option.country}</button>  
            </li>)}
          </ul>

          <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 coursor-pointer" onClick={onSubmit}>Показати</button>
        </div>
        <div className='flex flex-row'>
          <button className='rounded border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 mt-5 px-2 py-1 coursor-pointer m-2' onClick={() => onOptionSelect({name: 'Khodoriv', country: 'UA', lat: 49.4066, lon: 24.314})}>Khodoriv</button>
          <button className='rounded border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 mt-5 px-2 py-1 coursor-pointer m-2' onClick={() => onOptionSelect({name: 'Lviv', country: 'UA', lat: 49.842, lon: 24.0316})}>Lviv</button>
          <button className='rounded border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 mt-5 px-2 py-1 coursor-pointer m-2' onClick={() => onOptionSelect({name: 'Ivano-Frankivsk', country: 'UA', lat: 48.9225, lon: 24.7103})}>Ivano-Frankivsk</button>
        </div>
      </section>
  )
}

export default Search