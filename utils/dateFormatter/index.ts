import dayjs from "dayjs";
import { DateFormats } from "./enums";

/**
 * @function dateFormatter
 * @param date date parameter
 * @param format format parameter for date
 * @returns {string}
 */
export const dateFormatter = (date?: Date | string, format: DateFormats = DateFormats.DATE): string => {
  return date ? dayjs(new Date(date)).format(format) : "";
};
