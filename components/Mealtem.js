import {useNavigation} from '@react-navigation/native';
import fonts from '../utils/font';
import MealDetails from './MealDetails';

const {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} = require('react-native');

function MealItem({id, title, imageUrl, duration, compaxity, affordability}) {
  console.log(title);

  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetails', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealIteam}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.buttonStyle,
          pressed ? styles.pressedBtn : null,
        ]}>
        <View style={styles.innerView}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            compaxity={compaxity}
            affordability={affordability}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealIteam: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  innerView: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: fonts.fontMedium,
    fontSize: 15,
    margin: 6,
    textAlign: 'center',
    color: 'black',
  },
  buttonStyle: {
    flex: 1,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  pressedBtn: {
    opacity: 0.25,
  },
});
