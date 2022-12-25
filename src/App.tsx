import Search from "./components/Search"
import useForecast from "./hooks/useForecast"
import Forecast from "./components/Forecast"

const App = (): JSX.Element => {

  const {term, options, forecast, onInputChange, onOptionSelect, onSubmit, setForecast} = useForecast()

  return (
    
    <main className="relative flex justify-center items-center bg-gradient-to-br from-orange-400 via-purple-400 to-blue-400 h-[100vh] w-full">
      <p className="absolute z-10 top-0 mt-[7vh] text-zinc-500 text-xs">API is free and has bugs, don`t blame developer :) </p>
      {
      forecast ? (

        <Forecast data={forecast} setForecast={setForecast}/>
      ) :
      <Search  {...{ term, options, onOptionSelect, onInputChange, onSubmit  }} />
    } 
    </main>
  )
}

export default App
