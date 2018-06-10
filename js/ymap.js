ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map("map", {
    center: [59.93932014, 30.32929868],
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_pin.png',
    iconImageSize: [218, 142],
    iconImageOffset: [-40, -140]
  });

  myMap.geoObjects.add(myPlacemark);
}