let btn = document.querySelector("button");
let url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", async () => {
    let joke = await getjoke();
    // console.log(joke);

    let p = document.querySelector("p");
    p.innerText = joke;
});

async function getjoke() {
    let config = {headers: {Accept : "application/json"}};
    let dadjoke =await axios.get(url, config);
    return dadjoke.data.joke;
};