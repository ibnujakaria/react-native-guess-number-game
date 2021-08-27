import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';


import InputNumber from './containers/InputNumber'
import GameBoard from './containers/GameBoard'

function App() {
  const [numberToGuess, setNumberToGuess] = React.useState(2);

  const handleReset = () => {
    setNumberToGuess(null)
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text
        style={{
          fontSize: 20
        }}
      >
        Guess Number
      </Text>
    
      {numberToGuess === null && (
        <InputNumber
          onStart={setNumberToGuess}
        />
      )}

      {numberToGuess !== null && (
        <View style={styles.control}>
          <Text className="number-to-guest">
            Number: {numberToGuess}
          </Text>
          <Button
            onPress={handleReset}
            title="Reset"
          />
        </View>
      )}

      <GameBoard
        numberToGuess={numberToGuess}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 120
  },
  control: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5
  }
});
