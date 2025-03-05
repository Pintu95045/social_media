import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HashRouter } from 'react-router-dom';  // ✅ Add this
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>  {/* ✅ Wrap inside HashRouter */}
      <App />
    </HashRouter>
  </Provider>
);
