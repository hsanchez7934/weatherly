export default function DataProps(data){
  this.city = data.current_observation.display_location.full;
  this.temp = data.current_observation.temp_f;
  this.description = data.current_observation.weather;
  this.summary = data.forecast.txt_forecast.forecastday[0].fcttext;
  this.weekDayHigh = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.weekDayLow = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.dailyInfo = data.forecast.simpleforecast.forecastday;
  this.day = data.forecast.simpleforecast.forecastday[0].date.day;
}
