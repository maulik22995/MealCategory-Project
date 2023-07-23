import {StyleSheet, Text} from 'react-native';
import fonts from '../../utils/font';

const SubTitle = ({children}) => {
  return <Text style={styles.subTitle}>{children}</Text>;
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: fonts.fontMedium,
    color: '#e2b497',
    fontSize: 15,
    padding: 5,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 0.7,
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
  },
});
