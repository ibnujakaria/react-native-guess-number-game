import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

const InputNumber = ({ onStart }) => {
  const [number, setNumber] = React.useState(null);

  return (
    <View>
      <Text>
        Input Number to Guess: {number}
      </Text>

      <TextInput
        type="number"
        keyboardType="number-pad"
        onChangeText={value => {
          setNumber(parseInt(value))
        }}
        style={styles.input}
      />

      <Button
        title="Start"
        onPress={() => onStart(number)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    fontSize: 20,
  }
})

export default InputNumber;
