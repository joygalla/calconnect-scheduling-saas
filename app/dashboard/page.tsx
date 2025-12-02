export default function DashboardHome() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>Dashboard</h1>
      <p>Welcome to your host dashboard.</p>

      <ul style={{ marginTop: 20 }}>
        <li><a href="/dashboard/availability">Manage Availability</a></li>
        <li><a href="/dashboard/bookings">View Bookings</a></li>
        <li><a href="/dashboard/services">Service Types</a></li>
        <li><a href="/dashboard/settings">Settings</a></li>
      </ul>
    </div>
  );
}