/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { fetchSpendData } from "./services/api";
import FilterPanel from "./components/FilterPanel";
import Summary from "./components/Summary";
import DataTable from "./components/DataTable";
import Chart from "./components/Chart";
import DetailModal from "./components/DetailModal";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    cloud: "All",
    team: "All",
    env: "All",
    month: "All",
  });

  const [selectedRow, setSelectedRow] = useState(null);

  // Load data whenever filters change
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await fetchSpendData(filters);
        setData(result);
        setError(null);
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [filters]);

  // Update a single filter
  function handleFilterChange(key, value) {
    setFilters({ ...filters, [key]: value });
  }

  // Select row to display full details
  function handleRowClick(row) {
    setSelectedRow(row);
  }

  function handleCloseModal() {
    setSelectedRow(null);
  }

  return (
    <div className="app-root">
      <div className="dashboard">

        {/* Top header */}
        <header className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Cloud Spend Dashboard</h1>
            <p className="dashboard-subtitle">
              Live, filterable breakdown of cloud spend by team &amp; environment
            </p>
          </div>
          <div className="realtime-indicator">
            <span className="realtime-dot" />
            <span>Real-time</span>
          </div>
        </header>

        {/* Filters and summary */}
        <div className="dashboard-top-row">
          <div className="filters-card">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </div>

          <div className="summary-card">
            <Summary data={data} />
          </div>
        </div>

        {/* Monthly spend chart */}
        <div className="chart-card">
          <h3 className="section-title">Monthly spend</h3>
          <Chart data={data} />
        </div>

        {/* Table section */}
        <div className="table-card">
          {loading && <p>Loading data...</p>}
          {error && <p className="error-text">{error}</p>}

          {!loading && !error && (
            <>
              <DataTable data={data} onRowClick={handleRowClick} />
              <p className="table-tip">
                Tip: click Date or Cost headers to toggle sort. Click a row for details.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Detail overlay modal */}
      <DetailModal row={selectedRow} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
