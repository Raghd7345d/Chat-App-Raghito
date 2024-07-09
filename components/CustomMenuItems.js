import { Text, View } from "react-native";
import { MenuOption } from "react-native-popup-menu";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const MenuItems = ({ text, value, action, icon }) => {
  return (
    <MenuOption onSelect={() => action(value)}>
      <View className="px-4 py-1 flex-row justify-between items-center">
        <Text
          style={{ fontSize: hp(1.7) }}
          className="font semibold text-neutral-600"
        >
          {text}
        </Text>
        <Text>{icon}</Text>
      </View>
    </MenuOption>
  );
};
