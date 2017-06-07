'use strict'

const direItem = (dire, update) => {
  const item = $('<div class="dire"></div>');
  const name = $('<p class="dire-name">'+dire.name+'</p>');
  const address = $('<p class="dire-adress">'+dire.address+'</p>');
  const district = $('<p class="dire-district">'+dire.district+'</p>');
  const flag = $('<a href="#"><i class="material-icons">my_location</i></a>');

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
