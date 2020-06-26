/* Яндекс карта */

ymaps.ready(function () {
  var myIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="width: 230px; padding-top: 60px; padding-left: 60px; text-align: left; text-shadow: 2px 2px 2px #FFFFFF; font-size: 16px; color: #9D1707; font-weight: bold">Большая конюшенная ул., 19</div>');
  var myMap = new ymaps.Map(document.querySelector('.big-map'), {
    center: [59.938635, 30.323118],
    zoom: 17,
    controls: []
  },
  {
    searchControlProvider: 'yandex#search'
  }),
    myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
      iconContent: 'Большая конюшенная ул., 19',

    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/icon-marker.svg',
      iconImageSize: [66, 66],
      iconImageOffset: [-33, -66],
      iconContentLayout: myIconContentLayout

    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
});
