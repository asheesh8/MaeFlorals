export type Bloom = {
  id: string;
  label: string;
  url: string;
  /** mesh-name fragments to keep; omit to keep the whole model */
  keep?: string[];
};

export const blooms: Bloom[] = [
  { id: "anemone", label: "Anemone", url: "/models/anemone.glb", keep: ["cylinder_anemone"] },
  { id: "ranunculus", label: "Ranunculus", url: "/models/garden-pack.glb", keep: ["ranunculus"] },
  { id: "tulip", label: "Tulip", url: "/models/garden-pack.glb", keep: ["tulip"] },
  { id: "narcissus", label: "Narcissus", url: "/models/garden-pack.glb", keep: ["narcissus"] },
];
