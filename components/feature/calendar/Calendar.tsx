import { useState } from "react";
import { View } from "react-native";

import { getNewDateInfo } from "../../../utils/Calendar";
import Dates from "./Dates";
import Days from "./Days";
import Month from "./Month";

const Calendar = () => {
  const { year, month } = getNewDateInfo(new Date());
  const [nowYear, setNowYear] = useState(year);
  const [nowMonth, setNowMonth] = useState(month);

  const handlePrevMonthPress = (month: number) => {
    if (month === 1) {
      setNowYear(nowYear - 1);
      setNowMonth(12);
    } else setNowMonth(nowMonth - 1);
  };

  const handleNextMonthPress = (month: number) => {
    if (month === 12) {
      setNowYear(nowYear + 1);
      setNowMonth(1);
    } else setNowMonth(nowMonth + 1);
  };

  return (
    <View>
      <Month
        month={nowMonth}
        year={nowYear}
        prevCallback={handlePrevMonthPress}
        nextCallback={handleNextMonthPress}
      />
      <Days />
      <Dates nowMonth={nowMonth} nowYear={nowYear} />
    </View>
  );
};

export default Calendar;
