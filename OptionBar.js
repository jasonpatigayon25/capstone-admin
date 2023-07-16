import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OptionBar = ({ options, selectedOption, onSelectOption }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    onSelectOption(option);
    setShowOptions(false);
  };

  const getTitle = () => {
    if (selectedOption === 'Home') {
      return 'Admin';
    } else {
      return selectedOption;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleOptions} style={styles.header}>
        <Icon name="bars" size={30} color="#05652D" style={styles.menuIcon} />
        <Text style={styles.title}>{getTitle()}</Text>
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.option, option === selectedOption && styles.selectedOption]}
              onPress={() => handleOptionSelect(option)}
            >
              {option === 'Home' && <Icon name="home" size={24} color="#05652D" style={styles.optionIcon} />}
              {option === 'User Statistics' && <Icon name="users" size={24} color="#05652D" style={styles.optionIcon} />}
              {option === 'Product Metrics' && <Icon name="bar-chart" size={24} color="#05652D" style={styles.optionIcon} />}
              {option === 'Donation Reviews' && <Icon name="comment" size={24} color="#05652D" style={styles.optionIcon} />}
              {option === 'Product Management' && <Icon name="shopping-cart" size={24} color="#05652D" style={styles.optionIcon} />}
              {option === 'User Feedback' && <Icon name="commenting" size={24} color="#05652D" style={styles.optionIcon} />}
              {option === 'Settings' && <Icon name="cog" size={24} color="#05652D" style={styles.optionIcon} />}
              {option === 'Log out' && <Icon name="sign-out" size={24} color="#05652D" style={styles.optionIcon} />}
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  menuIcon: {
    marginLeft: 20,
  },
  title: {
    marginLeft: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#05652D',
  },
  optionsContainer: {
    backgroundColor: '#FFF',
    marginTop: 10,
    paddingVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedOption: {
    backgroundColor: '#E3FCE9',
  },
  optionText: {
    marginLeft: 25,
    fontSize: 24,
    color: '#05652D',
  },
  optionIcon: {
    marginRight: 10,
  },
});

export default OptionBar;
