const products = [
    {
        name: "iphone 12",
        price: 200,
        description: "some deatails about iphone"
    },


    {
        name: "mac book pro",
        price: 400,
        description: "some deatails about macbook"
    },

    {
        name: "beats headphone",
        price: 500,
        description: "some deatails about iphone"
    }


];


const wrapper = document.querySelector(".items-wrapper")
const input = document.querySelector("#search")
let output = ""

products.forEach( product => {

    const name = product.name;
    const price = product.price;

        let markup = `
        <div class="item">
            <h1 class="title">${name}</h1>
            <p class="price">${price}</p>
        </div>
        `;

        output += markup;
    wrapper.innerHTML = output;
       
});



input.addEventListener("keyup",() => {
    
    const search = input.value;

    const item = products.find( product => product.name.includes(search))
   

    if(item) {

        const name = item.name;
     const price = item.price;

        let markup = `
        <div class="item">
            <h1 class="title">${name}</h1>
            <p class="price">${price}</p>
        </div>
        `;
     
       wrapper.innerHTML = markup;


    }

      
})


// const numbers = [1, 2, 3, 4];
// let sum = 0;


// numbers.forEach (number => {

//     sum +=number;
//     console.log("number:", number,  "sum:", sum)
// })