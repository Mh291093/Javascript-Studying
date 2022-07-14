var allitems = document.querySelectorAll(".list li");  // Data in Array []
var content = document.querySelector("#content");
var btn = document.querySelector("#addToCart");
var totlaPrice = 0;

allitems.forEach(function(item) {            // seprate items to single item
    item.onclick = function() {
        totlaPrice += parseInt(item.getAttribute("price"));  // parseInt convert string to number
        content.innerHTML += item.textContent + " ";

        if(content.innerHTML != " ") {
            btn.style.display = "block";
        }
    };
});

btn.onclick = function() {
    console.log(totlaPrice);
}