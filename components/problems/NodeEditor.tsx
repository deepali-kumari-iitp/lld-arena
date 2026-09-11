"use client";

import { useState } from "react";

type NodeType = "class" | "interface";

export type NodeEditorData = {
  title: string;
  type: NodeType;
  attributes: string[];
  methods: string[];
};

type NodeEditorProps = {
  data: NodeEditorData;
  onChange: (data: NodeEditorData) => void;
  onDelete: () => void;
  onClose: () => void;
};

export function NodeEditor({
  data,
  onChange,
  onDelete,
  onClose,
}: NodeEditorProps) {
  const [attribute, setAttribute] = useState("");
  const [method, setMethod] = useState("");

  /* =========================================================
     UPDATE NODE TITLE
     ========================================================= */

  function updateTitle(title: string) {
    onChange({
      ...data,
      title,
    });
  }

  /* =========================================================
     UPDATE NODE TYPE
     ========================================================= */

  function updateType(type: NodeType) {
    onChange({
      ...data,
      type,
    });
  }

  /* =========================================================
     ADD ATTRIBUTE
     ========================================================= */

  function addAttribute() {
    const value = attribute.trim();

    if (!value) return;

    onChange({
      ...data,
      attributes: [...data.attributes, value],
    });

    setAttribute("");
  }

  /* =========================================================
     REMOVE ATTRIBUTE
     ========================================================= */

  function removeAttribute(index: number) {
    onChange({
      ...data,
      attributes: data.attributes.filter((_, i) => i !== index),
    });
  }

  /* =========================================================
     ADD METHOD
     ========================================================= */

  function addMethod() {
    const value = method.trim();

    if (!value) return;

    onChange({
      ...data,
      methods: [...data.methods, value],
    });

    setMethod("");
  }

  /* =========================================================
     REMOVE METHOD
     ========================================================= */

  function removeMethod(index: number) {
    onChange({
      ...data,
      methods: data.methods.filter((_, i) => i !== index),
    });
  }

  /* =========================================================
     KEYBOARD HANDLERS
     ========================================================= */

  function handleAttributeKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      addAttribute();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setAttribute("");
    }
  }

  function handleMethodKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      addMethod();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setMethod("");
    }
  }

  return (
    <aside
      className="
        absolute
        right-5
        top-5
        z-[100]
        flex
        w-[360px]
        max-w-[calc(100%-40px)]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-orange-500/20
        bg-[#100804]/95
        shadow-2xl
        shadow-black/60
        backdrop-blur-xl
      "
      role="dialog"
      aria-label="Node editor"
    >
      {/* =====================================================
          HEADER
          ===================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-orange-500/10
          px-5
          py-4
        "
      >
        <div>
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-orange-400
            "
          >
            Node Editor
          </p>

          <p className="mt-1 text-xs text-white/40">
            Edit your architecture
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close editor"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            text-lg
            text-white/40
            transition-all
            duration-200
            hover:border-orange-500/30
            hover:bg-orange-500/10
            hover:text-orange-300
            active:scale-95
          "
        >
          ×
        </button>
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          max-h-[70vh]
          overflow-y-auto
          p-5
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-orange-500/20
        "
      >
        {/* ===================================================
            TYPE
            =================================================== */}

        <div>
          <label
            className="
              mb-2
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white/40
            "
          >
            Type
          </label>

          <div className="grid grid-cols-2 gap-2">
            {/* CLASS */}

            <button
              type="button"
              onClick={() => updateType("class")}
              aria-pressed={data.type === "class"}
              className={`
                rounded-xl
                border
                px-3
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  data.type === "class"
                    ? `
                      border-orange-500/50
                      bg-orange-500/10
                      text-orange-300
                      shadow-[0_0_20px_rgba(242,106,19,0.06)]
                    `
                    : `
                      border-white/10
                      bg-white/[0.02]
                      text-white/50
                      hover:border-orange-500/20
                      hover:bg-orange-500/[0.04]
                      hover:text-white/70
                    `
                }
              `}
            >
              Class
            </button>

            {/* INTERFACE */}

            <button
              type="button"
              onClick={() => updateType("interface")}
              aria-pressed={data.type === "interface"}
              className={`
                rounded-xl
                border
                px-3
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  data.type === "interface"
                    ? `
                      border-orange-500/50
                      bg-orange-500/10
                      text-orange-300
                      shadow-[0_0_20px_rgba(242,106,19,0.06)]
                    `
                    : `
                      border-white/10
                      bg-white/[0.02]
                      text-white/50
                      hover:border-orange-500/20
                      hover:bg-orange-500/[0.04]
                      hover:text-white/70
                    `
                }
              `}
            >
              Interface
            </button>
          </div>
        </div>

        {/* ===================================================
            NAME
            =================================================== */}

        <div className="mt-5">
          <label
            htmlFor="node-name"
            className="
              mb-2
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white/40
            "
          >
            Name
          </label>

          <input
            id="node-name"
            type="text"
            value={data.title}
            onChange={(event) =>
              updateTitle(event.target.value)
            }
            placeholder={
              data.type === "class"
                ? "Vehicle"
                : "VehicleInterface"
            }
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black/30
              px-4
              py-3
              text-sm
              text-white
              outline-none
              transition-all
              duration-200
              placeholder:text-white/20
              focus:border-orange-500/40
              focus:bg-orange-500/[0.03]
              focus:ring-1
              focus:ring-orange-500/20
            "
          />
        </div>

        {/* ===================================================
            ATTRIBUTES
            =================================================== */}

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <label
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/40
              "
            >
              Attributes
            </label>

            <span
              className="
                rounded-full
                border
                border-white/5
                px-2
                py-0.5
                text-[10px]
                text-white/25
              "
            >
              {data.attributes.length}
            </span>
          </div>

          {/* INPUT */}

          <div className="flex gap-2">
            <input
              type="text"
              value={attribute}
              onChange={(event) =>
                setAttribute(event.target.value)
              }
              onKeyDown={handleAttributeKeyDown}
              placeholder="- licenseNumber: string"
              className="
                min-w-0
                flex-1
                rounded-xl
                border
                border-white/10
                bg-black/30
                px-3
                py-2.5
                text-sm
                text-white
                outline-none
                transition-all
                duration-200
                placeholder:text-white/20
                focus:border-orange-500/40
                focus:ring-1
                focus:ring-orange-500/20
              "
            />

            <button
              type="button"
              onClick={addAttribute}
              aria-label="Add attribute"
              className="
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-orange-500/30
                bg-orange-500/10
                text-lg
                text-orange-300
                transition-all
                duration-200
                hover:border-orange-500/50
                hover:bg-orange-500/20
                hover:text-orange-200
                active:scale-95
              "
            >
              +
            </button>
          </div>

          {/* LIST */}

          <div className="mt-3 space-y-2">
            {data.attributes.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.025]
                  px-3
                  py-2.5
                  transition-colors
                  hover:border-orange-500/10
                  hover:bg-orange-500/[0.025]
                "
              >
                <span
                  className="
                    break-all
                    pr-3
                    font-mono
                    text-xs
                    text-white/60
                  "
                >
                  {item}
                </span>

                <button
                  type="button"
                  onClick={() => removeAttribute(index)}
                  aria-label={`Remove attribute ${item}`}
                  className="
                    shrink-0
                    text-sm
                    text-white/25
                    transition-colors
                    hover:text-red-400
                  "
                >
                  ×
                </button>
              </div>
            ))}

            {data.attributes.length === 0 && (
              <p
                className="
                  rounded-xl
                  border
                  border-dashed
                  border-white/5
                  px-3
                  py-3
                  text-center
                  text-[11px]
                  text-white/20
                "
              >
                No attributes yet
              </p>
            )}
          </div>
        </div>

        {/* ===================================================
            METHODS
            =================================================== */}

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <label
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-white/40
              "
            >
              Methods
            </label>

            <span
              className="
                rounded-full
                border
                border-white/5
                px-2
                py-0.5
                text-[10px]
                text-white/25
              "
            >
              {data.methods.length}
            </span>
          </div>

          {/* INPUT */}

          <div className="flex gap-2">
            <input
              type="text"
              value={method}
              onChange={(event) =>
                setMethod(event.target.value)
              }
              onKeyDown={handleMethodKeyDown}
              placeholder="+ getType()"
              className="
                min-w-0
                flex-1
                rounded-xl
                border
                border-white/10
                bg-black/30
                px-3
                py-2.5
                text-sm
                text-white
                outline-none
                transition-all
                duration-200
                placeholder:text-white/20
                focus:border-orange-500/40
                focus:ring-1
                focus:ring-orange-500/20
              "
            />

            <button
              type="button"
              onClick={addMethod}
              aria-label="Add method"
              className="
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-orange-500/30
                bg-orange-500/10
                text-lg
                text-orange-300
                transition-all
                duration-200
                hover:border-orange-500/50
                hover:bg-orange-500/20
                hover:text-orange-200
                active:scale-95
              "
            >
              +
            </button>
          </div>

          {/* LIST */}

          <div className="mt-3 space-y-2">
            {data.methods.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/5
                  bg-white/[0.025]
                  px-3
                  py-2.5
                  transition-colors
                  hover:border-orange-500/10
                  hover:bg-orange-500/[0.025]
                "
              >
                <span
                  className="
                    break-all
                    pr-3
                    font-mono
                    text-xs
                    text-white/60
                  "
                >
                  {item}
                </span>

                <button
                  type="button"
                  onClick={() => removeMethod(index)}
                  aria-label={`Remove method ${item}`}
                  className="
                    shrink-0
                    text-sm
                    text-white/25
                    transition-colors
                    hover:text-red-400
                  "
                >
                  ×
                </button>
              </div>
            ))}

            {data.methods.length === 0 && (
              <p
                className="
                  rounded-xl
                  border
                  border-dashed
                  border-white/5
                  px-3
                  py-3
                  text-center
                  text-[11px]
                  text-white/20
                "
              >
                No methods yet
              </p>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-orange-500/10
          bg-black/20
          px-5
          py-4
        "
      >
        {/* DELETE */}

        <button
          type="button"
          onClick={onDelete}
          className="
            rounded-xl
            border
            border-red-500/20
            px-4
            py-2.5
            text-xs
            font-medium
            text-red-400
            transition-all
            duration-200
            hover:border-red-500/30
            hover:bg-red-500/10
            hover:text-red-300
            active:scale-95
          "
        >
          Delete node
        </button>

        {/* DONE */}

        <button
          type="button"
          onClick={onClose}
          className="
            rounded-xl
            bg-orange-500
            px-5
            py-2.5
            text-xs
            font-semibold
            text-black
            shadow-[0_0_20px_rgba(242,106,19,0.12)]
            transition-all
            duration-200
            hover:bg-orange-400
            hover:shadow-[0_0_25px_rgba(242,106,19,0.2)]
            active:scale-95
          "
        >
          Done
        </button>
      </div>
    </aside>
  );
}

export default NodeEditor;