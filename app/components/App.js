import Marionette from 'backbone.marionette';
import MapView from './MapView';
import MarkerCollection from './MarkerCollection';
import MarkersView from './MarkersView'

export default Marionette.Application.extend({
    region: '#app',

    onStart() {
        let markers = new MarkerCollection()

        markers.add({
            x: 47.24005,
            y: 39.71068,
            title: 'Парк ДГТУ',
            discription: 'Студенческий парк',
            iconSettings: {
                iconUrl: '/images/tree.png',
                iconSize: [26, 26],
                popupAnchor: [0, -13]
            }
        })
        markers.add({
            x: 47.23938,
            y: 39.71274,
            title: 'Общежитие ДГТУ',
            discription: '',
            iconSettings: {
                iconUrl: '/images/bed.png',
                iconSize: [28, 19],
                popupAnchor: [0, -13]
            }
        })
        markers.add({
            x: 47.23853,
            y: 39.71315,
            title: 'Остановка пл. Гагарина',
            discription: '93, 23',
            iconSettings: {
                iconUrl: '/images/train.png',
                iconSize: [16, 20],
                popupAnchor: [0, -13]
            }
        })
        markers.add({
            x: 47.23721,
            y: 39.7109,
            title: 'Остановка общежитие РИСИ',
            discription: '1, 5, 22, 33',
            iconSettings: {
                iconUrl: '/images/P.png',
                iconSize: [9, 12],
                popupAnchor: [0, -13]
            }
        })
        markers.add({
            x: 47.24042,
            y: 39.71268,
            title: 'Шашлычная',
            discription: '',
            iconSettings: {
                iconUrl: '/images/food.png',
                iconSize: [26, 19],
                popupAnchor: [0, -13]
            }
        })


        this.showView(new MapView(markers));
        this.showView(new MarkersView({ collection: markers }))

    }

});