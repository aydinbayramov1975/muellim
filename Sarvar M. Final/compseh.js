let items = document.querySelectorAll(".list-group-item")

items.forEach(function (item) {
    item.addEventListener("click", function (e) {
        items.forEach(function(k){
            k.classList.remove("active")
        })
e.target.classList.add("active")
    })
})

