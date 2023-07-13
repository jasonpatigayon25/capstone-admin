import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleButtonPress = () => {
    navigation.navigate('Login');
  };

  const handleGetStartedPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require('./assets/AppLogo.png')}
          style={[styles.logo, { width: 320, height: 70 }]}
        />
        <Text style={styles.title}>Welcome to ECOMercado!</Text>
        <Text style={styles.subtitle}>
          Shop and donate to reduce waste and support a sustainable future.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          onPress={handleGetStartedPress}
          style={[styles.button, { width: 300, height: 50 }]}
          color="#05652D"
        />
        <TouchableOpacity onPress={handleButtonPress} style={[styles.button, { width: 300, height: 50 }]}>
          <Text style={styles.link}>I Already Have An Account, Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3FCE9',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#05652D',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#05652D',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
  },
  link: {
    color: '#05652D',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default Home;