import React, {
  Component,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'

import { connect } from 'react-redux'

import Navigation from './navigation/Navigation'

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='black'/>
        <Navigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default connect()(App)