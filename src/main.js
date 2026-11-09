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

// tuyaktreli qanaky2
document.querySelectorAll(".qanak2 button").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.qanak2;
        const number = document.getElementById(id);
        let value = Number(number.value) || 0;
        if (button.classList.contains("plus2")) {
            value++;
        } else if (value > 0) {
            value--;
        }
        number.value = value;
    });
});

//gisheranoc
document.querySelectorAll(".options button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".options button")
            .forEach(btn => btn.classList.remove("yntrvac"));
        button.classList.add("yntrvac");
    });
});

//senyakner
    document.querySelectorAll(".options2 button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".options2 button")
                .forEach(btn => btn.classList.remove("yntrvac2"));
            button.classList.add("yntrvac2");
        });
    });