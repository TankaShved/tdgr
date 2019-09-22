import backbone from 'backbone';
import MapMarkerModel from './MapMarkerModel';

export default backbone.Collection.extend({
    model: MapMarkerModel,
    initialize: function() {
        this.on('change:active', function(model, newvalue) {
                if (newvalue) {
                    for (const marker of this.models) {
                        if (marker !== model) {
                            marker.set('active', false)
                        }
                    }
                }
            },
            this)

    }
})