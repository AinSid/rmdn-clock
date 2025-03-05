'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PrayerTime, getPrayerTimesForDate, laPrayerTimes, nycPrayerTimes } from "@/lib/prayer-times";
import { useEffect, useState } from "react";

type City = 'LA' | 'NYC';

export function PrayerTimes() {
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const today = new Date();
    if (today.getFullYear() !== 2025 || today.getMonth() !== 2) {
      return new Date(2025, 2, 1);
    }
    return today;
  });
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime | undefined>();
  const [showPrayers, setShowPrayers] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  useEffect(() => {
    if (selectedCity) {
      const times = getPrayerTimesForDate(selectedDate, selectedCity);
      setPrayerTimes(times);
    }
  }, [selectedDate, selectedCity]);

  if (!showPrayers) {
    return (
      <div className="h-[100dvh] flex flex-col items-center justify-center bg-[#F9F5F0] p-4 fixed inset-0">
        <div className="-mt-8 flex flex-col items-center w-full">
          <h1 className="text-3xl font-semibold mb-8 text-[#1C1C1C] text-center">Prayer Times</h1>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-[#D98C65] hover:bg-[#E49A77] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setShowPrayers(true)}
          >
            Choose City
          </Button>
        </div>
      </div>
    );
  }

  if (!selectedCity) {
    return (
      <div className="h-[100dvh] flex flex-col items-center justify-center bg-[#F9F5F0] p-4 fixed inset-0">
        <div className="-mt-8 flex flex-col items-center w-full space-y-4">
          <h1 className="text-3xl font-semibold mb-4 text-[#1C1C1C] text-center">Select City</h1>
          <Button
            size="lg"
            className="text-lg px-8 py-6 w-64 bg-[#D98C65] hover:bg-[#E49A77] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedCity('LA')}
          >
            Los Angeles
          </Button>
          <Button
            size="lg"
            className="text-lg px-8 py-6 w-64 bg-[#D98C65] hover:bg-[#E49A77] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedCity('NYC')}
          >
            New York City
          </Button>
          <Button
            variant="ghost"
            className="mt-4 text-[#D98C65] hover:text-[#E49A77]"
            onClick={() => setShowPrayers(false)}
          >
            ← Back
          </Button>
        </div>
      </div>
    );
  }

  if (!prayerTimes) {
    return <div>Loading...</div>;
  }

  const prayersList = [
    { name: "Fajr", time: prayerTimes.fajr },
    { name: "Dhuhr", time: prayerTimes.dhuhr },
    { name: "Asr", time: prayerTimes.asr },
    { name: "Maghrib", time: prayerTimes.maghrib },
    { name: "Isha", time: prayerTimes.isha },
  ];

  const handleDateChange = (days: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + days);
    
    if (newDate.getMonth() === 2 && newDate.getFullYear() === 2025) {
      setSelectedDate(newDate);
    }
  };

  return (
    <div className="h-[100dvh] bg-[#F9F5F0] p-4 sm:p-6 fixed inset-0 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="ghost"
          className="text-[#D98C65] hover:text-[#E49A77] transition-colors"
          onClick={() => setSelectedCity(null)}
        >
          ← Back
        </Button>
        <h2 className="text-sm font-medium text-[#1C1C1C]">
          {selectedCity === 'LA' ? 'Los Angeles' : 'New York City'}
        </h2>
      </div>

      <Card className="w-full max-w-md mx-auto shadow-lg border-[#E49A77]/20 bg-white/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="space-y-4">
            <div className="flex justify-between items-center px-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDateChange(-1)}
                disabled={selectedDate.getDate() === 1}
                className="text-[#D98C65] hover:text-[#E49A77] disabled:opacity-50"
              >
                ←
              </Button>
              <div className="text-center">
                <div className="text-xl font-medium mb-2 text-[#1C1C1C]">{selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}</div>
                <div className="text-sm text-[#D98C65] font-medium">Ramadan Day {prayerTimes.ramadanDay}</div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDateChange(1)}
                disabled={selectedDate.getDate() === 31}
                className="text-[#D98C65] hover:text-[#E49A77] disabled:opacity-50"
              >
                →
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {prayersList.map((prayer) => (
              <div
                key={prayer.name}
                className="flex justify-between items-center p-4 rounded-lg bg-white/80 hover:bg-white transition-colors duration-200"
              >
                <span className="font-medium text-[#1C1C1C]">{prayer.name}</span>
                <span className="font-semibold text-[#1C1C1C]">{prayer.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 