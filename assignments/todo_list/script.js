
var createlist = document.getElementsByClassName("todos")[0];
var buttonclick = document.getElementsByTagName("button")[0];
var input = document.getElementsByTagName("input")[0];
var count = 0;
buttonclick.addEventListener("click", () => {
    var t = input.value;
    var p = document.createElement("p");
    p.setAttribute("key", count);
    p.textContent = t;
    p.addEventListener("click", function() {deleteEle(this)}, false)
    createlist.appendChild(p);
    count += 1;

})
function deleteEle(elem) {
    var element = elem;
    element.remove();
}
