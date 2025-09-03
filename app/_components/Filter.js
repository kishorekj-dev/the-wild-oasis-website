"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";
  function handleFIlter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="border bg-primary-800 flex">
      <Button
        filter="all"
        handleFIlter={handleFIlter}
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>

      <Button
        filter="small"
        handleFIlter={handleFIlter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFIlter={handleFIlter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFIlter={handleFIlter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFIlter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFIlter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
