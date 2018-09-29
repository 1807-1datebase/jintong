window.onload=function () {
    let par = document.querySelectorAll(".Na li");
    let son = document.querySelectorAll(".Nmast .Nmaster");
    console.log(par, son);
    for (let i = 0; i < par.length; i++) {
        par[i].onclick = function () {
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
                par[j].classList.remove("active");
            }
            son[i].style.display = "block";
            par[i].classList.add("active");
        }
    }
}