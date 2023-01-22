import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { getNewDateInfo, getMonthInfo } from "../../../utils/Calendar";

interface Props {
  nowYear: number;
  nowMonth: number;
}

interface Dates {
  date: number;
  state: string;
}

const Dates = ({ ...props }: Props) => {
  const { startDay, endDate, prevEndDate, nextStartDay } = getMonthInfo(
    props.nowYear,
    props.nowMonth
  );
  const { date } = getNewDateInfo(new Date());
  const [monthDates, setMonthdates] = useState<Dates[][]>([]);
  const [selectedDate, setSelectedDate] = useState({
    date,
    state: "cur",
  });

  useEffect(() => {
    getMonthDates();
  }, [props.nowMonth, props.nowYear]);

  const getMonthDates = () => {
    const prevDates: Dates[] = [];
    const currentDates: Dates[] = [];
    const nextDates: Dates[] = [];
    for (let i = prevEndDate - startDay + 1; i <= prevEndDate; i++) {
      prevDates.push({ date: i, state: "prev" });
    }
    for (let i = 1; i <= endDate; i++) {
      currentDates.push({ date: i, state: "cur" });
    }
    if (nextStartDay !== 0) {
      for (let i = 1; i <= 7 - nextStartDay; i++) {
        nextDates.push({ date: i, state: "next" });
      }
    }
    const monthArr = [...prevDates, ...currentDates, ...nextDates];
    const slicedMonth: Dates[][] = [];
    for (let i = 0; i < monthArr.length; i += 7) {
      slicedMonth.push(monthArr.slice(i, i + 7));
    }
    setMonthdates(slicedMonth);
  };

  const handledSelectPress = (date: number, state: string) => {
    setSelectedDate({ date, state });
  };

  return (
    <>
      {monthDates &&
        monthDates.map((date) => (
          <View style={styles.container}>
            {date.map((dates) => (
              <View
                style={[
                  styles.dates,
                  selectedDate.date === dates.date &&
                    selectedDate.state === dates.state && [styles.border],
                ]}
              >
                <Pressable
                  onPress={() => handledSelectPress(dates.date, dates.state)}
                >
                  <Text
                    style={[
                      styles.text,
                      dates.state === "cur"
                        ? { color: "black" }
                        : { color: "gray" },
                      selectedDate.date === dates.date &&
                        selectedDate.state === dates.state &&
                        styles.fontWeight,
                    ]}
                  >
                    {dates.date}
                  </Text>
                </Pressable>
              </View>
            ))}
          </View>
        ))}
    </>
  );
};

export default Dates;

const styles = StyleSheet.create({
  container: { width: "100%", flexDirection: "row" },
  text: {
    paddingVertical: 16,
  },
  dates: { flex: 1, alignItems: "center" },
  border: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#0eb4fc",
  },
  fontWeight: {
    fontWeight: "700",
  },
});
