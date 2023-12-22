const weatherCity = document.getElementById('cityWeather');
const cityConditions = document.getElementById('cityConditions');
const cityTemp = document.getElementById('cityTemp');
const hourlyDataContainer = document.getElementById('hourlyData');



const apiData = async () => {
    try {
        const res = await fetch("https://api.weatherapi.com/v1/forecast.json?key=e4050ee4a7e643daa06211919231812&q=Leon,Spain&days=2&aqi=no&alerts=no");
        
        if (!res.ok) {
            throw new Error(`Hubo un error`);
        }

        const data = await res.json();
        console.log(data)

        const { name, country } = data.location;
        const showData = `${name} / ${country}`;
        const { text, icon } = data.current.condition;
        const showCondition = `<span>${text}</span> <img src="${icon}" alt="icon weather">`;
        const { humidity, wind_kph, precip_in, temp_c } = data.current;
        const showTemp = `
            <div><span style="font-size: 35px;">${temp_c}</span> <img src="../images/celsius.png" style="filter: invert(1)" height="30px" width="30px"alt="icon Centigrados"></div>
            <div><div>Humedad: ${humidity}</div>
                <div>Viento: ${wind_kph} km/h</div>
                <div>Precipitación: ${precip_in} mm</div>
            </div>`;

        const hourlyData = data.forecast.forecastday[0].hour.map(hour => ({
            time: formatHour(hour.time),
            icon: hour.condition.icon,
            temp_c: hour.temp_c
        }));

        function formatHour(hour) {
            
            const date = new Date(hour);
            
            const hours = date.getHours();
            const minutes = date.getMinutes();

            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        
            return `${formattedHours}:${formattedMinutes}`;
        }

        let showDayWeather = '';
        hourlyData.forEach(hour => {
            showDayWeather += `<div>
                        <div><span>${hour.time}</span></div>
                        <div><img src="${hour.icon}"></div>
                        <div><span style="font-size: 24px;">${hour.temp_c}</span> <img src="../images/celsius.png" style="filter: invert(1)" color="white" height="30px" width="30px" alt="icon Centigrados"></div>
                      </div>`;
        });

        hourlyDataContainer.innerHTML = showDayWeather;
        weatherCity.innerHTML = showData;
        cityConditions.innerHTML = showCondition;
        cityTemp.innerHTML = showTemp

    } catch (error) {
        console.error(error);
    }
};

apiData();