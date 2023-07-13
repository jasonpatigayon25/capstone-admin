import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Sell = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="arrow-left" size={24} color="#05652D" style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Sell Eco-Friendly Product</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Product Photo:</Text>
        <TouchableOpacity style={styles.addPhotoContainer}>
          <Icon name="camera" size={24} color="#D3D3D3" style={styles.addPhotoIcon} />
          <Text style={styles.addPhotoText}>Add Photo</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Product Name:</Text>
        <TextInput style={styles.input} placeholder="Enter Product Name" />
        <Text style={styles.label}>Price (PHP):</Text>
        <TextInput style={styles.input} placeholder="Enter Price in Pesos" />
        <Text style={styles.label}>Category:</Text>
        <TextInput style={styles.input} placeholder="Select Category" />
        <Text style={styles.label}>Product Description:</Text>
        <TextInput style={styles.input} placeholder="Enter Product Description" />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Add to Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#05652D',
  },
  divider: {
    height: 1,
    backgroundColor: '#D3D3D3',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  addPhotoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addPhotoIcon: {
    marginRight: 10,
  },
  addPhotoText: {
    color: '#D3D3D3',
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
  addButton: {
    backgroundColor: '#05652D',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonLabel: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Sell;
