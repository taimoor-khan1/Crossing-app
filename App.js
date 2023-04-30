import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/navigation';
import store from './src/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaView, View } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (



      <RootSiblingParent>
        <SafeAreaView style={{ flex: 1 }}>

          <Provider store={store}>


            <Routes />

          </Provider>
        </SafeAreaView>


      </RootSiblingParent>

    );
  }
}

export default App;
