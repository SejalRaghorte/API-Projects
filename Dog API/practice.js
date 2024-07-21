// //cat api
// let btn = document.querySelector("button");
// let url = "https://catfact.ninja/fact";

// btn.addEventListener("click", async() => {
    
//    let fact = await getfacts();
// //    console.log(fact);
   
//    let p = document.querySelector("p");
//    p.innerText = fact;
// });

// async function getfacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("Error :",e);
//     }
// }


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
