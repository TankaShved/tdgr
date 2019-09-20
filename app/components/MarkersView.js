import Marionette from 'backbone.marionette';
import ItemView from './ItemView';

export default Marionette.CollectionView.extend({
    // tagName: 'div',
    childView: ItemView
})