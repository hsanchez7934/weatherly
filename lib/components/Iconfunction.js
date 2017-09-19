export default function SetIcon(condition, hour) {
  if(condition === 'Clear') {
    let day = [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    for(let i = 0; i < day.length; i++) {
      return hour === i
      ? '..assets/sunny.svg'
      : '../assets/clearnight.svg';
    }
  }
  if(condition === 'Partly Cloudy') {
    return '../assets/partlycloudy.svg';
  }
  if(condition === 'Thunderstorm') {
    return '../assets/thunderstorm.svg';
  }
  if(condition === 'Mostly Cloudy' || 'Overcast') {
    return '../assets/cloudy.svg';
  }
  if(condition === 'Partly Cloudy') {
    return '../assets/partlycloudy.svg';
  }
  if(condition === 'Chance of Rain') {
    return '../assets/partlyrainy.svg';
  }
  if(condition === 'Rain') {
    return '../assets/rain.svg';
  }
  if(condition === 'Snow') {
    return '../assets/snowing.svg';
  }
  if(condition === 'Chance of a Thunderstorm') {
    return '../assets/thunderstormchance.svg';
  }
}
