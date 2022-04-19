const sports = {
    soccer: "Christiana Ronaldo",
    basket_ball: "Michael Jordan",
    golf: "Tiger Woods",
    tenis: "Federer Nadal",
    runner: "Usain Bolt"
};
document.getElementById('key').addEventListener("change", function () {
    document.getElementById('value').selectedIndex = document.getElementById('key').selectedIndex;
}, false);
document.getElementById('value').addEventListener("change", function () {
    document.getElementById('key').selectedIndex = document.getElementById('value').selectedIndex;
}, false);

const render = (ele, tmp) => {
    ele.innerHTML = tmp;
}

const createDropDown = () => {
    const keyele = document.getElementById("key");
    const valele = document.getElementById("value");

    let keystmp  ="";
    let valstmp = "";
    Object.keys(sports).forEach(key => {
        keystmp += `<option value="${key}">${key}</option>`;
        valstmp += `<option value="${key}">${sports[key]}</option>`;
    });
    render(keyele, keystmp);
    render(valele, valstmp);
}

createDropDown()


