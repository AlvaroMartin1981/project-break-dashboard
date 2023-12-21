const weatherCity = document.getElementById('cityWeather');
const cityConditions = document.getElementById('cityConditions');
const cityTemp = document.getElementById('cityTemp');
const hourlyDataContainer = document.getElementById('hourlyData');



const fetchData = async () => {
    try {
        const res = await fetch("https://api.weatherapi.com/v1/forecast.json?key=e4050ee4a7e643daa06211919231812&q=Leon,Spain&days=2&aqi=no&alerts=no");
        
        if (!res.ok) {
            throw new Error(`Hubo un error`);
        }

        const data = await res.json();
        console.log(data)

        const { name, region, country } = data.location;
        const showData = `${name} / ${region} / ${country}`;
        const { text, icon } = data.current.condition;
        const showCondition = `<span>${text}</span> <img src="${icon}" alt="icon weather">`;
        const { humidity, wind_kph, precip_in, temp_c } = data.current;
        const showTemp = `
            <div><span>${temp_c}</span> <img src="../images/celsius.png" height="30px" width="30px"alt="icon Centigrados"></div>
            <div><div>Humedad: ${humidity}</div>
                <div>Viento: ${wind_kph} km/h</div>
                <div>Precipitación: ${precip_in} mm</div>
            </div>`;

        const hourlyData = data.forecast.forecastday[0].hour.map(hour => ({
            time: hour.time,
            icon: hour.condition.icon,
            temp_c: hour.temp_c
        }));

        let showDayWeather = '';
        hourlyData.forEach(hour => {
            showDayWeather += `<div>
                        <div><span>${hour.time}</span></div>
                        <div><img src="${hour.icon}"></div>
                        <div><span>${hour.temp_c}</span> <img src="../images/celsius.png" color="white" height="30px" width="30px" alt="icon Centigrados"></div>
                      </div>`;
        });

        hourlyDataContainer.innerHTML = showDayWeather;
        weatherCity.innerHTML = showData;
        cityConditions.innerHTML = showCondition;

    } catch (error) {
        console.error(error);
    }
};

fetchData();