import React,{ useContext } from "react"
import { Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../../styles"
import { DataContext } from "../register"

const Profil =({navigation}) => {
  const {state, dispatch} = useContext(DataContext)

  const handleChange = newData => {
    dispatch({
      type: 'addProfil',
      data: newData
    })
  }

  const handleSubmit = () => {
    navigation.navigate('Alamat')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          placeholder="Nama Lengkap"
          value={state.profilUsr.fullName}
          style={styles.input}
          onChangeText={txt => handleChange({ fullName: txt })}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          value={state.profilUsr.email}
          style={styles.input}
          onChangeText={txt => handleChange({ email: txt })}
        />
        <Text style={styles.info}>
          Contoh: saya@gmail.com
        </Text>
        <Text style={styles.label}>
          Masukkan Nomor HP Yang Aktif Digunakan
        </Text>
        <TextInput
          placeholder="Nomor Handphone"
          value={state.profilUsr.phone}
          style={styles.input}
          onChangeText={txt => handleChange({ phone: txt })}
        />
        <Text style={styles.label}>Nama Ibu Kandung</Text>
        <TextInput
          placeholder="Nama Ibu Kandung"
          value={state.profilUsr.motherName}
          style={styles.input}
          onChangeText={txt => handleChange({ motherName: txt })}
        />
        <Text style={styles.label}>Pendidikan Terakhir</Text>
        <View style={styles.pickerBox} >
          <Picker
            selectedValue={state.profilUsr.education}
            onValueChange={(val, i) => handleChange({ education: val })}
          >
            <Picker.Item label="Pilih" value="" />
            <Picker.Item label="S1" value="s1" />
            <Picker.Item label="S2" value="s2" />
            <Picker.Item label="S3" value="s3" />
          </Picker>
        </View>
        <Text style={styles.label}>Status Pernikahan</Text>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={state.profilUsr.marital}
            style={styles.input}
            onValueChange={txt => handleChange({ marital: txt })}
          >
            <Picker.Item label="Pilih" value="" />
            <Picker.Item label="Menikah" value="married" />
            <Picker.Item label="Belum Menikah" value="single" />
          </Picker>
        </View>
        <Text style={styles.label}>Pekerjaan</Text>
        <TextInput
          placeholder="Karyawan Swasta"
          value={state.profilUsr.profession}
          style={styles.input}
          onChangeText={txt => handleChange({ profession: txt })}
        />
        <Text style={styles.label}>Deskripsi Tentang Anda</Text>
        <TextInput
          multiline
          placeholder="Tentang Anda"
          value={state.profilUsr.description}
          style={{...styles.input, textAlignVertical: 'top'}}
          numberOfLines={5}
          onChangeText={txt => handleChange({ description: txt })}
        />
        <Text style={styles.info}>
          Bisa berisi keahlian, pekerjaan atau pengalaman
        </Text>
        <TouchableOpacity onPress={handleSubmit} >
          <View style={styles.buttonRight}>
            <Text style={styles.btnText}>Selanjutnya</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profil