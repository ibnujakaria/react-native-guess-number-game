import { Text, View, StyleSheet } from "react-native"
import React from 'react'

const YouLose = () => {
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
        Unfortunately, you lose!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: 'rgb(235, 64, 64)',
    padding: 20,
    marginBottom: 10
  }
})

export default YouLose
