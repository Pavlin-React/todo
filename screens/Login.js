import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import Colors from "../constans/Colors";
import Button from '../components/Button'

export default () => {

  let [isCreateMode, setIsCreateMode] = useState( false )

  return(
    <View style={ styles.container } >
      <Text style={ styles.header } >🔥 ToDo</Text>
      <View style={ { flex: 1 } } >
        {/* Header */}
        {/* Email Input */}
        {/* Password Input */}
        {/* Password Reentry Input */}
        {/* Login toggle */}
        {/* Login/Create Account Button */}
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