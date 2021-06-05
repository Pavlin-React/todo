import React, { useState } from "react";
import LabelInput from '../components/LabeledInput'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constans/Colors";
import Button from '../components/Button'
import validator from 'validator'
import firebase from "firebase/app"
import "firebase/auth"

let validateFields = (email, password) => {
  let isValid = {
    email: validator.isEmail( email ),
    password: validator.isStrongPassword( password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    } )
  }
  return isValid
}

let login = (email, password ) => {
  firebase.auth()
    .signInWithEmailAndPassword( email, password )
    .then( () => {
      console.log( 'Logged in' );
    } )
}

let createAccount = ( email, password ) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      console.log( 'Creating a user..' );
    })
}

export default () => {

  let [isCreateMode, setIsCreateMode] = useState( false )

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


  return(
    <View style={ styles.container } >
      <Text style={ styles.header } >🔥 ToDo</Text>
      <View style={ { flex: 1 } } >
        { isCreateMode && <LabelInput
          label='Password Reentry'
          text={passwordReentryField.text}
          onChangeText={ ( text ) => { setPasswordReentryField( {text} ) } }
          errorMessage={ passwordReentryField.errorMessage }
          labelStyle={ styles.label }
          secureTextEntry={ true }
        
        /> }
        <LabelInput
          label='Email'
          text={emailField.text}
          onChangeText={ ( text ) => { setEmailField( {text} ) } }
          errorMessage={ emailField.errorMessage }
          labelStyle={ styles.label }
          autoCompleteType='email'
        />
        <LabelInput
          label='Password'
          text={passwordField.text}
          onChangeText={ ( text ) => { setPasswordField( {text} ) } }
          errorMessage={ passwordField.errorMessage }
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
        onPress={ () => {
          let isValid = validateFields( emailField.text, passwordField.text )
           let isAllValid = true
          if ( !isValid.email ) {
            emailField.errorMessage = 'Please enter a valid email'
            setEmailField( { ...emailField } )
            isAllValid = false
          }
          if ( !isValid.password ) {
            passwordField.errorMessage = 'The password must be at least 8 characters long'
            setPasswordField( { ...passwordField } )
            isAllValid = false
          }
          if ( isCreateMode && passwordReentryField.text != passwordField.text ) {
            passwordReentryField.errorMessage = 'Password do not match'
            setPasswordReentryField( { ...passwordReentryField } )
            isAllValid = false
          }
          if ( isAllValid ) {
            isCreateMode
            ? createAccount( emailField.text, passwordField.text )
            : login( emailField.text, passwordField.text )
          }
        } }
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