"use client";

import { useState } from "react";
import CustomModal from "./CustomModal";
import CustomTab from "./CustomTab";
import CustomDisclosure from "./CustomDisclosure";
import { ShadcnDialog } from "./ShadcnDialog";
import { ShadcnTabsDemo } from "./ShadcnTabsDemo";

export default function Playground() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <main className="w-full h-screen p-6 ">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Playground
      </h1>

      <section className="mt-4 space-y-4 mb-10">
        <p>Custom Builds</p>
        <section aria-label="custom modal">
          <button
            arial-label="Open modal"
            className="bg-amber-800 py-1 px-2 cursor-pointer rounded-full"
            onClick={() => setOpen(true)}
          >
            Open modal
          </button>

          {open && <CustomModal setOpen={setOpen} />}
        </section>
        <section aria-label="custom tab">
          <CustomTab />
        </section>
        <section aria-label="custom disclosure">
          <CustomDisclosure />
        </section>
      </section>
      <section className="space-y-4">
        <p>Shadcn UI Builds</p>
        <section aria-label="shadcn dialog">
          <ShadcnDialog />
        </section>
        <section aria-label="shadcn tab">
          <ShadcnTabsDemo />
        </section>
      </section>
    </main>
  );
}
