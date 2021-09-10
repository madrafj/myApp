import React,{ useState, useContext } from "react"
import { Alert, Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../../styles"
import { DataContext } from "../register"

const Akun = ({navigation}) => {
  const {state, dispatch} = useContext(DataContext)

  const handleChange = newData => {
    dispatch({
      type: 'addAkun',
      data: newData
    })
  }

  const handleSubmit = () => {
    const message = `Profil ${state.profilUsr.fullName} telah disimpan`
    Alert.alert(message)
    console.log(state)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.label}>
          Password akan digunakan untuk masuk
        </Text>
        <TextInput
          placeholder="Password"
          value={state.akunUsr.nuPassword}
          secureTextEntry
          style={styles.input}
          onChangeText={txt => handleChange({ password: txt })}
        />
        <Text style={styles.label}>
          Ulangi Password
        </Text>
        <TextInput
          placeholder="Ulangi Password"
          value={state.akunUsr.rePassword}
          secureTextEntry
          style={styles.input}
          onChangeText={txt => handleChange({ rePassword: txt })}
        />
        <Text style={styles.info}>
          Ulangi inputan Password sebelumnya
        </Text>
        <Text style={styles.label}>PIN</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="PIN"
          value={state.akunUsr.pin}
          secureTextEntry
          style={styles.input}
          onChangeText={txt => handleChange({ pin: txt })}
        />
        <Text style={styles.info}>
          Terdiri dari 6 angka
        </Text>
        <Text style={styles.label}>Ulangi PIN</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Ulangi PIN"
          value={state.akunUsr.rePin}
          secureTextEntry
          style={styles.input}
          onChangeText={txt => handleChange({ rePin: txt })}
        />
        <Text style={styles.info}>
          Ulangi inputan PIN sebelumnya
        </Text>
        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate('Alamat')} >
            <View style={styles.buttonBack}>
              <Text style={styles.btnTextLeft}>Kembali</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} >
            <View style={styles.buttonRight}>
              <Text style={styles.btnText}>Kirim</Text>
            </View>
          </TouchableOpacity>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Akun