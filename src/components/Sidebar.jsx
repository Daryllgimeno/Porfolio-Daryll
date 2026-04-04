import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#2563eb",
      color: "#fff",
      padding: "30px 20px",
      position: "fixed",
      right: 0,
      top: 0
    }}>
      <h2 style={{ marginBottom: "30px" }}>Daryll</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.5" }}>
        <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;