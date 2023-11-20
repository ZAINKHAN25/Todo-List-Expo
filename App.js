// Import necessary modules
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-web';

// Import image files
const editImageicon = require('./edit-Image.png');
const deleteImageIcon = require('./delete-Icon.png');
const uploadImageIcon = require('./plus-icon.png');

// Main component
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today’s tasks</Text>
      <ScrollView style={styles.allTaskBox}>
        {/* Single task box */}
        <View style={styles.singleTaskBox}>
          <Image source={editImageicon} style={styles.editImageicon} />
          <Text style={styles.tasktText}>Text will be come here</Text>
          <Image source={deleteImageIcon} style={styles.deleteImageIcon} />
        </View>
        <View style={styles.singleTaskBox}>
          <Image source={editImageicon} style={styles.editImageicon} />
          <Text style={styles.tasktText}>Text will be come here</Text>
          <Image source={deleteImageIcon} style={styles.deleteImageIcon} />
        </View>
        <View style={styles.singleTaskBox}>
          <Image source={editImageicon} style={styles.editImageicon} />
          <Text style={styles.tasktText}>Text will be come here</Text>
          <Image source={deleteImageIcon} style={styles.deleteImageIcon} />
        </View>

      </ScrollView>
      <View style={styles.uploadBox}>
        <TextInput
          style={styles.mainInput}
          placeholder='Write something here'
        />
        <View style={styles.uploadButtonbox}>
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
    fontWeight: 'bold', // fontWeight property value should be a string
  },
  allTaskBox: {
    // Add styles for the allTaskBox container if needed
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
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
    marginRight: 10, // Adjust margin as needed
  },
  deleteImageIcon: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
    marginLeft: 10, // Adjust margin as needed
  },
  tasktText: {
    flex: 15,
    fontSize: 20
  },
  uploadBox: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
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
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: '50%',
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
  }
});
