// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page

const { json } = require("body-parser")
const { object } = require("webidl-conversions")

const rating = document.querySelector("form")

rating.addEventListener("submit", async (e)=>{
    e.preventDefault()


const rateData = new rating(rate)
const reqBody = ratingSchema.ratingEntries(rateData)

const response = await fetch("/add/rating",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body:json.Stringify(reqBody)
})

const data = await response.json()

console.log(data)
window.location.href = "/ratings"

})