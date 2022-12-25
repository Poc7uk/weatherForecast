import { useEffect, useState, ChangeEvent } from 'react';
import { optionType, forecastType } from '../types';

const useForecast = () => {
    // Ivano-Frankivsk
    const [term, setTerm] = useState<string>('')
    const [options, setOptions] = useState<[]>([])
    const [city, setCity] = useState<optionType | null >(null)
    const [forecast, setForecast] = useState<forecastType | null>(null)
  
    const getSearchOptions = (value: string) => {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(data => setOptions(data))
    }
  
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim()
      setTerm(value)
  
      if (value === '') return 
  
      getSearchOptions(value)
    }
  
    const getForecast = (city: optionType) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        }
        console.log(forecastData);
        
        setForecast(forecastData)
      });
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
      term, options, forecast, onInputChange, onOptionSelect, onSubmit, setForecast
    }
}

export default useForecast