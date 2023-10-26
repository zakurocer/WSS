import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


// Related to lnguages:
import global_fr from './components/translations/fr/global.json'
import global_ar from './components/translations/ar/global.json'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';


i18next.init({
    interpolation: {escapeValue: true},
    lng: !localStorage.getItem('lang') ? 'fr' : localStorage.getItem('lang'),
    resources:{
        fr:{
            global: global_fr
        },
        ar:{
            global: global_ar
        }
    }
})

// Related to lnguages:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
);