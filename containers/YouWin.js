import { Text, View, StyleSheet } from "react-native"
import React from 'react'

const YouWin = () => {
  return (
    <View 
      style={styles.message}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        Congratulations, you win!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: 'rgb(84, 230, 181)',
    padding: 20,
    marginBottom: 10
  }
})

export default YouWin
