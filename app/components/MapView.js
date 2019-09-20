import Marionette from 'backbone.marionette';
import * as opm from 'leaflet';

export default Marionette.View.extend({
    id: 'map',
    template: _.noop,
    onDomRefresh: function() {
        let map = opm.map('mymap').setView([47.24012, 39.71265], 18)

        opm.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoidGFua2FzaHZlZCIsImEiOiJjazBycG9yZ3cwODRuM2NueDltdWxxNTRtIn0.vwhLG6zsu9SsTy66v4gfgQ'
        }).addTo(map)
    }
});