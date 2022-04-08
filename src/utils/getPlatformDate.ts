import { addDays } from "date-fns";
import { Platform } from "react-native";

//function meant to be used to fix a day lag on ios date format
export const getPlatformDate = (date: Date) => {
  /* if(Platform.OS === 'ios') {
    return addDays(date, 1);
  } */
  return addDays(date, 1);
};
