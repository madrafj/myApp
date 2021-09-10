import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles';

const Login = (props) => {
  const [userText, setUserText] = useState('')
  const [passW, setPassW] = useState('')

  const handleSubmit = () => {
    fetch('https://edoindo.com/modes/api/mobile/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Data: userText,
        Password: passW,
        DeviceID: 'dde234',
        DeviceType: 'ANDROID',
        DeviceToken: '123ffedreast',
      })
    })
    .then(res => console.log(res.status))
    .then(()=> Alert.alert('Ada Respon OK'))
    .catch(err => console.log(err.message))
  }

  return (
    <SafeAreaView style={styles.main}>
      <Image source={require('../img/logo.png')} style={styles.logo} />
      <Text style={styles.label}>Email / No HP</Text>
      <TextInput
        style={styles.input}
        onChangeText={txt => setUserText(txt)}
        value={userText}
        placeholder={'Email / No HP'} />
      <Text style={styles.label}>Password / PIN</Text>
      <TextInput secureTextEntry
        style={styles.input}
        onChangeText={txt => setPassW(txt)}
        value={passW}
        placeholder={'Password / PIN'} />
      <Text style={styles.forget}>Lupa Password ?</Text>
      <TouchableOpacity onPress={handleSubmit} >
        <View style={styles.button}>
          <Text style={styles.btnText}>Masuk</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login