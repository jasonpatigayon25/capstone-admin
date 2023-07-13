import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {

  const handleForgotPassword = () => {
    alert("Forgot Password clicked");
  };

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  const handleLoginButton = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#05652D" style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
        <TouchableOpacity style={styles.helpIconContainer}>
          <Icon name="question-circle" size={24} color="#05652D" style={styles.helpIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <Image
        source={require('./assets/AppLogo.png')}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Icon name="user" size={24} color="#D3D3D3" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="#D3D3D3" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLoginButton}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSignUpPress}>
        <Text style={styles.loginText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('./assets/facebook.webp')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('./assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3FCE9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    color: '#000',
  },
  helpIconContainer: {
    marginLeft: 'auto',
  },
  helpIcon: {
    color: '#05652D',
    fontSize: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#D3D3D3',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  logo: {
    width: 320,
    height: 70,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#05652D',
  },
  buttonContainer: {
    height: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05652D',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
    color: '#000',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D3D3D3',
    marginRight: 10,
    marginLeft: 10,
  },
  orText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default Login;
