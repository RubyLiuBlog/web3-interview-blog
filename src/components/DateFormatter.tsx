import { parseISO, format } from "date-fns";

interface DateFormatterProps {
  dateString: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy年MM月dd日")}</time>;
};

export default DateFormatter;
