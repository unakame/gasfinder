'use strict'

 const StationDetails = (update) =>{
   const container = $('<div class="stationDetail"></div>');
   const title1 = $('<h4>'+state.selectedStation.name+'</h4><hr>');
   const address = $('<p>'+state.selectedStation.address+'</p>');
   const icon = $('<i class="fa fa-chevron-left"></i>');
   const products = $('<div class="box-products">'+'<div>'+state.selectedStation.products[0]+'</div>'+'<div>'+state.selectedStation.products[1]+'</div>'+'<div>'+state.selectedStation.products[2]+'</div>'+'<div>'+state.selectedStation.products[3]+'</div>'+'</div>');

     /*const map = new GMaps({
     div: '#map',
     lat: -12.043333,
     lng: -77.028333
   });

   const map1 = $('<div id="map">'+map+'<div id="map">')*/


   container.append(icon);
   container.append(title1);
   container.append(address);
   container.append(products);
  

   icon.on('click',(e) =>{
     e.preventDefault();
     state.selectedStation = null;
     update();
   });

/*
   title1.on('click',(e) => {
     e.preventDefault();
     state.stations = null;
     update();
   })
*/
   return container;
 }
