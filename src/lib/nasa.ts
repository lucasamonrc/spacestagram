import axios from 'axios';
import { formatDate, subtractOneDay, subtractTenDays } from './dates';

const client = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  params: {
    api_key: import.meta.env.VITE_NASA_API_KEY,
  },
});

interface Picture {
  title: string;
  url: string;
  date: string;
}

export async function get10MorePictures(endDate: Date) {
  const startDate = subtractTenDays(endDate);

  const end = formatDate(endDate);
  const start = formatDate(startDate);

  const { data } = await client.get<Picture[]>(
    `/apod?start_date=${start}&end_date=${end}`
  );

  data.sort((a, b) => {
    if (a.date > b.date) return -1;
    else return 1;
  });

  return data;
}

export async function getLast10Pictures() {
  const endDate = subtractOneDay(new Date());
  const startDate = subtractTenDays(endDate);

  const end = formatDate(endDate);
  const start = formatDate(startDate);

  const { data } = await client.get<Picture[]>(
    `/apod?start_date=${start}&end_date=${end}`
  );

  data.sort((a, b) => {
    if (a.date > b.date) return -1;
    else return 1;
  });

  return data;
}
