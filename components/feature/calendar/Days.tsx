import { StyleSheet, View, Text } from "react-native";

import { week } from "../../../constants/Calendar";

const Days = () => {
  return (
    <View style={styles.container}>
      {week.map((el, idx) => (
        <View style={styles.days} key={idx}>
          <Text style={Week(el).week}>{el}</Text>
        </View>
      ))}
    </View>
  );
};

export default Days;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  days: { flex: 1, alignItems: "center" },
});

const Week = (day: string) =>
  StyleSheet.create({
    week: { color: day === "Sun" ? "red" : day === "Sat" ? "#0eb4fc" : "gray" },
  });
