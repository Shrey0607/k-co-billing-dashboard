// Returns only records that match all provided filters
function filterSpendData(data, { cloud, team, env, month }) {
  return data.filter((row) => {
    const cloudMatch =
      !cloud || cloud === "All" || row.cloud_provider === cloud;

    const teamMatch =
      !team || team === "All" || row.team === team;

    const envMatch =
      !env || env === "All" || row.env === env;

    // Match year-month prefix (YYYY-MM)
    const monthMatch =
      !month || month === "All" || (row.date && row.date.startsWith(month));

    return cloudMatch && teamMatch && envMatch && monthMatch;
  });
}

module.exports = {
  filterSpendData,
};
