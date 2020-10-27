const dashboard =
  process.env.NODE_ENV === "production"
    ? "/api/student"
    : "http://localhost:4000/api/student";

const log =
  process.env.NODE_ENV === "production"
    ? "/api/log"
    : "http://localhost:4000/api/log";
export { dashboard, log };
