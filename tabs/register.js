import React, { useReducer } from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Profil from "./register-tabs/profil"
import Alamat from "./register-tabs/alamat"
import Akun from "./register-tabs/akun"

const DataContext = React.createContext()

const initialState = {
  profilUsr: {
    fullName: '',
    email: '',
    phone: '',
    motherName: '',
    education: '',
    marital: '',
    profession: '',
    description: ''
  },
  alamatUsr: {
    alamat: '',
    rt: '',
    rw: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    desa: '',
    kodePos: ''
  },
  akunUsr: {
    nuPassword: '',
    rePassword: '',
    pin: '',
    rePin: ''
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'addProfil':
      return { ...state, profilUsr: { ...state.profilUsr, ...action.data} }
    case 'addAlamat':
      return { ...state, alamatUsr: { ...state.alamatUsr, ...action.data} }
    case 'addAkun':
      return { ...state, akunUsr: { ...state.akunUsr, ...action.data} }
    default:
      return state
  }
}

const Tab = createMaterialTopTabNavigator()

const Register = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DataContext.Provider
      value={{ state: state, dispatch: dispatch }}
    >
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={Profil} />
        <Tab.Screen name="Alamat" component={Alamat} />
        <Tab.Screen name="Akun" component={Akun} />
      </Tab.Navigator>
    </DataContext.Provider>
  )
}

export default Register
export { DataContext }