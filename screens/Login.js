import React, { useState } from "react";
import LabelInput from '../components/LabeledInput'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constans/Colors";
import Button from '../components/Button'

export default () => {

  let [emailField, setEmailField] = useState({
    text: '',
    errorMessage: ''
  })
  let [passwordField, setPasswordField] = useState({
    text: '',
    errorMessage: ''
  })
  let [passwordReentryField, setPasswordReentryField] = useState({
    text: '',
    errorMessage: ''
  })

  let [isCreateMode, setIsCreateMode] = useState( false )

  return(
    <View style={ styles.container } >
      <Text style={ styles.header } >🔥 ToDo</Text>
      <View style={ { flex: 1 } } >
        { isCreateMode && <LabelInput
          label='Email'
          text={emailField.text}
          onChangeText={ ( text ) => { setEmailField( {text} ) } }
          errorMessage={ emailField.errorMessage }
          labelStyle={ styles.label }
          autoCompleteType='email'
        /> }
        <LabelInput
          label='Password'
          text={passwordField.text}
          onChangeText={ ( text ) => { setPasswordField( {text} ) } }
          errorMessage={ passwordField.errorMessage }
          labelStyle={ styles.label }
          secureTextEntry={ true }

        />
        <LabelInput
          label='Password Reentry'
          text={passwordReentryField.text}
          onChangeText={ ( text ) => { setPasswordReentryField( {text} ) } }
          errorMessage={ passwordReentryField.errorMessage }
          labelStyle={ styles.label }
          secureTextEntry={ true }
        />
        <TouchableOpacity onPress={ () => setIsCreateMode( !isCreateMode ) }>
          <Text style={ { alignSelf: 'center', color: Colors.blue, fontSize: 16, margin: 4 } } >
            { isCreateMode ? 'Already have an account' : 'Create new account' }
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        buttonStyle={ { backgroundColor: Colors.red } }
        onPress={ () => {} }
        text={ isCreateMode ? 'Create Account' : 'Login' }
      />
    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black
  },
  header: {
    fontSize: 72,
    color: Colors.red,
    alignSelf: 'center',
  }
})