import backbone from 'backbone';

export default backbone.Model.extend({
    defaults: {
        x: 47.24012,
        y: 39.71265,
        title: '',
        discription: '',
        iconSettings: {
            iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png'
        }
    }
})