(this.webpackJsonpvumap=this.webpackJsonpvumap||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"a":[{"properties":{"id":"0","room":"G229","floor":"1","building":"W&N","electricityPlugs":true,"availableSpots":true},"geometry":{"type":"Point","coordinates":[52.33290060951715,4.865636342340878]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"1","room":"A412","floor":"4","building":"W&N","electricityPlugs":true,"availableSpots":false},"geometry":{"type":"Point","coordinates":[52.332858,4.863956]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"2","room":"S412","floor":"6","building":"W&N","electricityPlugs":false,"availableSpots":false},"geometry":{"type":"Point","coordinates":[52.33291,4.866902]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"3","room":"P112","floor":"1","building":"W&N","electricityPlugs":true,"availableSpots":true},"geometry":{"type":"Point","coordinates":[52.332913,4.864545]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"4","room":"02A01","floor":"2","building":"HG","electricityPlugs":true,"availableSpots":false},"geometry":{"type":"Point","coordinates":[52.334428,4.867311]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"5","room":"05A24","floor":"5","building":"HG","electricityPlugs":false,"availableSpots":true},"geometry":{"type":"Point","coordinates":[52.334477322920904,4.867476337725094]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"6","room":"05A25","floor":"5","building":"HG","electricityPlugs":true,"availableSpots":true},"geometry":{"type":"Point","coordinates":[52.33451,4.867502]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"7","room":"054","floor":"0","building":"NU","electricityPlugs":false,"availableSpots":false},"geometry":{"type":"Point","coordinates":[52.334359,4.863935]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"8","room":"423","floor":"4","building":"NU","electricityPlugs":false,"availableSpots":true},"geometry":{"type":"Point","coordinates":[52.33453632565785,4.863689058596066]},"metadata":{"open_building":false,"open_floor":false}},{"properties":{"id":"9","room":"FG2","floor":"0","building":"MF","electricityPlugs":true,"availableSpots":false},"geometry":{"type":"Point","coordinates":[52.332989116748166,4.86257325964595]},"metadata":{"open_building":false,"open_floor":false}}]}')},,,function(e,t,o){e.exports=o.p+"static/media/arrows.20f64834.png"},function(e,t,o){e.exports=o(18)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var r=o(0),i=o.n(r),a=o(2),l=o.n(a),n=(o(13),o(5)),s=o(3),p=(o(14),o(4)),c=["places"],u={height:"100vh",width:"100vw",marginRight:"auto",marginLeft:"auto"},d={styles:[{featureType:"all",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#f1efe8"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{visibility:"on"},{gamma:"1.19"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{visibility:"on"},{gamma:"0.00"},{weight:"2.07"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#b2ac83"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#b2ac83"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#8ac0c4"}]}],disableDefaultUI:!0,zoomControl:!0,gestureHandling:"cooperative"},m={lat:52.333642,lng:4.865137};function f(){var e=Object(s.d)({googleMapsApiKey:"AIzaSyDNo_5gsNpQ3XujhLIw146QoSftd27aj3k",libraries:c}),t=e.isLoaded,o=e.loadError,r=i.a.useState(null),a=Object(n.a)(r,2),l=a[0],f=a[1];return o?"Error":t?i.a.createElement("div",null,i.a.createElement("h1",null,"VU Study Spots \xa0",i.a.createElement("span",{role:"img","aria-label":"university"},"\ud83c\udfeb")),i.a.createElement("div",{className:"mapContainer"},i.a.createElement(s.a,{mapContainerStyle:u,zoom:window.innerWidth>768?18:16,options:d,center:m,onClick:function(){f(null)}},p.a.map((function(e){return i.a.createElement(s.c,{id:"Marker",key:e.properties.id,position:{lat:e.geometry.coordinates[0],lng:e.geometry.coordinates[1]},onClick:function(){f(e)},icon:{url:"https://image.flaticon.com/icons/svg/2232/2232688.svg",scaledSize:new window.google.maps.Size(35,35)}})})),l?i.a.createElement(s.b,{position:{lat:l.geometry.coordinates[0],lng:l.geometry.coordinates[1]},onCloseClick:function(){f(null)}},i.a.createElement("div",{id:"InfoWindow"},i.a.createElement("p",{className:"loc"},"Room: ",l.properties.room),i.a.createElement("p",{className:"loc"},"Floor: ",l.properties.floor),i.a.createElement("p",{className:"loc"},"Building: ",l.properties.building),i.a.createElement("p",{className:l.properties.availableSpots?"availSpots":"notAvail"},l.properties.availableSpots?"Free spots are available!":"No free spots at the moment."),i.a.createElement("p",{className:l.properties.electricityPlugs?"availSpots":"notAvail"},l.properties.electricityPlugs?"Power sockets are available!":"There are no power sockets here."))):null))):"Loading..."}o(15);var g=o(7),y=o.n(g),b=window.innerHeight;function v(){window.scrollTo({top:b,behavior:"smooth"})}function _(){return i.a.createElement("div",null,i.a.createElement("img",{className:"arrows",src:y.a,alt:"arrows",onClick:v}))}o(16);function S(e){return i.a.createElement("div",{className:"accordion__child "+(e.open?"open":"closed")},i.a.createElement("div",{className:"accordion__title",onClick:function(){return e.toggleStudySpot(e.index,e.type)},onMouseDown:function(e){return e.stopPropagation()}},e.title),i.a.createElement("div",{className:"accordion__body"},e.body))}o(17);function E(){var e=Object(r.useState)(p.a),t=Object(n.a)(e,2),o=t[0],a=t[1],l=function(e,t){a(o.map((function(o){return o.properties.id===e&&("building"===t?o.metadata.open_building=!o.metadata.open_building:"floor"===t&&(o.metadata.open_floor=!o.metadata.open_floor)),o})))},s=o.map((function(e){return e.properties.building}));return i.a.createElement("div",{className:"accordion__container"},o.filter((function(e,t){return s.indexOf(e.properties.building)===t})).map((function(e){return i.a.createElement(S,{key:e.properties.id,type:"building",index:e.properties.id,open:e.metadata.open_building,toggleStudySpot:l,title:"Building: "+e.properties.building,body:o.filter((function(t){return t.properties.building===e.properties.building})).filter((function(t,r){return o.filter((function(t){return t.properties.building===e.properties.building})).map((function(e){return e.properties.floor})).indexOf(t.properties.floor)===r})).map((function(e){return i.a.createElement(S,{key:e.properties.id,type:"floor",index:e.properties.id,open:e.metadata.open_floor,toggleStudySpot:l,title:"Floor: "+e.properties.floor,body:o.filter((function(t){return t.properties.floor===e.properties.floor&&t.properties.building===e.properties.building})).map((function(e){return i.a.createElement("div",{className:"accordionless_body",key:e.properties.id},"Room: "+e.properties.room,i.a.createElement("div",{className:e.properties.availableSpots?"availText":"hide"},function(e){var t="";return e.properties.availableSpots&&(t="Free Spots!"),t}(e)),i.a.createElement("div",{className:e.properties.electricityPlugs?"availText":"hide"},function(e){var t="";return e.properties.electricityPlugs&&(t="Power Sockets!"),t}(e)))}))})}))})})))}function P(){return i.a.createElement("div",null,i.a.createElement(f,null),i.a.createElement(_,null),i.a.createElement(E,null))}l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.827da1d6.chunk.js.map