import { useState } from "react";

export default function CustomTab() {
  const [tab, setTab] = useState<string>("first");
  return (
    <div>
      <div className="flex gap-2 bg-gray-700 w-full max-w-md justify-between rounded-md p-1">
        <button
          className={`${tab === "first" ? "bg-amber-100 text-black" : "text-gray-200"} px-2 py-1 w-full rounded-md cursor-pointer`}
          onClick={() => setTab("first")}
          arial-label="first tab"
        >
          first
        </button>
        <button
          className={`${tab === "second" ? "bg-amber-100 text-black" : "text-gray-200"} px-2 py-1 w-full rounded-md cursor-pointer`}
          onClick={() => setTab("second")}
          arial-label="second tab"
        >
          second
        </button>
        <button
          className={`${tab === "third" ? "bg-amber-100 text-black" : "text-gray-200"} px-2 py-1 w-full rounded-md cursor-pointer`}
          onClick={() => setTab("third")}
          arial-label="third tab"
        >
          third
        </button>
      </div>
      <div className="w-full max-w-md p-2">
        <p className="uppercase" aria-label={`${tab} view`}>
          {tab}
        </p>
      </div>
    </div>
  );
}
