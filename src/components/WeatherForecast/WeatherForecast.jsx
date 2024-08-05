import './WeatherForecast.css'

const  WeatherForecast =({weatherForecast}) =>{
    return (
        <div className="weather">
  <h2>{weatherForecast.day} of the Week</h2>
  <img src={weatherForecast.img}  alt={weatherForecast.imgAlt} />
  <p><span>conditions: {weatherForecast.conditions} </span> current weather conditions</p>
  <p><span>time:{weatherForecast.time} </span>time of day</p>
</div>
    )
}

export default WeatherForecast;