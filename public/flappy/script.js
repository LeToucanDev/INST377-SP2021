document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
    const display = document.querySelector('.game-container');
    const ground = document.querySelector('.ground');
    let isGameOver = false;

    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 2;
    let gap = 420;

    function startGame(){
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft+ 'px';
    }

    let gameTimerId = setInterval(startGame, 20);

    function control(e){
        if(e.keyCode === 32) jump();
    }

    function jump() {
        if(birdBottom < 500) birdBottom +=50;
        bird.style.bottom = birdBottom +'px';
    }

    document.addEventListener('keyup', control);

    function generateObstacle(){
        let obLeft = 500;
        let randomHeight = Math.random() * 60;
        let obBot = randomHeight;

        const obstacle =document.createElement('div');
        const topObstacle = document.createElement('div');
        if(!isGameOver){
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('topObstacle');

        }
        display.appendChild(obstacle);
        display.appendChild(topObstacle);
    
        obstacle.style.left  = obLeft + 'px';
        obstacle.style.bottom = obBot + 'px';

        topObstacle.style.left  = obLeft + 'px';
        topObstacle.style.bottom = obBot + gap + 'px';

        function moveObjects(){
            obLeft -= 2;
            obstacle.style.left = obLeft + 'px';
            topObstacle.style.left = obLeft + 'px';

            
            if(obLeft == -60){
                clearInterval(timerId);
                display.removeChild(obstacle);
                display.removeChild(topObstacle);
            }
            if ((obLeft > 200 && obLeft<280 && birdLeft ==220 && birdBottom < obBot + 153 || birdBottom > obBot + gap - 200) || birdBottom==0){
                gameOver();
                clearInterval(timerId);
            }

        }
        let timerId = setInterval(moveObjects, 20); //calls function every 20ms
        if(!isGameOver){
         setTimeout(generateObstacle, 3000); // This call the function every 3 seconds
        }

        

    } 

    generateObstacle();

    function gameOver() {
        clearInterval(gameTimerId);
        isGameOver = true;
        document.removeEventListener('keyup', control);
    }

    
});