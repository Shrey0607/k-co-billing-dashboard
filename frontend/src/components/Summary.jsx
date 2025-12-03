
function Summary({ data }) {
  if (!data || data.length === 0) {
    return (
      <div>
        <h4 className="summary-title">Summary (filtered)</h4>
        <p className="summary-total">$0.00</p>
        <p className="summary-label">No data for current filters.</p>
      </div>
    );
  }

  const totalSpend = data.reduce((sum, item) => sum + item.cost_usd, 0);
  const awsSpend = data
    .filter((item) => item.cloud_provider === "AWS")
    .reduce((sum, item) => sum + item.cost_usd, 0);
  const gcpSpend = data
    .filter((item) => item.cloud_provider === "GCP")
    .reduce((sum, item) => sum + item.cost_usd, 0);

  const fmt = (n) => `$${n.toFixed(2)}`;

  return (
    <div>
      <h4 className="summary-title">Summary (filtered)</h4>
      <p className="summary-total">{fmt(totalSpend)}</p>

      <div className="summary-rows">
        <div className="summary-row">
          <span className="summary-dot aws" />
          <span className="summary-provider">AWS</span>
          <span className="summary-amount">{fmt(awsSpend)}</span>
        </div>

        <div className="summary-row">
          <span className="summary-dot gcp" />
          <span className="summary-provider">GCP</span>
          <span className="summary-amount">{fmt(gcpSpend)}</span>
        </div>
      </div>
    </div>
  );
}

export default Summary;
