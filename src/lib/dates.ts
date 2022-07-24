import { subDays } from 'date-fns';

export function subtractTenDays(date: Date) {
  return subDays(date, 9);
}

export function subtractOneDay(date: Date) {
  return subDays(date, 1);
}

export function formatDate(date: Date) {
  const [str] = date.toISOString().split('T');
  return str;
}
