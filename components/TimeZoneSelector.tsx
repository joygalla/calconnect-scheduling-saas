"use client";

interface Props {
  timezone: string;
  setTimezone: (tz: string) => void;
}

export default function TimeZoneSelector({ timezone, setTimezone }: Props) {
  const zones = Intl.supportedValuesOf("timeZone");

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ fontSize: 14, fontWeight: 600 }}>
        Timezone
      </label>
      <select
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginTop: 5,
          borderRadius: 6,
          border: "1px solid #CCC",
        }}
      >
        {zones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </div>
  );
}