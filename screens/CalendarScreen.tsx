import { StyleSheet, Text, View } from "react-native";

import Calendar from "../components/feature/calendar/Calendar";

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingHorizontal: 12,
  },
});
