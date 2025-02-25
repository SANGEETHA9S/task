const cards = document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');


const imagesLinkArray = [
{ id: 1, image:"https://th.bing.com/th/id/OIP.1yDdlNwAVlYQZS_h_LOa4wHaHa?rs=1&pid=ImgDetMain", newAlt: 'Angular Image' },
{ id: 2, image:"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png", newAlt: 'Html Image' },
{ id: 3, image:"https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png", newAlt: 'JavaScript Image' },
{ id: 4, image:"https://th.bing.com/th/id/OIP.-u0PVMDbAf1Q7aI6ZHjlYgHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7", newAlt: 'React Image' },
{ id: 5, image:"https://th.bing.com/th/id/OIP.1BeWk3yNKm6r49NqPHt02gHaHa?rs=1&pid=ImgDetMain", newAlt: 'Vue Image' },
{ id: 6, image:"https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png", newAlt: 'JavaScript Image' },
{ id: 7, image:"https://th.bing.com/th/id/OIP.1BeWk3yNKm6r49NqPHt02gHaHa?rs=1&pid=ImgDetMain", newAlt: 'Vue  Image' },
{ id: 8, image:"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png", newAlt: 'Html  Image' },
{ id: 9, image:"https://th.bing.com/th/id/OIP.txiApZpcViLixrAUefjd5gHaKX?pid=ImgDet&w=203&h=284&c=7", newAlt: 'Css Image' },
{ id: 10, image:"https://th.bing.com/th/id/OIP.1yDdlNwAVlYQZS_h_LOa4wHaHa?rs=1&pid=ImgDetMain", newAlt: 'Angular Image' },
{ id: 11, image:"https://th.bing.com/th/id/OIP.txiApZpcViLixrAUefjd5gHaKX?pid=ImgDet&w=203&h=284&c=7", newAlt: 'Css Image' },
{ id: 12, image:"https://th.bing.com/th/id/OIP.-u0PVMDbAf1Q7aI6ZHjlYgHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7", newAlt: 'React Image' },
]


const restartGame = () => {
    let toggledCard =
        document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    });
    toggledCardsArray.length = 0;
    move = 0;
    winCount = 0;
    movesDisplay.innerText = 'Moves: ${move}';
    let allImagesSrc = document.getElementsByClassName('card-image');
    Object.values(allImagesSrc).forEach((el, index) => {
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id;
    })
}
restart.addEventListener('click', restartGame);


for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector('.card-image').src;
        let previousImgSrc =
            toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
        if (thisImgSrc = previousImgSrc) {
        toggledCardsArray.forEach(function (el) {
            setTimeout(() => {
                el.classList.remove("toggled");
            }, 500);
        });
        toggledCardsArray.length = 0;
        move++;
    } 
    else {
        toggledCardsArray.length = 0;
        move++;
        winCount++;
    }
    movesDisplay.innerText = 'Moves: ${move}';
    if (winCount === 6) {
        setTimeout(() => {
            alert('congratulations!!! You won the game in ${move} moves.');
        }, 300);
    }
});
}