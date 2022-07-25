import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { useAppContext } from '../../context/AppContext';

const Header = () => {
  const { sort, handleSort } = useAppContext();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/spacex-logo.png')}
        resizeMode={'contain'}
      />
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        items={[
          { label: 'JavaScript', value: 'JavaScript' },
          { label: 'TypeScript', value: 'TypeScript' },
          { label: 'Python', value: 'Python' },
          { label: 'Java', value: 'Java' },
          { label: 'C++', value: 'C++' },
          { label: 'C', value: 'C' },
        ]}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSort(sort === 'asc' ? 'desc' : 'asc')}>
        <Text style={styles.buttonText}>
          Sort {sort === 'asc' ? 'descending' : 'ascending'}
        </Text>
        <Image
          style={styles.buttonIcon}
          source={require('../../assets/icon/sort.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  logo: {
    height: 50,
    width: 200,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#215184',
    flexDirection: 'row',
    height: 43,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  buttonIcon: {
    marginLeft: 8,
  },
});

export default Header;
