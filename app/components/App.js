import Marionette from 'backbone.marionette';
import MapView from './MapView';
import MarkerCollection from './MarkerCollection';
import MarkersView from './MarkersView'

export default Marionette.Application.extend({
    region: '#app',

    onStart() {
        let markers = new MarkerCollection()

        markers.add({
            x: 47.23012,
            y: 39.71265,
            title: 'Парк ДГТУ',
            discription: 'Студенческий парк'
        })
        markers.add({
            x: 47.24012,
            y: 39.7135,
            title: 'Общежитие ДГТУ',
            discription: 'общежитие РИСИ'
        })
        markers.add({
            x: 47.242,
            y: 39.714,
            title: 'Остановка пл. Гагарина',
            discription: '93, 23'
        })
        markers.add({
            x: 47.24234,
            y: 39.7146,
            title: 'Остановка общежитие РИСИ',
            discription: '1, 5, 22, 33'
        })
        markers.add({
            x: 47.24252,
            y: 39.7141,
            title: 'Шашлычная',
            discription: 'qweer'
        })


        this.showView(new MapView(markers));
        this.showView(new MarkersView({ collection: markers }))

    }

});