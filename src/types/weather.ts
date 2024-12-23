export interface WeatherData {
    current: {
      temp: number
      humidity: number
      wind_speed: number
      wind_deg: number
      weather: Array<{
        main: string
        description: string
        icon: string
      }>
    }
    daily: Array<{
      dt: number
      temp: {
        day: number
      }
      weather: Array<{
        main: string
        description: string
        icon: string
      }>
      pop: number
    }>
    alerts?: Array<{
      event: string
      start: number
      end: number
    }>
  }
  
  