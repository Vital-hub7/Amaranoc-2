import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'
// tuyaktreli qanaky
document.querySelectorAll(".qanak button").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.qanak;
        const number = document.getElementById(id);

        let value = Number(number.value);

        if (button.classList.contains("plus")) {
            value++;
        } else if (value > 0) {
            value--;
        }

        number.value = value;
    });
});
//

//gisheranoc
document.querySelectorAll(".options button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".options button")
            .forEach(btn => btn.classList.remove("yntrvac"));
        button.classList.add("yntrvac");
    });
});