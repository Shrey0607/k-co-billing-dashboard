
function FilterPanel({ filters, onFilterChange }) {
  return (
    <div>
      <div className="filters-row">
        {}
        <div className="filter-item">
          <label className="filter-label">Cloud provider</label>
          <select
            className="filter-select"
            value={filters.cloud}
            onChange={(e) => onFilterChange("cloud", e.target.value)}
          >
            <option>All</option>
            <option>AWS</option>
            <option>GCP</option>
          </select>
        </div>

        {}
        <div className="filter-item">
          <label className="filter-label">Team</label>
          <select
            className="filter-select"
            value={filters.team}
            onChange={(e) => onFilterChange("team", e.target.value)}
          >
            <option>All</option>
            <option>Core</option>
            <option>Web</option>
            <option>Data</option>
            <option>Mobile</option>
            <option>Platform</option>
          </select>
        </div>

        {}
        <div className="filter-item">
          <label className="filter-label">Environment</label>
          <select
            className="filter-select"
            value={filters.env}
            onChange={(e) => onFilterChange("env", e.target.value)}
          >
            <option>All</option>
            <option>prod</option>
            <option>staging</option>
            <option>dev</option>
          </select>
        </div>

        {}
        <div className="filter-item">
          <label className="filter-label">Month</label>
          <select
            className="filter-select"
            value={filters.month}
            onChange={(e) => onFilterChange("month", e.target.value)}
          >
            <option>All</option>
            <option>2024-11</option>
            <option>2024-12</option>
            <option>2025-01</option>
            <option>2025-02</option>
            <option>2025-03</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
