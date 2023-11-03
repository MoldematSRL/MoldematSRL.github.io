// map.js
function initMap() {
    // LeaftletJS Map
    var map = L.map('map').setView([-34.7217851, -58.3744177], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    var marker = L.marker([-34.7217851, -58.3744177]).addTo(map);
    marker.bindPopup("<b class='leafletb'>Direccion</b><br>Las Piedras 2804").openPopup();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
}

// Llama a la función initMap en cada página donde quieras mostrar el mapa
if (document.getElementById('map')) {
    initMap();
}