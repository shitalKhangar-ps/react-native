import { StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
      // flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    logo: {
      width: 80,
      height: 80,
      // alignSelf: 'center',
      marginBottom: 20,
     
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 20,
      color: '#000',
     
    },
    subtitle: {
        color: "#d4d6d9",
    fontSize: 18,
    marginVertical: 10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
    },
    checkbox: {
      marginRight: 8,
    },
  
    input: {
        flex:1,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#000',
    },
    eyeIcon: {
      padding: 10,
    },
    passwordInput: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
    },
    errorText: {
      color: 'red',
      marginBottom: 5,
    },
    termsContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    termsText: {
      fontSize: 14,
      color: 'gray',
    },
    linkText: {
        color: '#3386fe',
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
   
    },
    orText: {
      textAlign: 'center',
      marginVertical: 20,
      color: 'gray',
    },
    googleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'gray',
      borderWidth: 1,
      padding: 15,
      borderRadius: 5,
    },
    googleIcon: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    googleButtonText: {
      fontSize: 16,
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      marginTop: 20,
      marginBottom:40
    },
    loginText: {
        fontSize: 16,
        color: '#000',
    },
    loginLink: {
        color: 'blue',
        fontSize: 16,
    },
    inputContainer:{
      borderColor: '#B8B8B8',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 10, 
    },
    label:{
        fontSize: 15,
        fontWeight:'700',
        paddingHorizontal: 10,
        paddingTop: 5,
    },
    image: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 40,
      },
      inputLabel: {
        fontSize: 14,
        marginBottom: 5,
        color: 'gray',
      },
      passwordContainer: {
        flexDirection: 'row',
      },
      eyeIcon: {
        fontSize: 18,
        color: 'gray',
      },
      updateButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
      },
      updateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
        backButton: {
    // position: 'absolute',

  },
  backButtonText: {
    fontSize: 18,
    color: 'black',
  },
  verifyButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }, codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#B8B8B8',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 14,
    color: 'gray',
  },
  resendText: {
    fontSize: 14,
    color: '#007AFF',
    marginLeft: 5,
  },
  });