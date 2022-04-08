import { eachDayOfInterval, format } from "date-fns";
import { CalendarProps } from "react-native-calendars";

import { DayProps } from ".";
import { getPlatformDate } from "../../utils/getPlatformDate";

import theme from "../../Global/styles/theme";

export const generateInterval = (startDate: DayProps, endDate: DayProps) => {
  let interval: CalendarProps = {};

  eachDayOfInterval({
    start: new Date(startDate.timestamp),
    end: new Date(endDate.timestamp),
  }).forEach((day) => {
    const date = format(getPlatformDate(day), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          startDate.dateString === date || endDate.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,

        textColor:
          startDate.dateString === date || endDate.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
};
