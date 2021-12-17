import * as React from 'react'
import { View, Text, Button } from 'react-native'

function Header({ title, onPress }) {
  return (
    <View>
      <Text>{title}</Text>
      <Button testID="button" title="Testing" onPress={onPress} />
    </View>
  )
}

export default Header
