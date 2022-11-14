console.log("test")
const carBrand = document.getElementById("brand")
const carModel = document.getElementById("model")
const carRating = document.getElementById("rating-avrage")
const carMpg = document.getElementById("MPG")
const carDescription = document.getElementById("description")
const carImage = document.getElementById("img")
const carsDetails= document.getElementById("cars-details")


const request = async () => {
    let req = await fetch("http://localhost:3000/Cars")
    let res = await req.json()
    res.forEach((car) => {
        let img = document.createElement("img")
        // console.log(car)
        img.src = car.image
        console.log(car.image)
        carsDetails.append(img)
        let h2 = document.createElement("h2")
        h2.innerText = car.brand
        carsDetails.append(h2)
        let h3 = document.createElement("h3")
        h3.innerText = car.model
        carsDetails.append(h3)

    })
}
request() 

