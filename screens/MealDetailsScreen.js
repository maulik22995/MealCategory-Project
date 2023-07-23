import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import fonts from '../utils/font';
import SubTitle from '../components/MealDetails/SubTitle';
import List from '../components/MealDetails/List';
import {useLayoutEffect} from 'react';
import IconButton from '../components/IconButton';

function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function handlerIconPress() {
    console.log('Pressed');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            iconName="heart"
            size={24}
            color="white"
            onPress={handlerIconPress}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          compaxity={selectedMeal.compaxity}
          affordability={selectedMeal.affordability}
          duration={selectedMeal.duration}
          textStyle={styles.textStyle}
        />
        <View style={styles.listOuterView}>
          <View style={styles.listInnerView}>
            <SubTitle>Ingredient</SubTitle>
            <List data={selectedMeal.ingredients} />
            <SubTitle>Steps</SubTitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontFamily: fonts.fontMedium,
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
  },
  listOuterView: {
    alignItems: 'center',
  },
  listInnerView: {
    width: '80%',
  },
});
