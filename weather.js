const age = 13

const Component = () => { //arrow function
    console.log('Wykonanie funkcji')
    return age > 10 ? name="Big" : name= "Little" //ternary operators

}

Component()

const add = () => { return 2*Math.PI*4}

console.log("Wartosc zmiennej name : " + name)

console.log(age + add())

//OBJECTS

const pet = {
    name: "Tobi",
    age: 12,
    breed: "shih-tzu"
}

const pet2 = {...pet, name:"Wolf"} //kopia obiektu pet, lecz z inna wartoscia zmiennej

console.log(pet)
console.log(pet2)

//ARRAY

const drinks = ["arizona", "water", "coca-cola"]; //tabela z napojami
const drinks2 = [...drinks, "sprite"]; //kopia tabeli z inna wartoscia zmiennej

console.log(drinks)
console.log(drinks2)

//.map and .filter

function eventRaise(){ drinks.map((name) => {
    console.log(name + 1)
})}

// REACT:
// drinks2.map((name) => {
//     return <div> {name} </div>
// })


function eventFilter(){ drinks.filter((name) => {
    console.log(name !== "water") //true false true
})}


//Async , Await , Fetch, Promises

const event = new Promise((resolve, reject) => {
    let film = "Avatar";
    if(film === "Avatar") {
        resolve(film);
    }else{
        reject("Film was not Avatar");
    }
});


event.then((film) => { //gdy warunki sie zgadzaja
    console.log(film)
}).catch((err) => { //
    console.log(err)
}).finally(() => {  // wykonuje sie zawsze
    console.log("Promise done")
})

//const axios = require("axios") // alternatywnie aby dzialalo na htmlu <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// const data = axios.get("https://cat-fact.herokuapp.com/facts")
// data.then((res)=> {console.log(res.data)}).catch((err) => {console.log(err)})

// alternatywa z async, await

const fetchData =  async() => { //zawsze jest to funkcja i czeka(await) az zfetchuje dane, asynchronicznie
    try {
        const data = await axios.get("https://cat-fact.herokuapp.com/facts")
        console.log(data.data)
    } catch(err) {
        console.log(err)
    }
}


fetchData();


setTimeout(() => {
    eventFilter()
    eventRaise()
},5000);