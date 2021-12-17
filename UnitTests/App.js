import * as React from 'react'
import { View, SafeAreaView } from 'react-native'

import Header from './src/components/Header'
import Form from './src/components/Form'
import DeviceInfo from './src/components/DeviceInfo'

const App = () => {
  return (
    <SafeAreaView>
      <View style={{ padding: 12 }}>
        <Header title="testing" />
        <Form />
        <DeviceInfo />
      </View>
    </SafeAreaView>
  )
}

export default App
