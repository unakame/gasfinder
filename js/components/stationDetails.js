'use strict'

 const StationDetails = (update) =>{
   const container = $('<div class="stationDetail"></div>');
   const title1 = $('<h2>'+state.selectedStation.name+'</h2>');

   container.append(title1);

/*
   title1.on('click',(e) => {
     e.preventDefault();
     state.stations = null;
     update();
   })
*/
   return container;
 }
