import './styles/application.css';
import App from 'components/App';
import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.start();
});