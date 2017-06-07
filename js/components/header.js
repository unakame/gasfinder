'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  const input = $('<div class="row"><form class="col l12 s12"><div class="row"><div class="input-field col s6"><i class="material-icons prefix">search</i><input id="icon_prefix" type="text" class=""></div></div></form></div>');

  header.append(title);
  title.append(input);


  return header;
}
