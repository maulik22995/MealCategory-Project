import {StyleSheet, Text, View} from 'react-native';
import fonts from '../../utils/font';

function List({data}) {
  return data.map(dataPoint => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    textAlign: 'center',
    fontFamily: fonts.fontRegular,
    color: '#351401',
  },
});
