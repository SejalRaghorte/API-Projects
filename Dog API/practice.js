
//dog api
let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async() => {
    let img = await getImg();

    let image = document.querySelector("#result");
    image.setAttribute("src",img);
    image.style.height = "400px";
    image.style.weight = "400px";

});

async function getImg(){
    let res = await axios.get(url);
    return res.data.message;
}
