import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Tile = ({ number, onClick, isCorrect, forceOpen, disabled = false }) => {
  const [opened, setOpened] = React.useState(false)

  const handleClick = () => {
    setOpened(true);

    if (onClick) {
      onClick(number)
    }
  }

  const getBackground = () => {
    if (opened) {
      if (isCorrect) {
        return 'rgb(63, 182, 97)'
      }

      return 'rgb(255, 111, 111)'
    }

    if (forceOpen && isCorrect) {
      return 'rgb(63, 182, 97)'
    }

    return 'rgb(209, 209, 209)'
  }

  
  const styles = StyleSheet.create({
    tile: {
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: getBackground(),
      height: 100,
      fontWeight: '600',
      width: '33.33%',
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  
  const title = (opened || (forceOpen && isCorrect)) && `${number}`;

  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={handleClick}
      disabled={disabled}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 25
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}


export default Tile;
