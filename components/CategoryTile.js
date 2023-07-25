import fonts from '../utils/font';

const {View, Pressable, Text, StyleSheet, Platform} = require('react-native');

function CategoryTile({title, color, onPress}) {
  console.log(color);
  return (
    <View style={styles.buttonStyle}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.outerView,
          pressed ? styles.pressedBtn : null,
        ]}
        onPress={onPress}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTile;

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowOffset: {width: 15, height: 15},
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonStyle: {
    flex: 1,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  pressedBtn: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.fontBold,
    color: 'black',
    fontSize: 16,
  },
});
