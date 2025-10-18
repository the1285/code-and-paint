export type Coordinate = [number, number];
export type Size = [number, number];
export type Style = string | CanvasGradient;
type Numeric = number | string;

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

  export function beginPath() {
    ctx.beginPath();
  }

  export function drawRect(coordinate: Coordinate, size: Size) {
    ctx.rect(coordinate[0], coordinate[1], size[0], size[1]);
  }

  export function drawEllipse(center: Coordinate, size: Size) {
    const radiusX = size[0] / 2;
    const radiusY = size[1] / 2;
    ctx.ellipse(center[0], center[1], radiusX, radiusY, 0, 0, Math.PI * 2);
  }

  export function setFillStyle(style: Style) {
    ctx.fillStyle = style;
  }

  export function setStrokeStyle(style: Style) {
    ctx.strokeStyle = style;
  }

  export function setLineWidth(width: number) {
    ctx.lineWidth = width;
  }

  export function setLineDash(pattern: number[] | unknown) {
    ctx.setLineDash(Array.isArray(pattern) ? (pattern as number[]) : []);
  }

  export function setLineCap(cap: CanvasLineCap) {
    ctx.lineCap = cap;
  }

  export function setLineJoin(join: CanvasLineJoin) {
    ctx.lineJoin = join;
  }

  export function translate(offset: Coordinate | number[] | unknown) {
    const [x, y] = Array.isArray(offset) ? offset : [0, 0];
    ctx.translate(Number(x) || 0, Number(y) || 0);
  }

  export function setFont(size: number, family: string) {
    ctx.font = `${size}px ${family}`;
  }

  export function drawText(
    text: string,
    position: Coordinate | number[] | unknown
  ) {
    const [x, y] = Array.isArray(position) ? position : [0, 0];
    ctx.fillText(text, Number(x) || 0, Number(y) || 0);
  }

  export function createLinearGradient(
    angleDegrees: number,
    startColour: string,
    endColour: string
  ): CanvasGradient {
    const radians = (angleDegrees * Math.PI) / 180;
    const halfDiagonal =
      Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) /
      2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const deltaX = Math.cos(radians) * halfDiagonal;
    const deltaY = Math.sin(radians) * halfDiagonal;

    const gradient = ctx.createLinearGradient(
      centerX - deltaX,
      centerY - deltaY,
      centerX + deltaX,
      centerY + deltaY
    );
    gradient.addColorStop(0, startColour);
    gradient.addColorStop(1, endColour);

    return gradient;
  }

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  function toNumber(value: Numeric) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  export function colorFromRgb(r: Numeric, g: Numeric, b: Numeric): string {
    const red = clamp(Math.round(toNumber(r)), 0, 255);
    const green = clamp(Math.round(toNumber(g)), 0, 255);
    const blue = clamp(Math.round(toNumber(b)), 0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  export function colorFromHsl(h: Numeric, s: Numeric, l: Numeric): string {
    const hue = toNumber(h);
    const saturation = clamp(toNumber(s), 0, 100);
    const lightness = clamp(toNumber(l), 0, 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}
