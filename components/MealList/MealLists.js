import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from './Mealtem';

function MealList({items}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={itemData => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

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

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
