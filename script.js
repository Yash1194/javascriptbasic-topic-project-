var arr = [
    {
        team: "CSK",
        primary: "yellow",
        secondary: "#0018E9"

    },{
        team: "RCB",
        primary: "red",
        secondary: "black"
    },{
        team: "MI",
        primary: "royalblue",
        secondary: "#D1AB3E"
    },{
        team: "KKR",
        primary: "#2E0854",
        secondary: "#B3A123"
    },{
        team: "SRH",
        primary: "#EE7429",
        secondary: "#221F21"
    },{
        team: "DC",
        primary: "darkblue",
        secondary: "#D71921"
    },{
        team: "PBKS",
        primary: "#DCDDDF",
        secondary: "#ED1B24"
    },{ 
        team: "RR",
        primary: "#C3A11F",
        secondary: "#074EA2"
    }
]
var a = Math.floor(Math.random() * arr.length);

console.log(arr[a]);
var btn = document.querySelector("button")
var h1 = document.querySelector("h1")
var body = document.querySelector("body")

btn.addEventListener("click", function(){
    var winner  = arr[Math.floor(Math.random()*arr.length)]
    h1.innerText = winner.team;
    h1.style.backgroundColor = winner.primary;
    body.style.backgroundColor = winner.secondary;
    
})