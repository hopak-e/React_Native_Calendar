import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Months } from "../../../constants/Calendar";

interface Props {
  month: number;
  year: number;
  prevCallback: (month: number) => void;
  nextCallback: (month: number) => void;
}

const Month = ({ ...props }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => props.prevCallback(props.month)}>
        <AntDesign name="left" size={24} color="#0eb4fc" />
      </Pressable>
      <Text>
        {Months[props.month - 1]} {props.year}
      </Text>
      <Pressable onPress={() => props.nextCallback(props.month)}>
        <AntDesign name="right" size={24} color="#0eb4fc" />
      </Pressable>
    </View>
  );
};

export default Month;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
