import Search from "./components/Search"
import useForecast from "./hooks/useForecast"
import Forecast from "./components/Forecast"
import Loading from "./components/Loading"

const App = (): JSX.Element => {

  const {term, options, forecast, onInputChange, onOptionSelect, onSubmit, setForecast, loading} = useForecast()

  return (
    
    <main className="relative flex justify-center items-center bg-gradient-to-br from-orange-400 via-purple-400 to-blue-400  h-full sm:h-screen  w-full">
      <p className="absolute z-10 top-0 mt-[10px] text-zinc-500 text-xs">*API is free and has bugs, don`t blame developer :) </p>
      
      {
      loading ? (
        <Loading />
        )
      : forecast ? (
        <Forecast data={forecast} setForecast={setForecast}/>
      ) 
      : <Search  {...{ term, options, onOptionSelect, onInputChange, onSubmit  }} />
    } 
    </main>
  )
}

export default App