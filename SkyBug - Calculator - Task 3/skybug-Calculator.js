const  display = document.querySelector(".view");

const child = document.querySelectorAll("button");

const special_Char = ["%", "/", "=", "*", "+", "-"];

let results = "";



const values = (button_val) => {
    if(button_val === "=" && results !== ""){
        results = eval(results.replace("%", "/100"));
    }

    else if(button_val === "AC"){
        results = "";
    }

    else if(button_val === "DEL"){
        results = results.toString().slice(0, -1);
    }

    else{
        if(results === "" && special_Char.includes(button_val))
        return;
        results += button_val;
    }

    display.value = results;
};



child.forEach(button => {
    button.addEventListener("click", (e) => values(e.target.dataset.value));
});