const imageRandom = [
    './aldebaran.jpg',
    './aldebaran2.jpg',
    './estrellas.jpg',
    './luna.jpg',
    './astronauta.jpg',
    './Eclipse.jpg',
    './graham.jpg',
    './matt.jpg',
    './tengyart.jpg',
    './thor.jpg',
    './tierra.jpg',
    './tierra2.jpg',
    './universo.jpg'
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