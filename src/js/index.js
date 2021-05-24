import "../styles/style.sass";
import { App } from "./app";
import { ProductSlider } from "./product-slider";

const app = new App();
const prodcutSlider = new ProductSlider(document.querySelector(".container"));
