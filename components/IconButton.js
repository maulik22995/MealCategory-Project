import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable, StyleSheet, Text} from 'react-native';

const IconButton = ({iconName, color, size, onPress}) => {
  console.log(iconName);
  console.log(color);
  console.log(size);
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressedButton}
      onPress={onPress}>
      <Icon name={iconName} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.5,
  },
});
