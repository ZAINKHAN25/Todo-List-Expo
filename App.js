// Import necessary modules
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Modal, ScrollView } from 'react-native';
// import {  } from 'react-native-web';

// Import image files
const editImageicon = require('./edit-Image.png');
const deleteImageIcon = require('./delete-Icon.png');
const uploadImageIcon = require('./plus-icon.png');

// Main component
export default function App() {
  let [textInputValue, settextInputValue] = useState('');
  let [modalVisible, setModalVisible] = useState(false);
  let [selectedEditText, setselectedEditText] = useState('')
  let [errtext, seterrtext] = useState('')
  let [indexofEditText ,setIndexofEditText] = useState(0)

  let [mainData, setMainData] = useState(
    ["Hello"]
  )


  function addTaskHandler() {
    if (textInputValue === '') {
      seterrtext("Please Write Something in the input")
      setTimeout(()=>seterrtext(''), 3000)
    } else {
      var cloneOfMainData = [...mainData];
      cloneOfMainData.push(textInputValue)
      console.log(cloneOfMainData);
      setMainData(cloneOfMainData);
      settextInputValue('')
    }
  }

  function deleteSingleItem(i) {
    var cloneOfMainData = [...mainData];
    cloneOfMainData.splice(i, 1)
    setMainData(cloneOfMainData)
  }

  function editSingleItem(i) {
    var cloneOfMainData = [...mainData];
    setModalVisible(true);
    setselectedEditText(cloneOfMainData[i])
    setIndexofEditText(i)
  }

  function mainEditHandler() {
    setModalVisible(!modalVisible)
    var cloneOfMainData = [...mainData];
    cloneOfMainData.splice(indexofEditText, 1, selectedEditText)
    setMainData(cloneOfMainData)
  }

  return (
    <View style={styles.container}>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalText}
              value={selectedEditText}
              onChange={(e) => setselectedEditText(e.target.value)}
            />
            <Text
              style={[styles.button, styles.buttonClose]}
              onPress={mainEditHandler}>
              <Text style={styles.textStyle}>Update It</Text>
            </Text>
          </View>
        </View>
      </Modal>



        <Text style={styles.errtext}>
          {errtext}
        </Text>
      <Text style={styles.heading}>Today’s tasks</Text>

      <ScrollView style={styles.allTaskBox}>
        {/* Single task box */}

        {
          mainData.map((x, i) => {
            return (
              <View style={styles.singleTaskBox} key={i}>
                <Text style={styles.tasktText}>{x}</Text>
                <Image source={editImageicon} onPress={() => editSingleItem(i)} style={styles.editImageicon} />
                <Image source={deleteImageIcon} onPress={() => deleteSingleItem(i)} style={styles.deleteImageIcon} />
              </View>)
          })
        }

      </ScrollView>

      <View style={styles.uploadBox}>
        <TextInput
          style={styles.mainInput}
          placeholder='Write something here done'
          value={textInputValue}
          onChange={(e) => settextInputValue(e.target.value)}
        />
        <View style={styles.uploadButtonbox} onPress={addTaskHandler}>
          <Image source={uploadImageIcon} style={styles.uploadButton} />
        </View>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  allTaskBox: {
    marginTop: 25,
    height: '50%'
  },
  singleTaskBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  editImageicon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  deleteImageIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  tasktText: {
    flex: 15,
    fontSize: 20
  },
  uploadBox: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainInput: {
    flex: 5,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    fontSize: 20,
    marginRight: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  uploadButton: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  uploadButtonbox: {
    justifyContent: 'start',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    width: 50,
    height: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.82,
    shadowRadius: 2.22,

    elevation: 3,
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba( 0, 0, 0, 0.3)',
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
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    borderColor: 'black',
    fontSize: 20
  },

  errtext:{
    color: 'red',
    flex: 0.1,
    fontSize: 18
  }
});
