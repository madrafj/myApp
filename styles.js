import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scroll: {
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 16,
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 16
  },
  logo: {
    width: 131,
    height: 138,
    alignSelf: 'center',
    margin: 24
  },
  label: {
    marginTop: 12,
    marginRight: '8%',
    fontSize: 12,
    fontWeight: 'bold',
    width: 'auto',
    minWidth: '40%',
  },
  info: {
    fontSize: 12
  },
  centerText: {
    textAlign: 'center'
  },
  input: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#888',
    width: 'auto',
    minWidth: '48%'
  },
  column: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  pickerBox: {
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#888'
  },
  forget: {
    fontSize: 14,
    color: '#ac2',
    alignSelf: 'flex-end',
    marginBottom: 12
  },
  button: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#9d0',
    borderRadius: 4,
    elevation: 1
  },
  buttonRight: {
    padding: 8,
    marginTop: 28,
    backgroundColor: '#9d0',
    borderRadius: 4,
    width: 'auto',
    minWidth: 160,
    alignSelf: 'flex-end',
    elevation: 1
  },
  buttonBack: {
    padding: 8,
    marginTop: 28,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 'auto',
    minWidth: 160,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'center'
  },
  btnTextLeft: {
    color: '#222',
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'center'    
  }
});

export default styles