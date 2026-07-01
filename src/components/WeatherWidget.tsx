"use client";

import { useEffect, useState, useCallback } from "react";
import { WeatherIcon, ClockIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface WeatherData {
  temperature: string;
  precipitation: string;
  humidity: string;
  wind: string;
}

interface WeatherWidgetProps {
  className?: string;
}

const LOCATION = {
  label: "NOMINA.JAKARTA SELATAN",
  timezone: "Asia/Jakarta",
  timezoneLabel: "WIB",
  lat: -6.2615,
  lon: 106.8106,
};

/**
 * Live weather widget for Jakarta Selatan using Open-Meteo API (free, no key).
 * Matches the layout of pilcommunication.com's hero weather bar.
 */
export function WeatherWidget({ className }: WeatherWidgetProps) {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<WeatherData>({
    temperature: "--°C",
    precipitation: "-- MM",
    humidity: "--%",
    wind: "-- KM/H",
  });

  // Live clock — updates every second
  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: LOCATION.timezone,
      });
      setTime(formatter.format(now));
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch weather from Open-Meteo — refreshes every 10 minutes
  const fetchWeather = useCallback(async () => {
    try {
      const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${LOCATION.lat}&longitude=${LOCATION.lon}` +
        `&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m` +
        `&timezone=${encodeURIComponent(LOCATION.timezone)}`;

      const res = await fetch(url);
      if (!res.ok) return;

      const data = await res.json();
      const current = data.current;

      setWeather({
        temperature: `${Math.round(current.temperature_2m)}°C`,
        precipitation: `${current.precipitation} MM`,
        humidity: `${current.relative_humidity_2m}%`,
        wind: `${Math.round(current.wind_speed_10m)} KM/H`,
      });
    } catch {
      // Silently fail — keep showing placeholder or last known data
    }
  }, []);

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchWeather]);

  return (
    <div
      className={cn(
        "flex items-center gap-4 text-pil-black text-[11px] font-bold uppercase tracking-wide",
        className
      )}
    >
      {/* Red square accent dot */}
      <span className="hidden md:block w-2.5 h-2.5 bg-pil-red shrink-0" />

      {/* Location label */}
      <span className="hidden md:inline whitespace-nowrap">
        {LOCATION.label}
      </span>

      {/* Clock */}
      <span className="hidden md:inline-flex items-center gap-1 whitespace-nowrap">
        <ClockIcon className="w-3.5 h-3.5" />
        {time} {LOCATION.timezoneLabel}
      </span>

      {/* Temperature */}
      <span className="hidden md:inline-flex items-center gap-1 whitespace-nowrap">
        <WeatherIcon className="w-4 h-4" />
        {weather.temperature}
      </span>

      {/* Extra weather details */}
      <div className="hidden lg:flex flex-col text-[9px] leading-tight whitespace-nowrap">
        <span>PRECIPITATION: {weather.precipitation}</span>
        <span>HUMIDITY: {weather.humidity}</span>
        <span>WIND: {weather.wind}</span>
      </div>
    </div>
  );
}
