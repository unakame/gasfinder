'use strict'

const direItem = (dire, update) => {
  const item = $('<div class="dire"></div>');
  const name = $('<h6 class="dire-name"><strong>'+dire.name+'</strong></h6>');
  const address = $('<p class="dire-address">'+dire.address+'</p>');
  const district = $('<p class="dire-district">'+dire.district+'</p>');
  const flag = $('<a href="#"><i class="material-icons">famap</i></a>');

  item.append(name);
  item.append(address);
  item.append(district);
  item.append(flag);
  flag.on('click',(e) =>{
    e.preventDefault();
    state.selectedStation = dire;
    update();
  });

   return item;
}

const DireGrid = (update) => {
  const direContainer = $('<div class="direContainer"></div>');
    state.stations.forEach((dire) =>{
      direContainer.append(direItem(dire,update));
    });
    console.log(state.stations);
   return direContainer;
}
