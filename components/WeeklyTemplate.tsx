"use client";

import React from "react";

type WeeklyTemplateProps = {
  // Optional: kept for compatibility if some pages pass hostId
  hostId?: string;

  // Controlled template data from the parent
  template: any;

  // Parent’s state setter, e.g. setAvailability
  onChange: React.Dispatch<React.SetStateAction<any>>;
};

export default function WeeklyTemplate({
  hostId,
  template,
  onChange,
}: WeeklyTemplateProps) {
  // Simple “clear” action just so onChange is used
  const handleClear = () => {
    onChange({});
  };

  const prettyTemplate = React.useMemo(
    () => JSON.stringify(template, null, 2),
    [template]
  );

  return (
    <div className="space-y-2">
      {hostId && (
        <p className="text-sm text-gray-500">
          Weekly template for host{" "}
          <span className="font-mono font-semibold">{hostId}</span>
        </p>
      )}

      <pre className="text-xs bg-gray-100 rounded p-2 overflow-x-auto">
        {prettyTemplate}
      </pre>

      <button
        type="button"
        onClick={handleClear}
        className="px-3 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300"
      >
        Clear template
      </button>
    </div>
  );
}