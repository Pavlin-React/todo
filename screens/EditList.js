import React, { useState } from "react";
import { CommonActions } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Colors from "../constans/Colors";
import ColorSelector from '../components/ColorSelector'

let colorOptions = [
  'black',
  'darkGray',
  'gray',
  'lightGray',
  'teal',
  'green',
  'blue',
  'purple',
  'blueGray',
  'orange',
  'red',
  'pink',
  'olive',
  'yellow'
]

export default ( { navigation, route } ) => {

  let [title, setTitle] = useState( route.params.title || '' )
  let [color, setColor] = useState( route.params.colors || Colors.blue )
  let [isValid, setValidity] = useState( true )

  return(
    <View style={ styles.container } >
      <View>
        <View style={ { flexDirection: 'row' } } >
          <Text
            style={ styles.label }
          >
            List Name
          </Text>
          { !isValid && <Text style={ { color: Colors.red, marginLeft: 10 } }>* List Name can not be empty</Text> }
        </View>
        <TextInput
          autoFocus={ true }
          underlineColorAndroid={ 'transparent' }
          selectionColor={ 'transparent' }
          value={ title }
          onChangeText={
            ( text ) => {
              setTitle( text )
              setValidity( true )
            }}
          placeholder={ 'New List Name' }
          maxLength={ 30 }
          style={ [ styles.input, { outline: 'none' } ] }
        />
        <Text style={ styles.label } >Choose Color</Text>
        <ColorSelector
          onSelect={(color) => {
            setColor( color )
            navigation.dispatch( CommonActions.setParams( { color } ) )
          }}
          selectedColor={ color }
          colorOptions = { colorOptions }
        />
      </View>
      <TouchableOpacity style={ styles.saveButton } onPress={ () => {
        if ( title.length > 1 ) {
          route.params.saveChanges( { title, color } )
          navigation.dispatch( CommonActions.goBack() )
        } else {
          setValidity( false )
        }
      } } >
        <Text style={ { color: 'white', fontSize: 24, fontWeight: 'bold' } } >Save</Text>
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