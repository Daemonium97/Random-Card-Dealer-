window.onload = function () {
    
    let suits = ['♥', '♣', '♠', '♦'];
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'k'];
    
    // if(suits[0] || suits[3]){
    //     style.color = "red";
    // }

    let top= document.getElementById("top");
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

    let resul = randomSuits();

    top.innerHTML = resul;
    center.innerHTML = numbersRandom();
    bottom.innerHTML = resul;
    



































}







