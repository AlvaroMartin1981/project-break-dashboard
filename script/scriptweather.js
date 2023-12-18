fetch("http://api.weatherapi.com/v1/current.json?key=e4050ee4a7e643daa06211919231812 &q=Leon, spain&aqi=no")
.then(res=>{
    if (!res.ok){
        throw new Error(`Hubo un error`);
    }
    return res.json(); 
})
.then(data =>{
    console.log(data)
})