function mapInit() {
  let map = L.map('mapid').setView([38.9897, -76.9378], 13)
  ;

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmFsZHJpYyIsImEiOiJja202emNkM2QwdDAyMm5vNWg0MWhzdnk1In0.QQiGnvi2NY95P_v8StcLxQ'
  }).addTo(map);
  return map;
}

async function dataHandler(mapObjectFromFunction) {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const request = await fetch(endpoint);
  const mArr = await request.json();
    
  function findMatches(searchQuery, mArr){
      return mArr.filter(place => {
            const regex = new RegExp(searchQuery, 'gi'); //regExp is an object that goes into .match method
            return place.zip.match(regex) && place.geocoded_column_1;
        });
    };
    
    function displayMatches(event){
        query = event.target.value;
        let html = "";
        const sliced = findMatches(query, mArr).slice(0,5);
        sliced.forEach((item) =>{
          LongLat = item.geocoded_column_1.coordinates;
          L.marker([LongLat[1],LongLat[0]]).addTo(mapObjectFromFunction);
          html += `<li class = "box">
                    <span class="name">${item.name}</span> <br>
                    <span class="category">${item.category}</span> <br>
                    <address>
                        ${item.city} <br>
                        ${item.address_line_1}
                    </address>
                </li>           
            `;
        });
        
        
         
    
        //This used to change html from an array to a big string, but .join() is now below
    
        if(query){
            suggestions.innerHTML = html; //takes the html strong from html and creates html in this element
            
        }else {
            suggestions.innerHTML = "";
        }
    };
    
        const searchInput = document.querySelector('.search'); //This chooses an element with the class search
        const suggestions = document.querySelector('.suggestions'); //Chooses element with class suggestions
    
        searchInput.addEventListener('change',(evt)=> displayMatches(evt));
        form
        searchInput.addEventListener('keyup',(evt)=> displayMatches(evt));
}


async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;



