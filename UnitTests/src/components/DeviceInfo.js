import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getDeviceId, getApplicationName } from 'react-native-device-info'

function DeviceInfo() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>{getDeviceId()}</Text>
      <Text style={{ fontWeight: 'bold' }}>{getApplicationName()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
})

export default DeviceInfo
