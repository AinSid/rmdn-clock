export interface PrayerTime {
  date: string;
  ramadanDay: number;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

const laPrayerTimes: PrayerTime[] = [
  {
    date: "2025-03-01",
    ramadanDay: 1,
    fajr: "05:12 AM",
    sunrise: "06:21 AM",
    dhuhr: "12:06 PM",
    asr: "04:10 PM",
    maghrib: "05:50 PM",
    isha: "06:59 PM"
  },
  {
    date: "2025-03-02",
    ramadanDay: 2,
    fajr: "05:11 AM",
    sunrise: "06:19 AM",
    dhuhr: "12:05 PM",
    asr: "04:11 PM",
    maghrib: "05:51 PM",
    isha: "07:00 PM"
  },
  {
    date: "2025-03-03",
    ramadanDay: 3,
    fajr: "05:10 AM",
    sunrise: "06:18 AM",
    dhuhr: "12:05 PM",
    asr: "04:11 PM",
    maghrib: "05:52 PM",
    isha: "07:01 PM"
  },
  {
    date: "2025-03-04",
    ramadanDay: 4,
    fajr: "05:09 AM",
    sunrise: "06:17 AM",
    dhuhr: "12:05 PM",
    asr: "04:12 PM",
    maghrib: "05:53 PM",
    isha: "07:02 PM"
  },
  {
    date: "2025-03-05",
    ramadanDay: 5,
    fajr: "05:07 AM",
    sunrise: "06:16 AM",
    dhuhr: "12:05 PM",
    asr: "04:13 PM",
    maghrib: "05:54 PM",
    isha: "07:02 PM"
  },
  {
    date: "2025-03-06",
    ramadanDay: 6,
    fajr: "05:06 AM",
    sunrise: "06:14 AM",
    dhuhr: "12:05 PM",
    asr: "04:13 PM",
    maghrib: "05:54 PM",
    isha: "07:03 PM"
  },
  {
    date: "2025-03-07",
    ramadanDay: 7,
    fajr: "05:05 AM",
    sunrise: "06:13 AM",
    dhuhr: "12:04 PM",
    asr: "04:14 PM",
    maghrib: "05:55 PM",
    isha: "07:04 PM"
  },
  {
    date: "2025-03-08",
    ramadanDay: 8,
    fajr: "05:03 AM",
    sunrise: "06:12 AM",
    dhuhr: "12:04 PM",
    asr: "04:15 PM",
    maghrib: "05:56 PM",
    isha: "07:05 PM"
  },
  {
    date: "2025-03-09",
    ramadanDay: 9,
    fajr: "06:03 AM",
    sunrise: "07:12 AM",
    dhuhr: "01:04 PM",
    asr: "05:15 PM",
    maghrib: "06:56 PM",
    isha: "08:05 PM"
  },
  {
    date: "2025-03-10",
    ramadanDay: 10,
    fajr: "06:02 AM",
    sunrise: "07:10 AM",
    dhuhr: "01:04 PM",
    asr: "05:15 PM",
    maghrib: "06:57 PM",
    isha: "08:06 PM"
  },
  {
    date: "2025-03-11",
    ramadanDay: 11,
    fajr: "06:01 AM",
    sunrise: "07:09 AM",
    dhuhr: "01:04 PM",
    asr: "05:16 PM",
    maghrib: "06:58 PM",
    isha: "08:06 PM"
  },
  {
    date: "2025-03-12",
    ramadanDay: 12,
    fajr: "05:59 AM",
    sunrise: "07:08 AM",
    dhuhr: "01:03 PM",
    asr: "05:16 PM",
    maghrib: "06:58 PM",
    isha: "08:07 PM"
  },
  {
    date: "2025-03-13",
    ramadanDay: 13,
    fajr: "05:58 AM",
    sunrise: "07:06 AM",
    dhuhr: "01:03 PM",
    asr: "05:17 PM",
    maghrib: "06:59 PM",
    isha: "08:08 PM"
  },
  {
    date: "2025-03-14",
    ramadanDay: 14,
    fajr: "05:57 AM",
    sunrise: "07:05 AM",
    dhuhr: "01:03 PM",
    asr: "05:18 PM",
    maghrib: "07:00 PM",
    isha: "08:09 PM"
  },
  {
    date: "2025-03-15",
    ramadanDay: 15,
    fajr: "05:55 AM",
    sunrise: "07:04 AM",
    dhuhr: "01:02 PM",
    asr: "05:18 PM",
    maghrib: "07:01 PM",
    isha: "08:10 PM"
  },
  {
    date: "2025-03-16",
    ramadanDay: 16,
    fajr: "05:54 AM",
    sunrise: "07:02 AM",
    dhuhr: "01:02 PM",
    asr: "05:19 PM",
    maghrib: "07:02 PM",
    isha: "08:10 PM"
  },
  {
    date: "2025-03-17",
    ramadanDay: 17,
    fajr: "05:53 AM",
    sunrise: "07:01 AM",
    dhuhr: "01:02 PM",
    asr: "05:19 PM",
    maghrib: "07:02 PM",
    isha: "08:11 PM"
  },
  {
    date: "2025-03-18",
    ramadanDay: 18,
    fajr: "05:51 AM",
    sunrise: "07:00 AM",
    dhuhr: "01:02 PM",
    asr: "05:20 PM",
    maghrib: "07:03 PM",
    isha: "08:12 PM"
  },
  {
    date: "2025-03-19",
    ramadanDay: 19,
    fajr: "05:50 AM",
    sunrise: "06:58 AM",
    dhuhr: "01:01 PM",
    asr: "05:20 PM",
    maghrib: "07:04 PM",
    isha: "08:13 PM"
  },
  {
    date: "2025-03-20",
    ramadanDay: 20,
    fajr: "05:48 AM",
    sunrise: "06:57 AM",
    dhuhr: "01:01 PM",
    asr: "05:21 PM",
    maghrib: "07:05 PM",
    isha: "08:14 PM"
  },
  {
    date: "2025-03-21",
    ramadanDay: 21,
    fajr: "05:47 AM",
    sunrise: "06:56 AM",
    dhuhr: "01:01 PM",
    asr: "05:22 PM",
    maghrib: "07:05 PM",
    isha: "08:15 PM"
  },
  {
    date: "2025-03-22",
    ramadanDay: 22,
    fajr: "05:45 AM",
    sunrise: "06:54 AM",
    dhuhr: "01:00 PM",
    asr: "05:22 PM",
    maghrib: "07:06 PM",
    isha: "08:15 PM"
  },
  {
    date: "2025-03-23",
    ramadanDay: 23,
    fajr: "05:44 AM",
    sunrise: "06:53 AM",
    dhuhr: "01:00 PM",
    asr: "05:23 PM",
    maghrib: "07:07 PM",
    isha: "08:16 PM"
  },
  {
    date: "2025-03-24",
    ramadanDay: 24,
    fajr: "05:43 AM",
    sunrise: "06:51 AM",
    dhuhr: "01:00 PM",
    asr: "05:23 PM",
    maghrib: "07:08 PM",
    isha: "08:17 PM"
  },
  {
    date: "2025-03-25",
    ramadanDay: 25,
    fajr: "05:41 AM",
    sunrise: "06:50 AM",
    dhuhr: "01:00 PM",
    asr: "05:24 PM",
    maghrib: "07:09 PM",
    isha: "08:18 PM"
  },
  {
    date: "2025-03-26",
    ramadanDay: 26,
    fajr: "05:40 AM",
    sunrise: "06:49 AM",
    dhuhr: "12:59 PM",
    asr: "05:24 PM",
    maghrib: "07:09 PM",
    isha: "08:19 PM"
  },
  {
    date: "2025-03-27",
    ramadanDay: 27,
    fajr: "05:38 AM",
    sunrise: "06:47 AM",
    dhuhr: "12:59 PM",
    asr: "05:25 PM",
    maghrib: "07:10 PM",
    isha: "08:20 PM"
  },
  {
    date: "2025-03-28",
    ramadanDay: 28,
    fajr: "05:37 AM",
    sunrise: "06:46 AM",
    dhuhr: "12:59 PM",
    asr: "05:25 PM",
    maghrib: "07:11 PM",
    isha: "08:20 PM"
  },
  {
    date: "2025-03-29",
    ramadanDay: 29,
    fajr: "05:35 AM",
    sunrise: "06:45 AM",
    dhuhr: "12:58 PM",
    asr: "05:25 PM",
    maghrib: "07:12 PM",
    isha: "08:21 PM"
  },
  {
    date: "2025-03-30",
    ramadanDay: 30,
    fajr: "05:34 AM",
    sunrise: "06:43 AM",
    dhuhr: "12:58 PM",
    asr: "05:26 PM",
    maghrib: "07:12 PM",
    isha: "08:22 PM"
  },
  {
    date: "2025-03-31",
    ramadanDay: 31,
    fajr: "05:32 AM",
    sunrise: "06:42 AM",
    dhuhr: "12:58 PM",
    asr: "05:26 PM",
    maghrib: "07:13 PM",
    isha: "08:23 PM"
  }
];

const nycPrayerTimes: PrayerTime[] = [
  {
    date: "2025-03-01",
    ramadanDay: 1,
    fajr: "05:14 AM",
    sunrise: "06:29 AM",
    dhuhr: "12:08 PM",
    asr: "04:04 PM",
    maghrib: "05:48 PM",
    isha: "07:03 PM"
  },
  {
    date: "2025-03-02",
    ramadanDay: 2,
    fajr: "05:12 AM",
    sunrise: "06:27 AM",
    dhuhr: "12:08 PM",
    asr: "04:05 PM",
    maghrib: "05:49 PM",
    isha: "07:04 PM"
  },
  {
    date: "2025-03-03",
    ramadanDay: 3,
    fajr: "05:11 AM",
    sunrise: "06:26 AM",
    dhuhr: "12:08 PM",
    asr: "04:06 PM",
    maghrib: "05:50 PM",
    isha: "07:06 PM"
  },
  {
    date: "2025-03-04",
    ramadanDay: 4,
    fajr: "05:09 AM",
    sunrise: "06:24 AM",
    dhuhr: "12:08 PM",
    asr: "04:07 PM",
    maghrib: "05:51 PM",
    isha: "07:07 PM"
  },
  {
    date: "2025-03-05",
    ramadanDay: 5,
    fajr: "05:07 AM",
    sunrise: "06:23 AM",
    dhuhr: "12:08 PM",
    asr: "04:08 PM",
    maghrib: "05:52 PM",
    isha: "07:08 PM"
  },
  {
    date: "2025-03-06",
    ramadanDay: 6,
    fajr: "05:06 AM",
    sunrise: "06:21 AM",
    dhuhr: "12:07 PM",
    asr: "04:09 PM",
    maghrib: "05:53 PM",
    isha: "07:09 PM"
  },
  {
    date: "2025-03-07",
    ramadanDay: 7,
    fajr: "05:04 AM",
    sunrise: "06:19 AM",
    dhuhr: "12:07 PM",
    asr: "04:10 PM",
    maghrib: "05:55 PM",
    isha: "07:10 PM"
  },
  {
    date: "2025-03-08",
    ramadanDay: 8,
    fajr: "05:03 AM",
    sunrise: "06:18 AM",
    dhuhr: "12:07 PM",
    asr: "04:11 PM",
    maghrib: "05:56 PM",
    isha: "07:11 PM"
  },
  {
    date: "2025-03-09",
    ramadanDay: 9,
    fajr: "06:03 AM",
    sunrise: "07:18 AM",
    dhuhr: "01:07 PM",
    asr: "05:11 PM",
    maghrib: "06:56 PM",
    isha: "08:11 PM"
  },
  {
    date: "2025-03-10",
    ramadanDay: 10,
    fajr: "06:01 AM",
    sunrise: "07:16 AM",
    dhuhr: "01:07 PM",
    asr: "05:12 PM",
    maghrib: "06:57 PM",
    isha: "08:12 PM"
  },
  {
    date: "2025-03-11",
    ramadanDay: 11,
    fajr: "05:59 AM",
    sunrise: "07:15 AM",
    dhuhr: "01:06 PM",
    asr: "05:13 PM",
    maghrib: "06:58 PM",
    isha: "08:13 PM"
  },
  {
    date: "2025-03-12",
    ramadanDay: 12,
    fajr: "05:58 AM",
    sunrise: "07:13 AM",
    dhuhr: "01:06 PM",
    asr: "05:14 PM",
    maghrib: "06:59 PM",
    isha: "08:14 PM"
  },
  {
    date: "2025-03-13",
    ramadanDay: 13,
    fajr: "05:56 AM",
    sunrise: "07:11 AM",
    dhuhr: "01:06 PM",
    asr: "05:14 PM",
    maghrib: "07:00 PM",
    isha: "08:16 PM"
  },
  {
    date: "2025-03-14",
    ramadanDay: 14,
    fajr: "05:54 AM",
    sunrise: "07:10 AM",
    dhuhr: "01:06 PM",
    asr: "05:15 PM",
    maghrib: "07:01 PM",
    isha: "08:17 PM"
  },
  {
    date: "2025-03-15",
    ramadanDay: 15,
    fajr: "05:53 AM",
    sunrise: "07:08 AM",
    dhuhr: "01:05 PM",
    asr: "05:16 PM",
    maghrib: "07:02 PM",
    isha: "08:18 PM"
  },
  {
    date: "2025-03-16",
    ramadanDay: 16,
    fajr: "05:51 AM",
    sunrise: "07:06 AM",
    dhuhr: "01:05 PM",
    asr: "05:17 PM",
    maghrib: "07:03 PM",
    isha: "08:19 PM"
  },
  {
    date: "2025-03-17",
    ramadanDay: 17,
    fajr: "05:49 AM",
    sunrise: "07:05 AM",
    dhuhr: "01:05 PM",
    asr: "05:18 PM",
    maghrib: "07:04 PM",
    isha: "08:20 PM"
  },
  {
    date: "2025-03-18",
    ramadanDay: 18,
    fajr: "05:48 AM",
    sunrise: "07:03 AM",
    dhuhr: "01:04 PM",
    asr: "05:19 PM",
    maghrib: "07:05 PM",
    isha: "08:21 PM"
  },
  {
    date: "2025-03-19",
    ramadanDay: 19,
    fajr: "05:46 AM",
    sunrise: "07:01 AM",
    dhuhr: "01:04 PM",
    asr: "05:19 PM",
    maghrib: "07:07 PM",
    isha: "08:22 PM"
  },
  {
    date: "2025-03-20",
    ramadanDay: 20,
    fajr: "05:44 AM",
    sunrise: "07:00 AM",
    dhuhr: "01:04 PM",
    asr: "05:20 PM",
    maghrib: "07:08 PM",
    isha: "08:24 PM"
  },
  {
    date: "2025-03-21",
    ramadanDay: 21,
    fajr: "05:42 AM",
    sunrise: "06:58 AM",
    dhuhr: "01:04 PM",
    asr: "05:21 PM",
    maghrib: "07:09 PM",
    isha: "08:25 PM"
  },
  {
    date: "2025-03-22",
    ramadanDay: 22,
    fajr: "05:41 AM",
    sunrise: "06:56 AM",
    dhuhr: "01:03 PM",
    asr: "05:22 PM",
    maghrib: "07:10 PM",
    isha: "08:26 PM"
  },
  {
    date: "2025-03-23",
    ramadanDay: 23,
    fajr: "05:39 AM",
    sunrise: "06:55 AM",
    dhuhr: "01:03 PM",
    asr: "05:23 PM",
    maghrib: "07:11 PM",
    isha: "08:27 PM"
  },
  {
    date: "2025-03-24",
    ramadanDay: 24,
    fajr: "05:37 AM",
    sunrise: "06:53 AM",
    dhuhr: "01:03 PM",
    asr: "05:23 PM",
    maghrib: "07:12 PM",
    isha: "08:28 PM"
  },
  {
    date: "2025-03-25",
    ramadanDay: 25,
    fajr: "05:35 AM",
    sunrise: "06:51 AM",
    dhuhr: "01:02 PM",
    asr: "05:24 PM",
    maghrib: "07:13 PM",
    isha: "08:29 PM"
  },
  {
    date: "2025-03-26",
    ramadanDay: 26,
    fajr: "05:33 AM",
    sunrise: "06:50 AM",
    dhuhr: "01:02 PM",
    asr: "05:25 PM",
    maghrib: "07:14 PM",
    isha: "08:31 PM"
  },
  {
    date: "2025-03-27",
    ramadanDay: 27,
    fajr: "05:32 AM",
    sunrise: "06:48 AM",
    dhuhr: "01:02 PM",
    asr: "05:26 PM",
    maghrib: "07:15 PM",
    isha: "08:32 PM"
  },
  {
    date: "2025-03-28",
    ramadanDay: 28,
    fajr: "05:30 AM",
    sunrise: "06:46 AM",
    dhuhr: "01:01 PM",
    asr: "05:27 PM",
    maghrib: "07:16 PM",
    isha: "08:33 PM"
  },
  {
    date: "2025-03-29",
    ramadanDay: 29,
    fajr: "05:28 AM",
    sunrise: "06:45 AM",
    dhuhr: "01:01 PM",
    asr: "05:27 PM",
    maghrib: "07:17 PM",
    isha: "08:34 PM"
  },
  {
    date: "2025-03-30",
    ramadanDay: 30,
    fajr: "05:26 AM",
    sunrise: "06:43 AM",
    dhuhr: "01:01 PM",
    asr: "05:28 PM",
    maghrib: "07:18 PM",
    isha: "08:35 PM"
  },
  {
    date: "2025-03-31",
    ramadanDay: 31,
    fajr: "05:24 AM",
    sunrise: "06:42 AM",
    dhuhr: "01:01 PM",
    asr: "05:29 PM",
    maghrib: "07:19 PM",
    isha: "08:37 PM"
  }
];

export function getPrayerTimesForDate(date: Date, city: 'LA' | 'NYC'): PrayerTime | undefined {
  // Format the date as YYYY-MM-DD in local time
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;
  const times = city === 'LA' ? laPrayerTimes : nycPrayerTimes;
  return times.find(pt => pt.date === dateString);
} 