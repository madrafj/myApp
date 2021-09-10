import React,{ useContext } from "react"
import { Picker, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import styles from "../../styles"
import { DataContext } from "../register"

const provList = [
  { label: 'Jawa Barat', val: 'jabar' },
  { label: 'Jawa Tengah', val: 'jateng' },
  { label: 'Jawa Timur', val: 'jatim' },
  { label: 'Sumatera Barat', val: 'sumbar' },
  { label: 'DKI Jakarta', val: 'jakarta' },
  { label: 'Kalimantan Barat', val: 'kalbar' }
]

const Alamat = ({navigation}) => {
  const {state, dispatch} = useContext(DataContext)

  const handleChange = newData => {
    dispatch({
      type: 'addAlamat',
      data: newData
    })
  }

  const handleSubmit = () => {
    navigation.navigate('Akun')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.label}>Alamat</Text>
        <TextInput
          multiline
          placeholder="Alamat Lengkap"
          value={state.alamatUsr.alamat}
          style={{
            ...styles.input,
            textAlignVertical: 'top'
          }}
          numberOfLines={5}
          onChangeText={txt => handleChange({ alamat: txt })}
        />
        <View style={styles.column} >
          <Text style={styles.label}>RT</Text>
          <Text style={styles.label}>RW</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="00"
            value={state.alamatUsr.rt}
            style={styles.input}
            onChangeText={txt => handleChange({ rt: txt })}
            />
          <TextInput
            keyboardType="numeric"
            placeholder="00"
            value={state.alamatUsr.rw}
            style={styles.input}
            onChangeText={txt => handleChange({ rw: txt })}
          />
        </View>
        <Text style={styles.label}>Provinsi</Text>
        <View style={styles.pickerBox} >
          <Picker
            selectedValue={state.alamatUsr.education}
            onValueChange={txt => handleChange({ education: txt })}
          >
            <Picker.Item key={999} label="Pilih" value="" />
            {
              provList.map((v,i) => <Picker.Item key={i} label={v.label} value={v.val}/> )
            }
          </Picker>
        </View>
        <Text style={styles.label}>Kota</Text>
        <TextInput
          style={styles.input}
          value={state.alamatUsr.kota}
          onChangeText={txt => handleChange({ kota: txt })}
        />
        <Text style={styles.label}>Kecamatan</Text>
        <TextInput
          style={styles.input}
          value={state.alamatUsr.kecamatan}
          onChangeText={txt => handleChange({ kecamatan: txt })}
        />
        <Text style={styles.label}>Kelurahan / Desa</Text>
        <TextInput
          style={styles.input}
          value={state.alamatUsr.desa}
          onChangeText={txt => handleChange({ desa: txt })}
        />
        <Text style={styles.label}>Kode Pos</Text>
        <TextInput
          placeholder="Kode POS"
          value={state.alamatUsr.kodePos}
          style={styles.input}
          onChangeText={txt => handleChange({ kodePos: txt })}
        />
        <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate('Profil')} >
            <View style={styles.buttonBack}>
              <Text style={styles.btnTextLeft}>Kembali</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} >
            <View style={styles.buttonRight}>
              <Text style={styles.btnText}>Selanjutnya</Text>
            </View>
          </TouchableOpacity>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Alamat