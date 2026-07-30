import { useState } from "react";

export default function CustomDisclosure() {
  const [item, setItem] = useState<string>("");

  return (
    <div className="w-full max-w-md bg-neutral-700 flex flex-col divide-y gap-2">
      <div>
        <button
          onClick={() => setItem((prev) => (prev === "first" ? "" : "first"))}
          arial-label="first item"
          className="w-full bg-neutral-700 flex h-10 p-2 capitalize cursor-pointer"
        >
          first
        </button>
        {item === "first" && (
          <p className="italic text-sm p-3" aria-label={`${item} data`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            laboriosam, fugit repudiandae quaerat neque repellat labore eum
            pariatur voluptatem magni.
          </p>
        )}
      </div>
      <div>
        <button
          onClick={() => setItem((prev) => (prev === "second" ? "" : "second"))}
          arial-label="second item"
          className="w-full bg-neutral-700 flex h-10 p-2 capitalize cursor-pointer"
        >
          second
        </button>
        {item === "second" && (
          <p className="italic text-sm p-3" aria-label={`${item} data`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            laboriosam, fugit repudiandae quaerat neque repellat labore eum
            pariatur voluptatem magni.
          </p>
        )}
      </div>
      <div>
        <button
          onClick={() => setItem((prev) => (prev === "third" ? "" : "third"))}
          arial-label="third item"
          className="w-full bg-neutral-700 flex h-10 p-2 capitalize cursor-pointer"
        >
          third
        </button>
        {item === "third" && (
          <p className="italic text-sm p-3" aria-label={`${item} data`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            laboriosam, fugit repudiandae quaerat neque repellat labore eum
            pariatur voluptatem magni.
          </p>
        )}
      </div>
    </div>
  );
}
