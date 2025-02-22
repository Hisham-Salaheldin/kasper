const bdy = document.querySelector(".body");
const main = document.querySelector(".main-body");
const headr = document.querySelector(".header");
const menu = document.querySelector(".nav-menu");
const togl = document.querySelector(".toggle-menu");
const searchBar = document.querySelector(".search-container");
const searchButton = document.querySelector(".search-button");
const lnk = document.querySelectorAll(".link");
const tabBtn = document.querySelectorAll(".tab-btn");
const tabNav = document.querySelector(".tabsNav");
const allTabs = document.querySelectorAll(".images-box");

$(window).on("scroll", function(){
    if($(window).scrollTop() > 100){
        headr.classList.add("header-active");
    }
    else{
        headr.classList.remove("header-active");
    }
});

const toggleMenu = (nav , toggleBtn)=>{
        toggleBtn.addEventListener("click", ()=>{
            nav.classList.toggle("show-menu");
        });
        main.addEventListener("click", ()=>{
            nav.classList.remove("show-menu"); //close window
        });
};

const toggleSearch = (search, button)=>{

    button.addEventListener("click", () => {
        search.classList.toggle("show-search");
    });
    main.addEventListener("click", ()=>{
        search.classList.remove("show-search"); //close search bar
    });
};

const activeLink = (nav, link)=>{
    link.forEach(function(a){
        a.addEventListener("click", ()=>{
           nav.querySelector(".active").classList.remove("active");
           a.classList.add("active");
           nav.classList.remove("show-menu"); //close nav when click on it
           });
    });
 };

const activeTab = (tab)=>{
    tab.forEach(acTab =>{
        acTab.addEventListener("click", (event)=>{
            tabNav.querySelector(".tab-active").classList.remove("tab-active");
            acTab.classList.add("tab-active");
            const filterValue = event.target.getAttribute("data-filter");
            allTabs.forEach((item) =>{
                if(item.classList.contains(filterValue) || filterValue === "all" ){
                    item.classList.remove("first-active");
                    item.classList.remove("item-hide");
                    item.classList.add("item-show");
                }
                else{
                    item.classList.remove("item-show");
                    item.classList.add("item-hide");
                }
            });    
        });
    });
};



toggleMenu(menu,togl);
toggleSearch(searchBar,searchButton);
activeLink(menu,lnk);
activeTab(tabBtn);

