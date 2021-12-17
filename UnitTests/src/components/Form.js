import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  StyleSheet
} from 'react-native'

function Form({ inputs, onSubmit }) {
  const [form, setForm] = useState({})

  return (
    <FlatList
      keyExtractor={item => item.key}
      data={inputs}
      renderItem={({ item }) => (
        <View style={styles.inputContainer}>
          <Text testID="text">{item.question}</Text>
          <TextInput
            testID="input"
            style={styles.input}
            onChangeText={text => {
              setForm(state => ({
                ...state,
                [item.question]: text
              }))
            }}
          />
        </View>
      )}
      ListFooterComponent={() => (
        <TouchableOpacity onPress={() => onSubmit(form)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  inputContainer: { justifyContent: 'space-between', marginBottom: 10 },
  input: { borderBottomWidth: 1, borderBottomColor: 'black' }
})

Form.defaultProps = {
  inputs: [
    { key: '1', question: 'What is your name?' },
    { key: '2', question: 'What is your favorite color?' }
  ],
  onSubmit: () => {}
}

export default Form
