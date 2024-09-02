import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  contentContainerStyle:{
    flexGrow: 1 
  },
  iconContainer: {
    marginTop: 30,
  },
  welcomeContainer: {
    marginVertical: 10,
  },
  welcomText: {
    color: "#101317",
    fontSize: 34,
    fontWeight: "600",
  },
  highlightedColor: {
    color: '#3386fe',
  },
  logtocontinue: {
    color: "#d4d6d9",
    fontSize: 18,
    marginVertical: 10,
  },
  formContainer: {
    flex: 1,
  },
  inputWrapper: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#3386fe',
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    color: '#3386fe',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#636567',
  },
  iconWrapper: {
    padding: 5,
  },
  forgetPassContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgetPassText: {
    color: '#74acfe',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  socialTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
    position: 'relative',
  },
  socialText: {
    color: "#d0d2d4",
    fontSize: 16,
    backgroundColor: 'white',
    zIndex: 1,
    paddingHorizontal: 15,
  },
  line: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#d0d2d4',
    zIndex: 0,
  },
  googlebutton: {
    backgroundColor: 'white',
    paddingVertical: 15,  
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d0d2d4', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  googleIcon: {
    width: 24, 
    height: 24, 
  },
  googlebuttonText: {
    color: 'black',
    fontSize: 18,
  },
  registerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  registerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  registerText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default styles;
