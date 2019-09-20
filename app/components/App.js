import Marionette from 'backbone.marionette';
import MapView from './MapView';
import MapMarkerModel from './MapMarkerModel';
import MarkerCollection from './MarkerCollection';

export default Marionette.Application.extend({
    region: '#app',

    onStart() {
        let markers = new MarkerCollection()

        markers.add({
            x: 47.23012,
            y: 39.71265,
            title: 'sdfv'
        })
        markers.add({
            x: 47.24012,
            y: 39.7135
        })
        markers.add({
            x: 47.242,
            y: 39.714
        })

        this.showView(new MapView(markers));


    }

});