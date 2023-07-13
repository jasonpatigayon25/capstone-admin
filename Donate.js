import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Donate = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <View style={styles.backContainer}>
            <Icon name="arrow-left" size={24} color="#05652D" />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Donate</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Item Photo</Text>
          <TouchableOpacity style={styles.addPhotoContainer}>
            <Icon name="camera" size={24} color="#05652D" />
          </TouchableOpacity>
          <Text style={styles.label}>Item Name</Text>
          <TextInput style={styles.input} placeholder="Enter item name" />
          <Text style={styles.label}>Donate Location</Text>
          <TextInput style={styles.input} placeholder="Enter donation location" />
          <Text style={styles.label}>Message</Text>
          <TextInput style={styles.input} placeholder="Enter your message" multiline={true} />
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backContainer: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#05652D',
  },
  divider: {
    height: 1,
    backgroundColor: '#D3D3D3',
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  addPhotoContainer: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#FFF',
    color: '#000',
  },
  donateButton: {
    backgroundColor: '#05652D',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Donate;
