import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OptionBar from './OptionBar';

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Logic for handling option selection
  };

  // Sample data for user statistics
  const totalUsers = 1000;
  const totalProductsPublished = 500;
  const totalDonors = 200;

  // Sample data for recent users
  const recentUsers = [
    { username: 'JohnDoe', date: '2022-05-01' },
    { username: 'JaneSmith', date: '2022-05-05' },
    // Add more usernames and dates
  ];

  return (
    <View style={styles.container}>
      <OptionBar
        options={['Home', 'User Statistics', 'Product Metrics', 'Donation Reviews', 'Product Management', 'User Feedback', 'Settings', 'Log out']}
        selectedOption={selectedOption}
        onSelectOption={handleOptionSelect}
      />
      <ScrollView contentContainerStyle={styles.content}>
        {selectedOption === 'Home' && (
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Total Users</Text>
              <Text style={styles.cardValue}>{totalUsers}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Total Products Published</Text>
              <Text style={styles.cardValue}>{totalProductsPublished}</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Total Donors</Text>
              <Text style={styles.cardValue}>{totalDonors}</Text>
            </View>
          </View>
        )}
        {selectedOption === 'User Statistics' && (
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Recent Users</Text>
            {recentUsers.map((user, index) => (
              <Text key={index}>
                Username: {user.username}, Date: {user.date}
              </Text>
            ))}
          </View>
        )}
        {/* Add other options and their corresponding content */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3FCE9',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#05652D',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#05652D',
  },
});

export default Admin;
