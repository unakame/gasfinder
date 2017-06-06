'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  const input = $('<div class="row"><div class="input-field col m6 s12"><i class="material-icons">search</i><input type="text" placeholder="          Ingresa tu distrito a buscar" data-length="10"></div></div>');

  header.append(title);
  title.append(input);

  return header;
}
