"use client";

import { useEffect, useState, useCallback } from "react";
import { MapPin } from "lucide-react";
import { WeatherIcon, ClockIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface WeatherData {
  temperature: string;
}

interface WeatherWidgetProps {
  className?: string;
}

const LOCATION = {
  label: "JAKARTA SELATAN",
  timezone: "Asia/Jakarta",
  timezoneLabel: "WIB",
  lat: -6.2615,
  lon: 106.8106,
};

/**
 * Live weather widget for Jakarta Selatan using Open-Meteo API (free, no key).
 * Matches the layout of nominacommunication.com's hero weather bar.
 */
export function WeatherWidget({ className }: WeatherWidgetProps) {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<WeatherData>({
    temperature: "--°C",
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
        `&current=temperature_2m` +
        `&timezone=${encodeURIComponent(LOCATION.timezone)}`;

      const res = await fetch(url);
      if (!res.ok) return;

      const data = await res.json();
      const current = data.current;

      setWeather({
        temperature: `${Math.round(current.temperature_2m)}°C`,
      });
    } catch {
      // Silently fail — keep showing placeholder or last known data
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchWeather();
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchWeather]);

  return (
    <div
      className={cn(
        "flex items-center gap-4 text-white text-[11px] font-bold uppercase tracking-wide",
        className
      )}
    >
      {/* Location pin + label */}
      <span className="hidden md:inline-flex items-center gap-1.5 whitespace-nowrap">
        <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
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

    </div>
  );
}
