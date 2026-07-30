"use client";

import { useState } from "react";
import CustomModal from "./CustomModal";
import CustomTab from "./CustomTab";
import CustomDisclosure from "./CustomDisclosure";

export default function Playground() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full  h-screen p-6">
      <main className="w-full h-full ">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Playground
        </h1>
        <div className="mt-4 space-y-4">
          <div>
            <button
              arial-label="Open modal"
              className="bg-amber-800 py-1 px-2 cursor-pointer rounded-full"
              onClick={() => setOpen(true)}
            >
              Open modal
            </button>

            {open && <CustomModal setOpen={setOpen} />}
          </div>
          <div>
            <CustomTab />
          </div>
          <div>
            <CustomDisclosure />
          </div>
        </div>
      </main>
    </div>
  );
}
