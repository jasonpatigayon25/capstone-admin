import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const handleAccountPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Products"
          />
          <View style={styles.iconsContainer}>
            <Icon name="shopping-cart" size={24} color="#05652D" style={styles.icon} />
            <Icon name="heart" size={24} color="#05652D" style={styles.icon} />
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
          <View style={styles.category}>
            <Image source={require('./assets/category1.jpg')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Category 1</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('./assets/category2.png')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Category 2</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('./assets/category3.png')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Category 3</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('./assets/category4.png')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Category 4</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('./assets/category5.png')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Category 5</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('./assets/category6.png')} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Category 6</Text>
          </View>
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.carouselContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require('./assets/feature1.jpg')} style={styles.featuredImage} />
            <Image source={require('./assets/feature2.jpg')} style={styles.featuredImage} />
            <Image source={require('./assets/feature3.jpg')} style={styles.featuredImage} />
          </ScrollView>
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.sectionTitle}>Recommended for You</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require('./assets/recommended1.jpg')} style={styles.recommendedImage} />
            <Image source={require('./assets/recommended2.webp')} style={styles.recommendedImage} />
            <Image source={require('./assets/recommended3.jpg')} style={styles.recommendedImage} />
            <Image source={require('./assets/recommended4.jpg')} style={styles.recommendedImage} />
            <Image source={require('./assets/recommended5.jpg')} style={styles.recommendedImage} />
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.navbarIconContainer}>
            <Icon name="home" size={24} color="#05652D" style={styles.navbarIcon} />
            <Text style={styles.navbarLabel}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
          <View style={styles.navbarIconContainer}>
            <Icon name="shopping-bag" size={24} color="#05652D" style={styles.navbarIcon} />
            <Text style={styles.navbarLabel}>Sell</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
          <View style={styles.navbarIconContainer}>
            <Icon name="heart" size={24} color="#05652D" style={styles.navbarIcon} />
            <Text style={styles.navbarLabel}>Donate</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <View style={styles.navbarIconContainer}>
            <Icon name="bell" size={24} color="#05652D" style={styles.navbarIcon} />
            <Text style={styles.navbarLabel}>Notification</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAccountPress}>
          <View style={styles.navbarIconContainer}>
            <Icon name="user" size={24} color="#05652D" style={styles.navbarIcon} />
            <Text style={styles.navbarLabel}>Account</Text>
          </View>
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
  header: {
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    backgroundColor: '#FFF',
    color: '#000',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  categoriesContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  category: {
    alignItems: 'center',
    marginRight: 10,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  categoryTitle: {
    fontSize: 12,
    color: '#000',
  },
  carouselContainer: {
    marginBottom: 20,
  },
  featuredImage: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  recommendedContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  recommendedImage: {
    width: 200,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#FFF',
  },
  navbarIconContainer: {
    alignItems: 'center',
  },
  navbarIcon: {
    marginTop: 10,
  },
  navbarLabel: {
    color: '#05652D',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Home;
