const imageRandom = [
    '../images/ImagenesFondo/aldebaran.jpg',
    '../images/ImagenesFondo/aldebaran2.jpg',
    '../images/ImagenesFondo/estrellas.jpg',
    '../images/ImagenesFondo/luna.jpg',
    '../images/ImagenesFondo/astronauta.jpg',
    '../images/ImagenesFondo/Eclipse.jpg',
    '../images/ImagenesFondo/graham.jpg',
    '../images/ImagenesFondo/matt.jpg',
    '../images/ImagenesFondo/tengyart.jpg',
    '../images/ImagenesFondo/thor.jpg',
    '../images/ImagenesFondo/tierra.jpg',
    '../images/ImagenesFondo/tierra2.jpg',
    '../images/ImagenesFondo/universo.jpg'
]
function getRandomImage () {
    let randomIndex = Math.floor(Math.random() * imageRandom.length);
        return imageRandom[randomIndex];
    }
    function changeBackground() {
        const randomImage = getRandomImage();
        const imageUrl = `url('${randomImage}')`;
        document.body.style.backgroundImage = imageUrl;
    }
    
    changeBackground();
    
    setInterval(changeBackground, 15000);
    
    getRandomImage()