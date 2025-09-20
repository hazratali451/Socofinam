// CategorySelectCustom.jsx
import React, { useEffect, useRef, useState } from "react";

export default function CategorySelectCustom({
  categories = ["Design", "Development", "Marketing", "Finance"],
  value: initialValue = "",
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue);
  const rootRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    // close on outside click
    function onDoc(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  const handleSelect = (val) => {
    setSelected(val);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="mt-1.5 relative flex items-center">
      {/* button styled like your input */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className={`h-[60px] w-full bg-fadedWhite rounded-full px-6 pr-6 
          text-base focus:outline-none border-[0.5px] border-transparent focus:border-darkblue/50
          ${selected === "" ? "text-black1/30" : "text-black1"} flex items-center justify-between`}
      >
        <span className="truncate">{selected === "" ? "Select category" : selected}</span>

        {/* Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="ml-4 pointer-events-none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#191919"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* dropdown list */}
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-activedescendant={selected}
          className="absolute border border-darkblue/30 top-full left-0 right-0 mt-2 bg-white rounded-lg box-shadow max-h-[240px] overflow-auto z-50"
          style={{
            // make sure it sits above other content; match your input width and don't overflow viewport
            maxWidth: "100%",
          }}
        >
          {categories.map((cat) => (
            <li
              key={cat}
              role="option"
              aria-selected={selected === cat}
              onClick={() => handleSelect(cat)}
              className={`cursor-pointer px-6 py-4 text-base truncate flex items-center ${
                selected === cat ? "bg-darkblue/10 text-darkblue font-semibold" : "text-black1"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
