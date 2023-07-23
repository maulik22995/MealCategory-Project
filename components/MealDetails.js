import {View, Text, StyleSheet} from 'react-native';
import fonts from '../utils/font';

function MealDetails({duration, compaxity, affordability, style, textStyle}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>{compaxity}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
  },
  detailsItem: {
    fontFamily: fonts.fontRegular,
    fontSize: 12,
    marginHorizontal: 4,
    color: 'black',
  },
});
