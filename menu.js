
document.addEventListener("DOMContentLoaded", () => {
    const menu = [
        "Ugali with Nyama Choma",
        "Chapati and Ndengu",
        "Mukimo with Fried Fish",
        "Vegetarian Platter",
        "Organic Salads and Fresh Juice"
    ];
    const menuList = document.getElementById("menu-list");
    menu.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        menuList.appendChild(li);
    });
});
