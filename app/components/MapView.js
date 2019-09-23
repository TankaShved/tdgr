import Marionette from 'backbone.marionette'
import * as opm from 'leaflet'
import 'leaflet-mouse-position'
import 'leaflet-draw'
import 'leaflet.measurecontrol'


export default Marionette.View.extend({
  id: 'map',
  template: _.noop,
  initialize: function(markers) {
    this.markers = markers
  },
  onDomRefresh: function() {
    let map = opm.map('mymap').setView([47.24012, 39.71265], 16)

    opm.control.mousePosition().addTo(map)
    opm.Control.measureControl().addTo(map)
    opm.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoidGFua2FzaHZlZCIsImEiOiJjazBycG9yZ3cwODRuM2NueDltdWxxNTRtIn0.vwhLG6zsu9SsTy66v4gfgQ'
    }).addTo(map)

    for (let model of this.markers.models) {
      const x = model.attributes.x
      const y = model.attributes.y
      const title = model.attributes.title
      const discription = model.attributes.discription
      const myIcon = opm.icon(model.attributes.iconSettings)
      const marker = opm.marker([x, y], { icon: myIcon }).addTo(map)

      var noga = '<b>' + title + '</b>' + '<br>' + discription
      const popup = marker.bindPopup(noga);

      marker.on('click', function() {
        model.set('active',true)
      })

      model.on('clickedMe', function(mrk) {
        const cx = mrk.attributes.x
        const cy = mrk.attributes.y
        popup.openPopup()
        map.setView([cx, cy], 16)
      }, this)

    }
  }
});
