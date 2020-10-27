const dashboard =
  process.env.NODE_ENV === "production"
    ? "/api/student"
    : "http://localhost:4000/api/student";
export { dashboard };
