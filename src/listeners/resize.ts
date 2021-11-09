import { on } from "../utils/events";

const resizeListener = () => on("RESIZE_WINDOW", ({ width, height }: { width: number, height: number }) => {
  figma.ui.resize(width, height)
})

export default resizeListener;