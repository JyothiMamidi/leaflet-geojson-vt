var map;
var layerControl;

function initMap() {
    var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    var geoq = L.tileLayer('//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}');
    map = L.map('map', {
        center: [35.461, 139.603],
        zoom: 11,
        layers: [osm]
    });
    layerControl = L.control.layers({
        'osm': osm,
        'geoq': geoq
    }, {}).addTo(map);
    L.hash(map);
}

function drawCanvasLayer(url, name, style) {
    var canvas = L.tileLayer.canvas().addTo(map);
    layerControl.addOverlay(canvas, name);
    drawGeoJSON(canvas, url, style)
}

function main() {
    initMap();
    style = {
        fillColor: '#1EB300',
        color: '#160',
        weight: 5
    }
    drawCanvasLayer('http://handygeospatial.github.io/geojsonvt-ksj-site/kanagawa_yoto.geojson', 'polygon', style)
    drawCanvasLayer('../libs/greenway.json', 'polyline', style)
    // drawGeoJSON('./libs/busstop.json')
}

main();