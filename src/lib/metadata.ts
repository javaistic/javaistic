const baseUrl =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` ||
      "https://javaistic.vercel.app"
    : "http://localhost:3000";

export { baseUrl };
