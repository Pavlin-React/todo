import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import Colors from "../constans/Colors";
import ToDoItem from '../components/ToDoItem'

let renderAddListIcon = ( addItem ) => {
  return(
    <TouchableOpacity onPress={ () => addItem( { text: "", isChecked: false, isNewItem: true } ) }>
      <Text style={ styles.icon } >+</Text>
    </TouchableOpacity>
  )
}

export default ( { navigation} ) => {

  let [toDoItems, setToDoItems] = useState( [ { text: "Hello", isChecked: false } ] )

  let addItemToLists = ( item ) => {
    toDoItems.push(item)
    setToDoItems([...toDoItems])
  }

  let removeItemFromLists = ( index ) => {
    toDoItems.splice( index, 1 )
    setToDoItems( [...toDoItems] )
  }

  let updateItem = ( index, item ) => {
    toDoItems[index] = item
    setToDoItems( [...toDoItems] )
  }

  useLayoutEffect( () => {
    navigation.setOptions({
      headerRight: () => renderAddListIcon( addItemToLists )
    })
  } )

  return (
    <View style={ styles.container }>
      <FlatList
        data={ toDoItems }
        renderItem={ ( { item: { text, isChecked, isNewItem }, index } ) => {
          return(
            <ToDoItem
              text={ text }
              isNewItem={ isNewItem }
              isChecked={ isChecked }
              onChecked={() => {
                let toDoItem = toDoItems[index]
                toDoItem.isChecked = !isChecked
                updateItem( index, toDoItem )
              }}
              onChangeText={ ( newText ) => {
                let toDoItem = toDoItems[index]
                toDoItem.text = newText
                updateItem( index, toDoItem )
              } }
              onDelete={ () => removeItemFromLists( index ) }
            />
          )
        } }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemTitle: { fontSize: 24, padding: 5, color: "white" },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
  icon: {
    padding: 5,
    fontSize: 24,
  }
})