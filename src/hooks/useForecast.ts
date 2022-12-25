import { useEffect, useState, ChangeEvent } from 'react';
import { optionType, forecastType } from '../types';

const useForecast = () => {
    const [term, setTerm] = useState<string>('')
    const [options, setOptions] = useState<[]>([])
    const [city, setCity] = useState<optionType | null >(null)
    const [forecast, setForecast] = useState<forecastType | null>(null)
    const [loading, setLoading] = useState<Boolean>(false)
    
  
    const getSearchOptions = (value: string) => {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(data => setOptions(data)).catch(e => console.log(e))
    }
  
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim()
      setTerm(value)
  
      if (value === '') return 
  
      getSearchOptions(value)
    }
  
    const getForecast = async (city: optionType) => {
      setLoading(true)
      try {
       let responce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        let data = await responce.json()
          const forecastData = {
            ...data.city,
            list: data.list.slice(0, 16),
          }
          console.log(forecastData);
          setForecast(forecastData)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    const onOptionSelect = (option: optionType) => {
      setCity(option)
    }
  
    const onSubmit = () => {
      if (!city) return
      getForecast(city)
    }
  
    useEffect(() => {
      if (city) {
        setTerm(city.name)
        setOptions([])
      }
    }, [city])
    
    return {
      term, options, forecast, onInputChange, onOptionSelect, onSubmit, setForecast, loading,
    }
}

export default useForecast