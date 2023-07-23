import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/Mealtem';
import {useEffect, useLayoutEffect} from 'react';

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

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      compaxity: item.complaxity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dispalyedMeal}
        keyExtractor={itemData => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MyMealOverViewMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
