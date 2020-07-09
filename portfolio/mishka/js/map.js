"use strict";
(function(){
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        const myMap = new ymaps.Map("map", {
            center: [59.9386, 30.3230],
            zoom: 17
        });
        let hideControls = function(){
            myMap.controls.remove('typeSelector');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('zoomControl');
            myMap.controls.remove('rulerControl');
            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
        };
        hideControls();
        const mishkaPin = new ymaps.Placemark([59.9386, 30.3230], {}, {
            iconLayout: "default#image",
            iconImageHref: "img/map-pin.svg",
            iconImageSize: [67,100],
            iconImageOffset: [-14,-90]
        });
        myMap.geoObjects.add(mishkaPin);
    }
    
})();