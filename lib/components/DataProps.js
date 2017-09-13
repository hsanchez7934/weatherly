export default function DataProps(data){
  this.city = data.current_observation.display_location.full;
  this.temp = data.current_observation.temp_f;
  this.description = data.current_observation.weather;
  

}
