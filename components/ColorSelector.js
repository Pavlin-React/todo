import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../constans/Colors";

  let ColorButton = ( { onPress, isSelected, color } ) => {
    return(
      <TouchableOpacity
        onPress={ onPress }
        style={[styles.colorButton,
        { borderWidth: isSelected ? 3 : 0, backgroundColor: color }]}  
      />
    )
  }

export default ( { selectedColor, colorOptions, onSelect } ) => {

  return(
    <View style={ styles.container }>
      {colorOptions.map((colorName) => {
        return(
          <ColorButton
          onPress={ () => onSelect( Colors[colorName] ) }
          color={ Colors[colorName] }
          isSelected={ Colors[colorName] == selectedColor }
        />
        )
      })}
    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorButton: {
    height: 32,
    width: 32,
    borderColor: Colors.lightGray,
    borderRadius: 24,
    margin: 10,
  }
})