// function localstorage(){
//     console.log("object");
//     const name = "Hi i am jon"
//     localStorage.setItem("details",name)
// }

const localstorage =() => {
    
    // const name = "Hi iam luffy";
    // localStorage.setItem("details", name)
    const person = {
        name: "jon",
        age: 10,
        detais:"i am jin"
    }
    const convertString = JSON.stringify(person)
    // const backToObject = JSON.parse(convertString)
    // console.log(backToObject);
    localStorage.setItem("jon",convertString)
} 

const data = localStorage.getItem("jon")
const convert = JSON.parse(data)
console.log(convert);