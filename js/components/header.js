'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true" style="display: none"></i>');
  const input = $('<div class="row"><form class="col l12 s12"><div class="row"><div class="input-field col s12 l6"><i class="material-icons prefix">search</i><input id="icon_prefix" type="text" class=""></div></div></form></div>');


  header.append(icon);
  header.append(title);
  title.append(input);


  return header;
}
