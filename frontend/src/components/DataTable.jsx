import { useState } from "react";

function DataTable({ data, onRowClick }) {
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "asc",
  });

  function handleSort(columnKey) {
    setSortConfig((prev) => {
      if (prev.key === columnKey) {
        return {
          key: columnKey,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key: columnKey, direction: "asc" };
    });
  }

  const sortedData = [...data].sort((a, b) => {
    const { key, direction } = sortConfig;

    let valueA = a[key];
    let valueB = b[key];

    if (key === "cost_usd") {
      valueA = Number(valueA);
      valueB = Number(valueB);
    }

    if (valueA < valueB) return direction === "asc" ? -1 : 1;
    if (valueA > valueB) return direction === "asc" ? 1 : -1;
    return 0;
  });

  if (!data || data.length === 0) {
    return <p>No data found for this filter.</p>;
  }

  const formatCost = (n) => `$${Number(n).toFixed(2)}`;

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <SortableHeader
              label="Date"
              columnKey="date"
              sortConfig={sortConfig}
              onSort={handleSort}
            />
            <th className="th">Cloud</th>
            <th className="th">Service</th>
            <th className="th">Team</th>
            <th className="th">Env</th>
            <SortableHeader
              label="Cost (USD)"
              columnKey="cost_usd"
              sortConfig={sortConfig}
              onSort={handleSort}
            />
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr
              key={index}
              className="tr"
              onClick={() => onRowClick && onRowClick(row)}
            >
              <td className="td">{row.date}</td>
              <td className="td">{row.cloud_provider}</td>
              <td className="td">{row.service}</td>
              <td className="td">{row.team}</td>
              <td className="td">{row.env}</td>
              <td className="td">{formatCost(row.cost_usd)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SortableHeader({ label, columnKey, sortConfig, onSort }) {
  const isActive = sortConfig.key === columnKey;
  const directionArrow = isActive
    ? sortConfig.direction === "asc"
      ? "▲"
      : "▼"
    : "";

  return (
    <th
      className="th sortable"
      onClick={() => onSort(columnKey)}
    >
      {label} {directionArrow}
    </th>
  );
}

export default DataTable;
