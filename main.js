console.log("test")
const carModel = document.getElementById("model")
const carImage = document.getElementById("img")
const carsDetails= document.getElementById("cars-details")
const form = document.getElementById("subscribe-form")

const request = async () => {
    let req = await fetch("http://localhost:3000/Cars")
    let res = await req.json()
    res.forEach((car) => {
        let div = document.createElement("div")
        div.className = "car-card"
        let img = document.createElement("img")
        img.src = car.image
        console.log(car.image)
        div.append(img)
        let h2 = document.createElement("h2")
        h2.innerText = car.brand
        div.append(h2)
        let h3 = document.createElement("h3")
        h2.innerText = car.model
        div.append(h3)
        carsDetails.append(div)
        const carRating = document.createElement("h2")
        const carMpg = document.createElement("h2")
        const carDescription = document.createElement("h2")
        const button = document.createElement("button")
        const priceText = document.createElement('h2')
        
        
        img.addEventListener('click', () => {
            button.innerText = 'Price:'
            button.addEventListener('click', ()  => {
                priceText.innerText = car.price
                console.log(div.children)
                if (div.children[7]) {
                    div.removeChild(priceText)
                } else {
                    div.appendChild(priceText)
                }
            })
            if (div.children[5]){
                div.removeChild(carRating)
                div.removeChild(carMpg)
                div.removeChild(carDescription)
                div.removeChild(priceText)
                div.removeChild(button)
                
            }else{
                div.appendChild(carRating)
                div.appendChild(carMpg)
                div.appendChild(carDescription)
                div.appendChild(priceText)
                div.appendChild(button)
                
            }
            
            carRating.innerText = car.rating_average
            carMpg.innerText = car.MPG
            carDescription.innerText = car.description

        })
        

    })
}

form.addEventListener('submit', (e) => {
        e.preventDefault()
        alert("Thanks, hope I pass!!!")
})
request() 

