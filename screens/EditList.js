import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Colors from "../constans/Colors";

export default ( { navigation, route } ) => {

  let [title, setTitle] = useState( route.params.title || '' )
  let [color, setColor] = useState( route.params.colors || Colors.blue )

  return(
    <View style={ styles.container } >
      <View>
        <Text
          style={ styles.label }
        >
          List Name
        </Text>
        <TextInput
          autoFocus={ true }
          underlineColorAndroid={ 'transparent' }
          selectionColor={ 'transparent' }
          value={ title }
          onChangeText={ setTitle }
          placeholder={ 'New List Name' }
          maxLength={ 30 }
          style={ [ styles.input, { outline: 'none' } ] }
        />
      </View>
      <TouchableOpacity onPress={ () => {} } >
        <Text></Text>
      </TouchableOpacity>
    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'space-between'
  },
  input: {
    color: Colors.darkGray,
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
    padding: 3,
    height: 30,
    fontSize: 24
  },
  saveButton: {
    borderRadius: 25,
    backgroundColor: Colors.darkGray,
    height: 48,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: Colors.black,
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 10
  }
})