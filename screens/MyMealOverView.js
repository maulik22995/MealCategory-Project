import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealList/Mealtem';
import {useEffect, useLayoutEffect} from 'react';
import MealList from '../components/MealList/MealLists';

function MyMealOverViewMeal({route, navigation}) {
  const catId = route.params.categoryID;

  console.log(catId);

  const dispalyedMeal = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(category => category.id == catId).title;

  console.log(dispalyedMeal);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  return <MealList items={dispalyedMeal} />;
}

export default MyMealOverViewMeal;
