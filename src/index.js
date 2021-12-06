console.log('%c HI', 'color: firebrick')
const imageUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";


document.addEventListener('DOMContentLoaded', () => {
    //Fetching Images
    fetching(imageUrl)
    //Fetching Breeds
    fetching(breedUrl)
})
function fetching(link) {
    let funct;
    link === imageUrl ? funct = appendImg : funct = breedAdd;

    fetch(link)
    .then(resp => resp.json())
    .then(data => funct(data))
}
function appendImg(data) {
    data.message.forEach(img => {
        const image = document.createElement("img")
        image.src = img;
        document.querySelector("#dog-image-container").appendChild(image)
    });
}    


function breedAdd(data){
    const list = document.querySelector("#dog-breeds")
    for (const breed in data.message){
        const li = document.createElement("li");
        li.textContent = breed;
        list.appendChild(li);
    }
    list.addEventListener("click", (e) => {
        e.target.style.color = "#162abc"
        })
}