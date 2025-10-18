export type Coordinate = [number, number];

export namespace CanvasBridge {
  // ─── Storage ─────────────────────────────────────────────────────────

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  let expanded = true;

  // ─── Constructor ─────────────────────────────────────────────────────

  export function initializeCanvasParameters() {
    canvas = document.getElementById("output-canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d")!;
    setupCanvasSize();
    setupEvents();
    canvas.classList.add("initialized");
  }

  // ─── Setup Events ────────────────────────────────────────────────────

  function setupEvents() {
    canvas.addEventListener("click", expandOnDeExpandCanvas);
  }

  // ─── Expand Or De Expand ─────────────────────────────────────────────

  function expandOnDeExpandCanvas() {
    const name = "minimized";
    if (canvas.classList.contains(name)) {
      canvas.classList.remove(name);
    } else {
      canvas.classList.add(name);
    }
  }

  // ─── Setup Canvas Size ───────────────────────────────────────────────

  export function setupCanvasSize() {
    const ratio = window.devicePixelRatio || 1;
    const { width, height } = canvas.getBoundingClientRect();

    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  // ─── Get Reading For New Drawing ─────────────────────────────────────

  export function setupForRedraw() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = canvas.width;
  }

  // ─── Line To ─────────────────────────────────────────────────────────

  export function moveTo(coordinate: Coordinate) {
    ctx.moveTo(coordinate[0], coordinate[1]);
  }

  export function lineTo(coordinate: Coordinate) {
    ctx.lineTo(coordinate[0], coordinate[1]);
  }

  export function fill() {
    ctx.fill();
  }

  export function stroke() {
    ctx.stroke();
  }
}
