export default function DataProps(data){
  this.city = data.current_observation.display_location.full;
  this.temp = data.current_observation.temp_f;
  this.description = data.current_observation.weather;
  this.summary = data.forecast.txt_forecast.forecastday[0].fcttext;
  this.high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
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
  this.hourOneCondition = data.hourly_forecast[1].condition;
  this.hourTwoCondition = data.hourly_forecast[2].condition;
  this.hourThreeCondition = data.hourly_forecast[3].condition;
  this.hourFourCondition = data.hourly_forecast[4].condition;
  this.hourFiveCondition = data.hourly_forecast[5].condition;
  this.hourSixCondition = data.hourly_forecast[6].condition;
  this.hourSevenCondition = data.hourly_forecast[7].condition;

  this.hourOneTemperature = data.hourly_forecast[1].temp.english;
  this.hourTwoTemperature = data.hourly_forecast[2].temp.english;
  this.hourThreeTemperature = data.hourly_forecast[3].temp.english;
  this.hourFourTemperature = data.hourly_forecast[4].temp.english;
  this.hourFiveTemperature = data.hourly_forecast[5].temp.english;
  this.hourSixTemperature = data.hourly_forecast[6].temp.english;
  this.hourSevenTemperature = data.hourly_forecast[7].temp.english;

  this.hourOneTime = data.hourly_forecast[1].FCTTIME.civil;
  this.hourTwoTime = data.hourly_forecast[2].FCTTIME.civil;
  this.hourThreeTime = data.hourly_forecast[3].FCTTIME.civil;
  this.hourFourTime = data.hourly_forecast[4].FCTTIME.civil;
  this.hourFiveTime = data.hourly_forecast[5].FCTTIME.civil;
  this.hourSixTime = data.hourly_forecast[6].FCTTIME.civil;
  this.hourSevenTime = data.hourly_forecast[7].FCTTIME.civil;

}
