
    const btn = document.createElement("div")
    btn.innerHTML = `
            <button id="1" class="btn active hover:bg-green-600">Click here</button>
            <button id="2" class="btn hover:bg-red-300">Click here</button>
            <button id="3" class="btn hover:bg-red-100">Click here</button>
            <button id="4" class="btn hover:bg-red-400">Click here</button>
            <button id="5" class="btn hover:bg-red-500">Click here</button>
            <button id="6" class="btn hover:bg-gray-300">Click here</button>
            <button id="7" class="btn hover:bg-gray-400">Click here</button>
            <button id="8" class="btn hover:bg-gray-500">Click here</button>
    `
    document.getElementById("btn-container").appendChild(btn)



const btnContainer = document.getElementById("btn-container")

const buttons =btnContainer.getElementsByClassName("btn")

for(const button of buttons){
    button.addEventListener("click",function(){
        const addActive = document.querySelector(".active")

        if(addActive){
            addActive.classList.remove("active")
        }

        this.classList.add("active")
    })
}






