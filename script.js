window.onload = function () {

    let suits = ['♥', '♣', '♠', '♦'];
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'k'];
    let colors = ["Red", "Black"];


    let top = document.getElementById("top");
    let center = document.getElementById("center");
    let bottom = document.getElementById("bottom");

    function randomSuits() {

        let su = suits[Math.floor(Math.random() * suits.length)];
        return su;

    }
    function numbersRandom() {

        let numb = numbers[Math.floor(Math.random() * numbers.length)];
        return numb;

    }
    function colorsRandom() {

        let col = colors[Math.floor(Math.random() * colors.length)];
        return col;

    }

    let resul = randomSuits();
    let kol = colorsRandom();


    document.querySelector('#top').innerHTML = '<p style=color:' + kol + ';' + 'id=' + 'arriba' + '>' + resul + '</p>';
    center.innerHTML = numbersRandom();
    document.querySelector('#bottom').innerHTML = '<p style=color:' + kol + ';' + 'id=' + 'abajo' + '>' + resul + '</p>';




































}







