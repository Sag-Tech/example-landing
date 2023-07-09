/* eslint-disable import/no-extraneous-dependencies */
import { format } from "date-fns";

const MAIN_FORMAT = "MMM dd, yyyy";

export const formatDate = (date: string, dateFormat: string = MAIN_FORMAT) =>
  date ? format(new Date(date), dateFormat) : "";
