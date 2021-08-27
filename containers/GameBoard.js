import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Tile from '../components/Tile';
import YouLose from './YouLose';
import YouWin from './YouWin';

const GameBoard = ({ numberToGuess }) => {
  const defaultChance = 3

  const [randomNumbers, setRandomNumbers] = React.useState([]);
  const [remainingChances, setRemainingChances] = React.useState(defaultChance);
  const [isWin, setIsWin] = React.useState(false);
  const [isLose, setIsLose] = React.useState(false);
  const [messageVisibility, setMessageVisibility] = React.useState(false);

  const handleWin = () => {
    setIsWin(true)
    showMessage()
  }
  
  const handleLose = () => {
    setIsLose(true)
    showMessage()
  }
  
  const showMessage = () => {
    setTimeout(() => {
      setMessageVisibility(true)

      setTimeout(() => setMessageVisibility(false), 1000)
    }, 1000)
  }

  // random the numbers
  React.useEffect(() => {
    const numbers = []
    const min = numberToGuess - (numberToGuess % 10)
    const max = min + 10

    for (let i = 0; i < 8; i++) {
      let number = null;

      do {
        number = Math.floor(Math.random() * (max - min) + min)
      } while (number === numberToGuess || numbers.includes(number));

      numbers.push(number)
    }

    // inject number to guess in the array
    const randomIndex = Math.floor(Math.random() * 9)
    numbers.splice(randomIndex, 0, numberToGuess)

    setRandomNumbers(numbers)
    setRemainingChances(defaultChance)
    setIsWin(false)
    setIsLose(false)
    setMessageVisibility(false)
  }, [numberToGuess])

  const handleTileClick = (number) => {
    if (number === numberToGuess) {
      handleWin()
    } else {
      setRemainingChances(_chance => _chance - 1)
    }
  }

  React.useEffect(() => {
    if (remainingChances < 1) {
      handleLose()
    }
  }, [remainingChances])

  return (
    <View
      key={numberToGuess}
      style={{
        width: '100%',
        marginTop: 10
      }}
    >

      {numberToGuess !== null && [0, 3, 6].map(i => (
        <View
          key={i}
          style={styles.tiles}
        >
        {randomNumbers.slice(i, i + 3).map((number) => (
          <Tile
            key={number}
            number={number}
            onClick={handleTileClick}
            disabled={isWin || isLose}
            isCorrect={number === numberToGuess}
            forceOpen={isLose}
          />
        ))}
        </View>
      ))}

      {messageVisibility && isWin && <YouWin />}
      {messageVisibility && isLose && <YouLose />}
    </View>
  )
}

const styles = StyleSheet.create({
  tiles: {
    borderRadius: 12,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '100%',
  }  
})

export default GameBoard;
