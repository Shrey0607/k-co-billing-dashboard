function DetailModal({ row, onClose }) {
  if (!row) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose} // click on overlay closes
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h3>Spend Details</h3>
        <p><strong>Date:</strong> {row.date}</p>
        <p><strong>Cloud:</strong> {row.cloud_provider}</p>
        <p><strong>Service:</strong> {row.service}</p>
        <p><strong>Team:</strong> {row.team}</p>
        <p><strong>Environment:</strong> {row.env}</p>
        <p><strong>Cost (USD):</strong> ${Number(row.cost_usd).toFixed(2)}</p>

        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          This is {row.cloud_provider} {row.service} spend from the{" "}
          {row.team} team in the {row.env} environment.
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: "15px",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default DetailModal;
