const methods = [
  ["sdxl", "SDXL"], ["sdxlcfgpp", "CFG++"], ["co3", "CO3"],
  ["superdiff", "SuperDiff"], ["dos", "DOS"], ["r2f", "R2F"], ["ours", "TILT (Ours)"]
];
const rows = [
  ["geneval_surf", "a photo of a surfboard and a suitcase", "GenEval"],
  ["geneval_pizza", "a photo of a pizza right of a banana", "GenEval"],
  ["compbench_table", "an oval coffee table and a square end table", "Shape"],
  ["compbench_spoon", "a metallic jewelry and a wooden spoon", "Texture"],
  ["compbench_bus", "a green school bus and a red bag", "Color"],
  ["compbench_duck", "The soft yellow duckling swam next to the sleek black swan.", "Complex"]
];
const root = document.querySelector("#qualitative");
for (const [key, prompt, tag] of rows) {
  const block = document.createElement("article"); block.className = "qual-row";
  block.innerHTML = `<div class="prompt"><span>${tag}</span><p>${prompt}</p></div><div class="method-strip"></div>`;
  const strip = block.querySelector(".method-strip");
  for (const [slug, name] of methods) {
    const cell = document.createElement("figure");
    if (slug === "ours") cell.className = "ours";
    const src = `assets/qualitative/${key}_${slug}.jpg`;
    cell.innerHTML = `<a href="${src}" target="_blank" rel="noopener"><img loading="lazy" src="${src}" alt="${name}: ${prompt}"></a><figcaption>${name}</figcaption>`;
    strip.append(cell);
  }
  root.append(block);
}
