import { newRenderer } from "./renderer.js"
import { rectangle} from "./shapes/rectangle.js";

const shape: Shape = rectangle(2, 3)
const renderer = newRenderer(shape)
renderer.draw();