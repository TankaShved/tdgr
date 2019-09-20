import Marionette from 'backbone.marionette';
import MapView from './MapView';

export default Marionette.Application.extend({
    region: '#app',

    onStart() {
        this.showView(new MapView());
    }

});