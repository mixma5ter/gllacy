ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map('map', {
    center: [59.93932014, 30.32929868],
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/map_pin.png',
    // Размеры метки.
    iconImageSize: [218, 142],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-40, -140]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove("rulerControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("routeEditor");
}
