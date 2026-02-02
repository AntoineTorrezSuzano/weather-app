export async function fetch_weather()  {
    const api_key = "6ad97f1c03fd36e7b9cbf23cf9b74b4b";
    const geo_response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=2740,CH&appid=${api_key}`);
    const geo_data = await geo_response.json();

    const weather_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${geo_data.lat}&lon=${geo_data.lon}&appid=${api_key}`)
    const weather_data = await weather_response.json(); 


    return {
        city: weather_data.name,
        temp: weather_data.main.temp
    }
}