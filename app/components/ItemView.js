import Marionette from 'backbone.marionette';
import itemtemplate from '../templates/item.jst';

export default Marionette.View.extend({
    template: itemtemplate,
    className: "modal-content"
});

console.log(itemtemplate)