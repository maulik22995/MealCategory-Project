import {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FavouriteContext} from '../store/context/Favourite-context';
import MealList from '../components/MealList/MealLists';
import {MEALS} from '../data/dummy-data';
import fonts from '../utils/font';
import {useSelector} from 'react-redux';

function FavouriteScreen() {
  // const favouriteContext = useContext(FavouriteContext);

  const favouriteIds = useSelector(state => state.favouriteMeals.ids);

  const favList = MEALS.filter(mealItem => favouriteIds.includes(mealItem.id));

  if (favList.length === 0) {
    return (
      <View style={style.rootContainer}>
        <Text style={style.label}> You have no favourite meals yet. </Text>
      </View>
    );
  }

  return <MealList items={favList} />;
}
export default FavouriteScreen;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 15,
    fontFamily: fonts.fontRegular,
  },
});
