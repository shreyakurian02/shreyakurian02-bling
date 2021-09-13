/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");

let main = document.createElement("div")
let insideMainDiv = document.createElement("div")

window.onload = function () {
  document.body.appendChild(main);
};


let leftSide = document.createElement("div")
let rightSide = document.createElement("div")
let appHeading = document.createElement("header")
appHeading.innerHTML = "BLING!"
main.appendChild(appHeading)
appHeading.style.textAlign =  "center"
appHeading.style.marginTop =  "30px"

let headerDiv = document.createElement("div")
let headerOne = document.createElement("h2")
headerOne.innerHTML = "Sizzle your Life"
headerDiv.appendChild(headerOne)

let headerTwo = document.createElement("h1")
headerTwo.innerHTML = "Make a Card"
headerDiv.appendChild(headerTwo)

headerDiv.style.marginTop = "30px"
headerDiv.style.marginLeft = "80px"
leftSide.appendChild(headerDiv)


const displayImage = (text) =>{

  let buttonImage = document.createElement("img")
  buttonImage.style.height = "200px"
  let element = document.querySelector(".rightImageDiv")




  if (element.hasChildNodes()) {
    element.removeChild(element.childNodes[0]);
  }

  buttonImage.style.width = "200px"
  //if()

  switch(text){
    case "Polaroid" : buttonImage.src = "assets/images/polaroid.png";break;
    case "TV" : buttonImage.src = "assets/images/tv.png";break;
    case "Fall Guy" : buttonImage.src = "assets/images/fall-guy-01.png";break;
    case "Traitor" : buttonImage.src = "assets/images/among-us.png";break;
    case "Radio" : buttonImage.src = "assets/images/radio-02.png";break;
  }

  rightBody.appendChild(buttonImage)
}

let buttonList = ["Polaroid", "TV", "Traitor" ,"Fall Guy", "Radio"]
let buttonsGroup1 = document.createElement("div")

const buttonCreate = (text) =>{
  let buttons= document.createElement("button")
  buttons.addEventListener("click",()=>{displayImage(text)})
  buttons.innerHTML = text
  return buttons
}

buttonList.map((buttonName)=>{
  console.log(buttonCreate(buttonName))
  buttonsGroup1.appendChild(buttonCreate(buttonName))
})
leftSide.appendChild(buttonsGroup1)

let buttonsGroup2 = document.createElement("div")
let blingName = document.createElement("input")
blingName.oninput=function(event) {rightHeading.textContent = event.target.value}

//blingName.addEventListener("change", (event)=>{rightHeading.textContent = event.target.value})
blingName.setAttribute("type","text")
blingName.setAttribute("placeholder","Name your bling!")
buttonsGroup2.appendChild(blingName)

let bgColors = ["Gold","Snow","DodgerBlue","LightSalmon", "LightCoral"]
let bgColor = document.createElement("select")
bgColor.onchange=function(event) {
  document.querySelector("body").style.backgroundColor = event.target.value
}

const colors = (text) =>{
  let option = document.createElement("option")
  option.innerHTML = text
  bgColor.add(option)

}

bgColors.map((color)=>{
  colors(color)
})
buttonsGroup2.appendChild(bgColor)

let radioDiv = document.createElement("idiv");
let isBlob = document.createElement("input");
let isBlobLabel = document.createElement("label");
isBlob.setAttribute("type", "radio");
isBlob.setAttribute("value","Blob")
isBlobLabel.innerHTML = "Blob"

radioDiv.appendChild(isBlob)
radioDiv.appendChild(isBlobLabel)


let isNope = document.createElement("input");
let isNopeLabel = document.createElement("label");
isNope.setAttribute("type", "radio");
isNope.setAttribute("value","Nope")
isNopeLabel.innerHTML = "Nope"
radioDiv.appendChild(isNope)
radioDiv.appendChild(isNopeLabel)
buttonsGroup2.appendChild(radioDiv)
radioDiv.style.border = "solid black"

leftSide.appendChild(buttonsGroup2)

let cameraDiv = document.createElement("div");
let cameraImg = document.createElement("img");
cameraImg.src = "assets/images/camera.png"
cameraImg.style.height = "30px"
cameraDiv.style.width = "60px"
cameraDiv.style.textAlign='center'
cameraDiv.style.padding='10px'
//cameraDiv.style.border = "solid black"
cameraDiv.style.borderRadius='10px'
cameraDiv.appendChild(cameraImg)
leftSide.appendChild(cameraDiv)

insideMainDiv.appendChild(leftSide)
//leftSide.style.border="black solid"
//insideMainDiv.style.border = "red solid"


insideMainDiv.style.display="flex"
let rightHeading = document.createElement("h1")
let rightBody = document.createElement("div")
rightBody.classList.add("rightImageDiv")
rightSide.appendChild(rightHeading)
rightSide.appendChild(rightBody)
insideMainDiv.appendChild(rightSide)

main.appendChild(insideMainDiv)

