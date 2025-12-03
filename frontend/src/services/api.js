import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

function buildQueryParams(filters = {}) {
  const params = new URLSearchParams();

  if (filters.cloud && filters.cloud !== "All") params.append("cloud", filters.cloud);
  if (filters.team && filters.team !== "All") params.append("team", filters.team);
  if (filters.env && filters.env !== "All") params.append("env", filters.env);
  if (filters.month && filters.month !== "All") params.append("month", filters.month);

  return params.toString() ? `?${params}` : "";
}

// Fetch filtered spend data from backend
export async function fetchSpendData(filters = {}) {
  const query = buildQueryParams(filters);
  const url = `${API_BASE_URL}/api/spend${query}`;
  const response = await axios.get(url);
  return response.data;
}
