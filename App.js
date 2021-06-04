import React, { useState } from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoList from "./screens/ToDoList";
import Login from './screens/Login'
import EditList from "./screens/EditList";
import Colors from "./constans/Colors";
import firebase from "firebase/app";

let Stack = createStackNavigator();
let AuthStack = createStackNavigator();

let AuthScreens = () => {
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={ Login }/>
    </AuthStack.Navigator>
  )
}

let Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Fire App" component={Home} />
      <Stack.Screen
        component={ToDoList}
        name="ToDoList"
        options={({ route }) => {
          return {
            title: route.params.title,
            headerStyle: {
              backgroundColor: route.params.color,
            },
            headerTintColor: "white",
          };
        }}
      />
      <Stack.Screen
        name="EditList"
        component={EditList}
        options={({ route }) => {
          return {
            title: route.params.title
              ? `Edit ${route.params.title} list`
              : "Create new List",
            headerStyle: {
              backgroundColor: route.params.color || Colors.blue,
            },
            headerTintColor: "white",
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {

  let [isAuthenticated, setIsAuthenticated] = useState( false )

  return(
    <NavigationContainer>
      { isAuthenticated ? <Screens/> : <AuthScreens/> }
    </NavigationContainer>
  )
}

var firebaseConfig = {
  apiKey: "AIzaSyDHK3hXBzviFn8uBJSbbWGF71u5ocx8BFk",
  authDomain: "todo-53285.firebaseapp.com",
  projectId: "todo-53285",
  storageBucket: "todo-53285.appspot.com",
  messagingSenderId: "850891770501",
  appId: "1:850891770501:web:69d851a7e8c0b6770b37ec",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


