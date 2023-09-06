const USER_NAME = document.querySelector(".user__name");
const USER_EMAIL = document.querySelector(".user__email");
const USER_IMAGE = document.querySelector(".user__image");
const USER_INFO = document.querySelector(".user__info");
const btnInfo = document.querySelectorAll(".container__btn .btn");
const SHOW_USER = document.querySelector(".show__user");
const baseUrl = "https://randomuser.me/api/";
let results = []


function getUserData() {
    USER_INFO.textContent = "Loading ....";
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", baseUrl);
    xmlHttp.send();
    xmlHttp.onload = () =>{
    let convertToJason = JSON.parse(xmlHttp.responseText);
    results = convertToJason.results[0];
    displayData(USER_NAME, results.name.title + " " +  results.name.first + " " + results.name.last);
    displayData(USER_EMAIL, results.email);
    displayData(USER_IMAGE,USER_IMAGE.src = results.picture.large);
    USER_INFO.textContent = "";
};
}

getUserData()

function displayData(element, data) {
    element.innerHTML = data;
};


btnInfo.forEach((item) =>{
    item.addEventListener("click", function(){
        if (this.dataset.info == "phone") {
            USER_INFO.textContent = results[this.dataset.info]
        }else{
            USER_INFO.textContent = "country: " + " " +  results.location.country + " | City:" + " " + results.location.city;
            
        }
    });
});


SHOW_USER.addEventListener("click", getUserData)