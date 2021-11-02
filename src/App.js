import React from 'react';
import Navigation from './navigation/Navigation';
import {store} from './store/store';
import {Provider} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
