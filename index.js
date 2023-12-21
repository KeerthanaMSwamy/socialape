//whenever we add something using the add to the cart button it must be console loged 

import {intializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref}, push  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-databse.js"


const appSettings= {
    databaseUrl: "https://socialape-711c4-default-rtdb.asia-southeast1.firebasedatabase.app/"
    
}

const app= intializeApp(appSettings)
const database= getDatabase(app)
const moviesInDB= ref(database, "movies")



const inputFieldEl= document.getElementById("input-field")
const addButtonEl= document.getElementById("add-button")

addButtonEl.addEventListener("click",function() {
    let inputValue= inputFieldEl.value

    push(moviesInDB, inputValue)
    console.log('${inputValue} added to database')
})