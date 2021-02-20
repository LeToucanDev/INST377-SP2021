document.addEventListener('DOMContentLoaded', ()=>
{
    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    let doodlerLeftSpace = 50;
    let BottomSpace = 150;
    let platformCount = 5;
    let platforms = [];
    let isGameOver = false;

    function createDoodler(){
        doodler.classList.add('doodler');
        doodler.style.left = doodlerLeftSpace + 'px';
        doodler.style.bottom = BottomSpace + "px";
        grid.appendChild(doodler);
    }

    class Platform{
        constructor(newPlatBottom){
            this.bottom = newPlatBottom;
            this.left = Math.random() * 315;
            this.visual = document.createElement('div');

            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left + 'px';
            visual.style.bottom = this.bottom + 'px';
            grid.appendChild(visual);
        }
    }

    function createPlatforms(){
        for(let i = 0; i<platformCount;i++){
            let platGap = 600/platformCount;
            let newPlatBottom = 100 + i * platGap;
            let newPlat = new platformCount(); //check here m8
            platforms.push(newPlat);
        }
    }

    function start(){
        if(!isGameOver){
            createDoodler();
            createPlatforms();
        }
    }

    start();

})