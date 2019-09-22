import Marionette from 'backbone.marionette';
import itemtemplate from '../templates/item.jst';

export default Marionette.View.extend({
    template: itemtemplate,
    className: "modal-content",
    events: {
        "click div": 'onWindowClick'
    },
    modelEvents: {
        'change:active': 'render'
    },
    onWindowClick: function() {
        const currentModule = this.model
        currentModule.trigger('clickedMe', this.model)
        currentModule.set('active', true)
    }
});