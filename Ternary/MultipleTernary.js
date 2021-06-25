//job can be done by this
var icon = (area == 1) ? icon1 : (area == 2) ? icon2 : icon0;

/*But this is starting to get complicated. You may well be better off just creating a function to do this work instead:*/

var icon = getIcon(area);

function getIcon(area) {
  if (area == 1) { 
    return icon1; 
  } else if (area == 2) { 
    return icon2; 
  }

  return icon0;
}