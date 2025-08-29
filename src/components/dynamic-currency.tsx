"use client";

import { useEffect, useState } from "react";

interface DynamicCurrencyProps {
  className?: string;
}

export function DynamicCurrency({ className }: DynamicCurrencyProps) {
  const [currencySymbol, setCurrencySymbol] = useState("$");

  useEffect(() => {
    try {
      // Get user's locale and timezone for better detection
      const userLocale = navigator.language || "en-US";
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Check if user is likely in India based on timezone
      const isIndianTimezone =
        userTimezone.includes("Asia/Kolkata") ||
        userTimezone.includes("Asia/Calcutta") ||
        userTimezone.includes("Asia/Mumbai") ||
        userTimezone.includes("Asia/Delhi");

      let currencyCode = getCurrencyCode(userLocale, userTimezone);

      // Force INR for Indian timezones if not already detected
      if (isIndianTimezone && currencyCode === "USD") {
        currencyCode = "INR";
      }

      const formatter = new Intl.NumberFormat(userLocale, {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
      });

      const symbol =
        formatter.formatToParts(0).find((part) => part.type === "currency")
          ?.value || "$";
      setCurrencySymbol(symbol);

      // Debug logging (remove in production)
      console.log("Currency Detection Debug:", {
        userLocale,
        userTimezone,
        isIndianTimezone,
        currencyCode,
        symbol,
      });
    } catch (error) {
      console.error("Currency detection failed:", error);
      setCurrencySymbol("$");
    }
  }, []);

  return <span className={className}>{currencySymbol}0</span>;
}

function getCurrencyCode(locale: string, timezone?: string): string {
  const currencyMap: Record<string, string> = {
    // North America
    "en-US": "USD",
    "en-CA": "CAD",

    // Europe
    "en-GB": "GBP",
    "fr-FR": "EUR",
    "de-DE": "EUR",
    "es-ES": "EUR",
    "it-IT": "EUR",
    "nl-NL": "EUR",
    "pt-PT": "EUR",
    "pl-PL": "PLN",
    "ru-RU": "RUB",
    "tr-TR": "TRY",
    "ch-CH": "CHF",
    "se-SE": "SEK",
    "no-NO": "NOK",
    "dk-DK": "DKK",

    // Asia Pacific - Enhanced India detection
    "ja-JP": "JPY",
    "ko-KR": "KRW",
    "zh-CN": "CNY",
    "zh-TW": "TWD",
    "hi-IN": "INR",
    "en-IN": "INR",
    "bn-IN": "INR",
    "te-IN": "INR",
    "mr-IN": "INR",
    "ta-IN": "INR",
    "gu-IN": "INR",
    "kn-IN": "INR",
    "ml-IN": "INR",
    "or-IN": "INR",
    "pa-IN": "INR",
    "as-IN": "INR",
    "th-TH": "THB",
    "vi-VN": "VND",
    "id-ID": "IDR",
    "ms-MY": "MYR",
    "en-SG": "SGD",
    "en-AU": "AUD",
    "en-NZ": "NZD",
    "fil-PH": "PHP",

    // Middle East & Africa
    "ar-SA": "SAR",
    "ar-AE": "AED",
    "he-IL": "ILS",
    "en-ZA": "ZAR",
    "ar-EG": "EGP",

    // South America
    "pt-BR": "BRL",
    "es-MX": "MXN",
    "es-AR": "ARS",
    "es-CL": "CLP",
    "es-CO": "COP",
    "es-PE": "PEN",
  };

  // Timezone-based detection for better accuracy
  const timezoneMap: Record<string, string> = {
    "Asia/Kolkata": "INR",
    "Asia/Calcutta": "INR",
    "Asia/Mumbai": "INR",
    "Asia/Delhi": "INR",
    "Asia/Tokyo": "JPY",
    "Asia/Seoul": "KRW",
    "Asia/Shanghai": "CNY",
    "Asia/Bangkok": "THB",
    "Asia/Singapore": "SGD",
    "Europe/London": "GBP",
    "Europe/Paris": "EUR",
    "Europe/Berlin": "EUR",
    "America/New_York": "USD",
    "America/Los_Angeles": "USD",
    "America/Toronto": "CAD",
  };

  const fullLocale = locale.toLowerCase();
  const country = locale.split("-")[1]?.toLowerCase();

  // Priority order: timezone > exact locale > country-based > fallback
  if (timezone && timezoneMap[timezone]) {
    return timezoneMap[timezone];
  }

  if (currencyMap[fullLocale]) {
    return currencyMap[fullLocale];
  }

  if (country && currencyMap[`en-${country}`]) {
    return currencyMap[`en-${country}`];
  }

  if (country && currencyMap[`hi-${country}`]) {
    return currencyMap[`hi-${country}`];
  }

  // Special case for India - if country code is 'in', return INR
  if (country === "in") {
    return "INR";
  }

  return "USD";
}
