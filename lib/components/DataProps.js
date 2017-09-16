export default function DataProps(data){
  this.city = data.current_observation.display_location.full;
  this.temp = data.current_observation.temp_f;
  this.description = data.current_observation.weather;
  this.summary = data.forecast.txt_forecast.forecastday[0].fcttext;
  this.weekDayHigh = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.weekDayLow = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.dailyInfo = data.forecast.simpleforecast.forecastday;
  this.date = data.forecast.simpleforecast.forecastday[0].date.day;
  this.year = data.forecast.simpleforecast.forecastday[0].date.year;
  this.monthName = data.forecast.simpleforecast.forecastday[0].date.monthname;
  this.shortMonth = data.forecast.simpleforecast.forecastday[0].date.monthname_short;
  this.monthNum = data.forecast.simpleforecast.forecastday[0].date.month;
  this.hour = data.forecast.simpleforecast.forecastday[0].date.hour;
  this.min = data.forecast.simpleforecast.forecastday[0].date.min;
  this.second = data.forecast.simpleforecast.forecastday[0].date.sec;
  this.day = data.forecast.simpleforecast.forecastday[0].date.weekday;
  this.shortDay = data.forecast.simpleforecast.forecastday[0].date.weekday_short;
  this.iconText = data.forecast.simpleforecast.forecastday[0].date.icon;
  this.iconUrl = data.forecast.simpleforecast.forecastday[0].date.icon_url;
}
