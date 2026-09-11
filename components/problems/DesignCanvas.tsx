"use client";

import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
} from "react";

import {
  addEdge,
  Background,
  Controls,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";

import {
  Box,
  Layers3,
  Plus,
  Trash2,
  X,
} from "lucide-react";

import { NodeEditor } from "./NodeEditor";

/* =========================================================
   TYPES
   ========================================================= */

export type RelationshipType =
  | "association"
  | "inheritance"
  | "composition"
  | "aggregation"
  | "dependency";

export type LLDNodeData = {
  title: string;
  type: "class" | "interface";
  attributes: string[];
  methods: string[];
  [key: string]: unknown;
};

export type LLDNode = Node<LLDNodeData>;

export type DesignSnapshot = {
  nodes: LLDNode[];
  edges: Edge[];
};

type DesignCanvasProps = {
  onValidityChange?: (isValid: boolean) => void;
  onDesignChange?: (design: DesignSnapshot) => void;
};

/* =========================================================
   RELATIONSHIP CONFIG
   ========================================================= */

const relationshipConfig: Record<
  RelationshipType,
  {
    label: string;
    stroke: string;
    animated: boolean;
    marker: MarkerType;
  }
> = {
  association: {
    label: "association",
    stroke: "#f97316",
    animated: false,
    marker: MarkerType.ArrowClosed,
  },

  inheritance: {
    label: "extends",
    stroke: "#fb923c",
    animated: false,
    marker: MarkerType.Arrow,
  },

  composition: {
    label: "composition",
    stroke: "#fdba74",
    animated: false,
    marker: MarkerType.ArrowClosed,
  },

  aggregation: {
    label: "aggregation",
    stroke: "#c2410c",
    animated: false,
    marker: MarkerType.Arrow,
  },

  dependency: {
    label: "depends",
    stroke: "#a8a29e",
    animated: true,
    marker: MarkerType.Arrow,
  },
};

/* =========================================================
   NODE CARD
   ========================================================= */

function LLDNodeCard({
  data,
}: NodeProps<LLDNode>) {
  const isInterface = data.type === "interface";

  return (
    <div
      className={[
        "relative min-w-[230px] overflow-visible rounded-xl",
        "border bg-[#0d0805]",
        "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
        "transition-all duration-200",
        isInterface
          ? "border-orange-300/30"
          : "border-orange-500/25",
        "hover:border-orange-400/45",
        "hover:shadow-[0_20px_70px_rgba(249,115,22,0.12)]",
      ].join(" ")}
    >
      {/* Target */}
      <Handle
        type="target"
        position={Position.Top}
        className="!h-3 !w-3 !border-2 !border-[#0d0805] !bg-orange-400 !shadow-[0_0_12px_rgba(249,115,22,0.55)]"
      />

      {/* Header */}
      <div className="border-b border-orange-400/[0.10] px-4 py-3">
        <div className="flex items-center gap-2">
          {isInterface ? (
            <Layers3
              size={14}
              className="text-orange-300"
            />
          ) : (
            <Box
              size={14}
              className="text-orange-400"
            />
          )}

          <span className="text-[9px] font-semibold tracking-[0.18em] text-orange-400/70 uppercase">
            {isInterface ? "Interface" : "Class"}
          </span>
        </div>

        <div className="mt-2 text-sm font-semibold text-[#f2e7df]">
          {data.title || "Untitled"}
        </div>
      </div>

      {/* Attributes */}
      <div className="border-b border-orange-400/[0.08] px-4 py-3">
        <div className="space-y-1.5">
          {data.attributes.length > 0 ? (
            data.attributes.map(
              (attribute, index) => (
                <div
                  key={`${attribute}-${index}`}
                  className="text-[11px] text-[#9c897b]"
                >
                  {attribute}
                </div>
              ),
            )
          ) : (
            <div className="text-[10px] italic text-[#554941]">
              No attributes
            </div>
          )}
        </div>
      </div>

      {/* Methods */}
      <div className="px-4 py-3">
        <div className="space-y-1.5">
          {data.methods.length > 0 ? (
            data.methods.map(
              (method, index) => (
                <div
                  key={`${method}-${index}`}
                  className="text-[11px] text-[#b09b8c]"
                >
                  {method}
                </div>
              ),
            )
          ) : (
            <div className="text-[10px] italic text-[#554941]">
              No methods
            </div>
          )}
        </div>
      </div>

      {/* Source */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-3 !w-3 !border-2 !border-[#0d0805] !bg-orange-400 !shadow-[0_0_12px_rgba(249,115,22,0.55)]"
      />
    </div>
  );
}

const nodeTypes = {
  lld: LLDNodeCard,
};

/* =========================================================
   INITIAL DESIGN
   ========================================================= */

const initialNodes: LLDNode[] = [
  {
    id: "vehicle",
    type: "lld",
    position: {
      x: 80,
      y: 120,
    },
    data: {
      title: "Vehicle",
      type: "class",
      attributes: [
        "- licenseNumber: string",
        "- type: VehicleType",
      ],
      methods: [
        "+ getType()",
        "+ getNumber()",
      ],
    },
  },

  {
    id: "parking-spot",
    type: "lld",
    position: {
      x: 500,
      y: 120,
    },
    data: {
      title: "ParkingSpot",
      type: "class",
      attributes: [
        "- spotNumber: string",
        "- isOccupied: boolean",
      ],
      methods: [
        "+ assignVehicle()",
        "+ removeVehicle()",
      ],
    },
  },
];

const initialEdges: Edge[] = [];

/* =========================================================
   DESIGN CANVAS
   ========================================================= */

export function DesignCanvas({
  onValidityChange,
  onDesignChange,
}: DesignCanvasProps) {
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  const [selectedNodeId, setSelectedNodeId] =
    useState<string | null>(null);

  const [selectedEdgeId, setSelectedEdgeId] =
    useState<string | null>(null);

  const [relationshipType, setRelationshipType] =
    useState<RelationshipType>("association");

  const selectedNode = selectedNodeId
    ? nodes.find(
        (node) => node.id === selectedNodeId,
      )
    : null;

  /* =======================================================
     VALIDATION
     ======================================================= */

  const isValid =
    nodes.length >= 2 &&
    edges.length >= 1;

  /* =======================================================
     SEND DESIGN TO PARENT
     ======================================================= */

  useEffect(() => {
    onValidityChange?.(isValid);
  }, [isValid, onValidityChange]);

  useEffect(() => {
    onDesignChange?.({
      nodes,
      edges,
    });
  }, [nodes, edges, onDesignChange]);

  /* =======================================================
     CONNECTION
     ======================================================= */

  const onConnect = useCallback(
    (connection: Connection) => {
      if (
        !connection.source ||
        !connection.target
      ) {
        return;
      }

      if (
        connection.source ===
        connection.target
      ) {
        return;
      }

      const duplicateExists = edges.some(
        (edge) =>
          edge.source === connection.source &&
          edge.target === connection.target,
      );

      if (duplicateExists) {
        return;
      }

      const config =
        relationshipConfig[
          relationshipType
        ];

      const newEdge: Edge = {
        ...connection,

        id: `edge-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,

        type: "smoothstep",

        label: config.label,

        animated: config.animated,

        markerEnd: {
          type: config.marker,
          color: config.stroke,
        },

        style: {
          stroke: config.stroke,
          strokeWidth: 1.8,
        },

        labelStyle: {
          fill: "#bba99d",
          fontSize: 9,
          fontWeight: 500,
        },

        labelBgStyle: {
          fill: "#0d0805",
          fillOpacity: 0.95,
        },

        labelBgPadding: [5, 3],

        labelBgBorderRadius: 4,
      };

      setEdges((currentEdges) =>
        addEdge(
          newEdge,
          currentEdges,
        ),
      );
    },
    [
      edges,
      relationshipType,
      setEdges,
    ],
  );

  /* =======================================================
     NODE CLICK
     ======================================================= */

  function handleNodeClick(
    event: MouseEvent,
    node: LLDNode,
  ) {
    event.stopPropagation();

    setSelectedNodeId(node.id);
    setSelectedEdgeId(null);
  }

  /* =======================================================
     EDGE CLICK
     ======================================================= */

  function handleEdgeClick(
    event: MouseEvent,
    edge: Edge,
  ) {
    event.stopPropagation();

    setSelectedEdgeId(edge.id);
    setSelectedNodeId(null);
  }

  /* =======================================================
     PANE CLICK
     ======================================================= */

  function handlePaneClick() {
    setSelectedNodeId(null);
    setSelectedEdgeId(null);
  }

  /* =======================================================
     UPDATE NODE
     ======================================================= */

  function updateSelectedNode(
    data: LLDNodeData,
  ) {
    if (!selectedNodeId) {
      return;
    }

    setNodes((currentNodes) =>
      currentNodes.map((node) =>
        node.id === selectedNodeId
          ? {
              ...node,
              data,
            }
          : node,
      ),
    );
  }

  /* =======================================================
     DELETE NODE
     ======================================================= */

  function deleteSelectedNode() {
    if (!selectedNodeId) {
      return;
    }

    setNodes((currentNodes) =>
      currentNodes.filter(
        (node) =>
          node.id !== selectedNodeId,
      ),
    );

    setEdges((currentEdges) =>
      currentEdges.filter(
        (edge) =>
          edge.source !== selectedNodeId &&
          edge.target !== selectedNodeId,
      ),
    );

    setSelectedNodeId(null);
  }

  /* =======================================================
     DELETE EDGE
     ======================================================= */

  function deleteSelectedEdge() {
    if (!selectedEdgeId) {
      return;
    }

    setEdges((currentEdges) =>
      currentEdges.filter(
        (edge) =>
          edge.id !== selectedEdgeId,
      ),
    );

    setSelectedEdgeId(null);
  }

  /* =======================================================
     ADD NODE
     ======================================================= */

  function addNode(
    type: "class" | "interface",
  ) {
    const id = `${type}-${Date.now()}`;

    const classCount = nodes.filter(
      (node) =>
        node.data.type === "class",
    ).length;

    const interfaceCount = nodes.filter(
      (node) =>
        node.data.type === "interface",
    ).length;

    const nodeIndex = nodes.length;

    const column = nodeIndex % 2;

    const row = Math.floor(
      nodeIndex / 2,
    );

    const newNode: LLDNode = {
      id,

      type: "lld",

      position: {
        x: column === 0 ? 80 : 500,
        y: 120 + row * 280,
      },

      data: {
        title:
          type === "class"
            ? `Class${classCount + 1}`
            : `Interface${interfaceCount + 1}`,

        type,

        attributes: [],

        methods: [],
      },
    };

    setNodes((currentNodes) => [
      ...currentNodes,
      newNode,
    ]);

    setSelectedNodeId(id);
    setSelectedEdgeId(null);
  }

  /* =======================================================
     STATUS
     ======================================================= */

  const statusText = (() => {
    if (nodes.length < 2) {
      return "Add at least 2 classes or interfaces";
    }

    if (edges.length === 0) {
      return "Connect at least 2 objects";
    }

    return `${nodes.length} objects · ${edges.length} relationship${
      edges.length === 1
        ? ""
        : "s"
    }`;
  })();

  /* =======================================================
     UI
     ======================================================= */

  return (
    <div className="relative h-[510px] w-full overflow-hidden bg-[#070403]">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[360px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.035] blur-[100px]"
      />

      {/* Toolbar */}
      <div className="absolute left-4 top-4 z-30 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
        <button
          type="button"
          onClick={() => addNode("class")}
          className="flex items-center gap-2 rounded-lg border border-orange-400/15 bg-[#100a07]/95 px-3 py-2 text-[10px] font-medium text-[#c2afa2] shadow-xl backdrop-blur-xl transition-all hover:border-orange-400/35 hover:bg-orange-500/[0.08] hover:text-orange-300"
        >
          <Plus
            size={13}
            className="text-orange-400"
          />
          Class
        </button>

        <button
          type="button"
          onClick={() =>
            addNode("interface")
          }
          className="flex items-center gap-2 rounded-lg border border-orange-400/15 bg-[#100a07]/95 px-3 py-2 text-[10px] font-medium text-[#c2afa2] shadow-xl backdrop-blur-xl transition-all hover:border-orange-400/35 hover:bg-orange-500/[0.08] hover:text-orange-300"
        >
          <Plus
            size={13}
            className="text-orange-400"
          />
          Interface
        </button>

        <div className="mx-1 hidden h-8 w-px bg-orange-400/10 sm:block" />

        <select
          aria-label="Relationship type"
          value={relationshipType}
          onChange={(event) =>
            setRelationshipType(
              event.target
                .value as RelationshipType,
            )
          }
          className="rounded-lg border border-orange-400/15 bg-[#100a07]/95 px-3 py-2 text-[10px] font-medium text-[#c2afa2] shadow-xl outline-none backdrop-blur-xl focus:border-orange-400/35"
        >
          <option value="association">
            Association
          </option>

          <option value="inheritance">
            Inheritance
          </option>

          <option value="composition">
            Composition
          </option>

          <option value="aggregation">
            Aggregation
          </option>

          <option value="dependency">
            Dependency
          </option>
        </select>
      </div>

      {/* Edge delete */}
      {selectedEdgeId && (
        <button
          type="button"
          onClick={deleteSelectedEdge}
          className="absolute right-4 top-4 z-30 flex items-center gap-2 rounded-lg border border-red-400/20 bg-[#120806]/95 px-3 py-2 text-[10px] font-medium text-red-300 shadow-xl backdrop-blur-xl transition-all hover:border-red-400/40 hover:bg-red-500/[0.08]"
        >
          <Trash2 size={13} />
          Delete Relationship
        </button>
      )}

      {/* React Flow */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        onEdgeClick={handleEdgeClick}
        onPaneClick={handlePaneClick}
        fitView
        fitViewOptions={{
          padding: 0.25,
        }}
        minZoom={0.35}
        maxZoom={1.6}
        defaultEdgeOptions={{
          type: "smoothstep",
        }}
        deleteKeyCode={[
          "Backspace",
          "Delete",
        ]}
        proOptions={{
          hideAttribution: true,
        }}
      >
        <Background
          gap={32}
          size={1}
          color="rgba(255,145,60,0.08)"
        />

        <Controls showInteractive={false} />
      </ReactFlow>

      {/* Status */}
      <div
        className={[
          "absolute bottom-4 left-4 z-20",
          "pointer-events-none rounded-lg border px-3 py-2",
          "backdrop-blur-xl",
          isValid
            ? "border-emerald-400/15 bg-emerald-950/30"
            : "border-orange-400/[0.08] bg-[#0d0805]/90",
        ].join(" ")}
      >
        <div className="flex items-center gap-2">
          <span
            className={[
              "h-1.5 w-1.5 rounded-full",
              isValid
                ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
                : "bg-orange-400/70",
            ].join(" ")}
          />

          <p
            className={[
              "text-[9px] tracking-[0.12em] uppercase",
              isValid
                ? "text-emerald-300/80"
                : "text-[#64574e]",
            ].join(" ")}
          >
            {statusText}
          </p>
        </div>
      </div>

      {/* Ready */}
      {isValid && (
        <div className="pointer-events-none absolute bottom-4 right-4 z-20 hidden rounded-lg border border-emerald-400/15 bg-emerald-950/30 px-3 py-2 backdrop-blur-xl sm:block">
          <p className="text-[9px] font-medium tracking-[0.12em] text-emerald-300/80 uppercase">
            Design ready
          </p>
        </div>
      )}

      {/* Editor */}
      {selectedNode && (
        <NodeEditor
          data={selectedNode.data}
          onChange={updateSelectedNode}
          onDelete={deleteSelectedNode}
          onClose={() =>
            setSelectedNodeId(null)
          }
        />
      )}

      {/* Mobile edge close */}
      {selectedEdgeId && (
        <button
          type="button"
          aria-label="Close relationship selection"
          onClick={() =>
            setSelectedEdgeId(null)
          }
          className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/15 bg-[#100a07]/95 text-[#9c897b] backdrop-blur-xl transition hover:border-orange-400/30 hover:text-orange-300 sm:hidden"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}