let imgArray = ["images/onigiri_1.png", "images/onigiri_2.png",
"images/onigiri_3.png","images/onigiri_4.png","images/roll_1.png",
"images/roll_2.png","images/roll_3.png"];

let counter = 0; 

  function nextImage() {
    counter+=3;
    if(counter>imgArray.length-1) counter = 0;
    if(counter==6){
        document.getElementById("img1").src = imgArray[counter-2];    
        document.getElementById("img2").src = imgArray[counter-1];    
        document.getElementById("img3").src = imgArray[counter+0];
    }
    else{
        document.getElementById("img1").src = imgArray[counter+0];    
        document.getElementById("img2").src = imgArray[counter+1];    
        document.getElementById("img3").src = imgArray[counter+2];    
    }
}

  function prevImage(){
    counter-=3;
    if(counter<0) counter = 0;
    
    
        document.getElementById("img1").src = imgArray[counter+0];    
        document.getElementById("img2").src = imgArray[counter+1];    
        document.getElementById("img3").src = imgArray[counter+2];    
         
  }