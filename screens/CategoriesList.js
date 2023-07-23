import {FlatList, StyleSheet, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryTile from '../components/CategoryTile';

function CategoriesList({navigation}) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate('MealOverview', {categoryID: itemData.item.id});
    }

    return (
      <CategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={itemData => itemData.id}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesList;
const styles = StyleSheet.create({});
