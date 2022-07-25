import React, { useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useAppContext } from '../../context/AppContext';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { sort, setSort, setLaunchYear } = useAppContext();

  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={() => {
                setLaunchYear('2016');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>2016</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={() => {
                setLaunchYear('2018');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>2018</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={() => {
                setLaunchYear('2020');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>2020</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={() => {
                setLaunchYear(null);
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Image
        style={styles.logo}
        source={require('../../assets/spacex-logo.png')}
        resizeMode={'contain'}
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.button, { marginRight: 8 }]}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.buttonText}>Filter by Year</Text>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icon/select.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSort(sort === 'asc' ? 'desc' : 'asc')}>
          <Text style={styles.buttonText}>
            Sort {sort === 'asc' ? 'descending' : 'ascending'}
          </Text>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/icon/sort.png')}
          />
        </TouchableOpacity>
      </View>
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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#215184',
    flex: 1,
    flexDirection: 'row',
    height: 43,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  buttonIcon: {
    marginLeft: 8,
  },
  modal: {
    backgroundColor: '#ffffff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Header;
