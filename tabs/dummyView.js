import React from "react"
import { View, Text } from "react-native"
import styles from "../styles"

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>This is Home</Text>
    </View>
  )
}

const Kontak = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>This is Kontak</Text>
    </View>
  )
}

export { Home, Kontak }