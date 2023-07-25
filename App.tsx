/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import CategoriesList from './screens/CategoriesList';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyMealOverViewMeal from './screens/MyMealOverView';
import MealDetailScreen from './screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {store} from './store/redux/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerActiveBackgroundColor: '#e4baa1',
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: 'white',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesList}
        options={{
          title: 'All Category',
          drawerIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#351401'} />
      <View style={{flex: 1, backgroundColor: '#24180f'}}>
        {/* <FavouriteContextPerovider> */}
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {backgroundColor: '#351401'},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#3f2f25'},
              }}>
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MealOverview"
                component={MyMealOverViewMeal}
                // options={({route, navigation}) => {
                //   const catId = route.params.categoryID;
                //   return {
                //     title: catId,
                //   };
                // }}
              />
              <Stack.Screen
                name="MealDetails"
                component={MealDetailScreen}
                options={{
                  title: 'About the meal',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
        {/* </FavouriteContextPerovider> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
