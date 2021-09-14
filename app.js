/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
var id = 1
let root = document.querySelector("#root");

let main = document.createElement("div")
main.style.fontFamily="Montserrat"
let insideMainDiv = document.createElement("div")
window.onload = function () {
  document.body.appendChild(main);
};


const StyleElements = (
  style = null,
  tagName
) => {
  style !== null && (tagName.style.cssText += style);
};


let leftSide = document.createElement("div")
let rightSide = document.createElement("div")
let appHeading = document.createElement("header")
appHeading.innerHTML = "BLING!"
StyleElements(`text-align:center; margin-top:30px; font-size:30px; font-weight:bold; margin-bottom:10px`,appHeading)
main.appendChild(appHeading)

let headerDiv = document.createElement("div")
let headerOne = document.createElement("h2")
headerOne.innerHTML = "Sizzle your Life"
StyleElements(`margin-top:50px; font-size:30px;`,headerOne)
headerDiv.appendChild(headerOne)

let headerTwo = document.createElement("h1")
headerTwo.innerHTML = "Make a Card"
headerDiv.appendChild(headerTwo)
StyleElements(`font-size:50px; margin-top:20px; font-weight:bold; margin-top:30px; margin-bottom:80px`,headerTwo)
leftSide.appendChild(headerDiv)


const displayImage = (text) =>{
  let buttonImage = document.createElement("img")
  buttonImage.style.height = "100px"
  buttonImage.style.width = "100px"
  buttonImage.style.position = "relative"
  buttonImage.style.bottom = "20px"
  buttonImage.style.left = "40px"
  buttonImage.style.textAlign="center"

  let element = document.querySelector(".rightImageDiv")
  console.log(element.value)
  if (element.hasChildNodes()) {
    console.log(element.childNodes)
    element.removeChild(element.childNodes[0]);
  }
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
  StyleElements(`padding:10px; border:black solid; border-radius:10px; background-color:white; margin:10px; box-shadow:0px 2px;`,buttons)
  buttons.innerHTML = text
  return buttons
}

buttonList.map((buttonName)=>{
  buttonsGroup1.appendChild(buttonCreate(buttonName))
})
leftSide.appendChild(buttonsGroup1)

let buttonsGroup2 = document.createElement("div")
let blingName = document.createElement("input")
blingName.oninput = function(event) {rightHeading.textContent = event.target.value}
buttonsGroup2.style.margin="10px"
blingName.setAttribute("type","text")
blingName.setAttribute("placeholder","Name your bling!")
StyleElements(`background-color:black; border-radius:10px; border:black solid; color:white; padding:10px`,blingName)
buttonsGroup2.appendChild(blingName)

let bgColors = ["Gold","Snow","DodgerBlue","LightSalmon", "LightCoral", ]
let bgColor = document.createElement("select")
bgColor.onchange=function(event) {
  document.querySelector("body").style.backgroundColor = event.target.value
}
StyleElements(`background-color:black; margin-left:10px; color:white; height:35px`,bgColor)


const colors = (text) =>{
  let option = document.createElement("option")
  option.innerHTML = text
  bgColor.add(option)
}

bgColors.map((color)=>{
  colors(color)
})
buttonsGroup2.appendChild(bgColor)

let radioDiv = document.createElement("div");
StyleElements(`width:130px; display:inline; `,radioDiv)
let isBlob = document.createElement("input");
let isBlobLabel = document.createElement("label");
isBlob.setAttribute("type", "radio");
isBlob.setAttribute("value","Blob")
isBlobLabel.innerHTML = "Blob"
isBlobLabel.style.fontSize = "12px"
radioDiv.appendChild(isBlob)
radioDiv.appendChild(isBlobLabel)

let isNope = document.createElement("input");
let isNopeLabel = document.createElement("label");
isNope.setAttribute("type", "radio");
isNope.style.marginLeft="10px"
isNope.setAttribute("value","Nope")
isNopeLabel.innerHTML = "Nope"
isNopeLabel.style.fontSize = "12px"

radioDiv.appendChild(isNope)
radioDiv.appendChild(isNopeLabel)
buttonsGroup2.appendChild(radioDiv)
StyleElements(`border:solid black; margin:10px; padding:5px; border-radius:10px; background-color:black; color:white;`,radioDiv)
leftSide.appendChild(buttonsGroup2)

let blobImage = document.createElement("img")
blobImage.src = "assets/images/blob.png"
StyleElements(`height:350px; width:350px; z-index:1`,blobImage)

const handleRadio = (event) => {
  if(event.target.value == "Blob"){
    console.log(event.target)
    isNope.checked=false
    event.target.checked = true
    rightBody.style.backgroundImage = "url('assets/images/blob.png')"
  }
  else if(event.target.value != "Blob"){
    isBlob.checked = false
    event.target.checked = true
    rightBody.style.backgroundImage = "none"
  }
}

isBlob.addEventListener("click",(event) => {handleRadio(event)})
isNope.addEventListener("click",(event) => {handleRadio(event)})

const deleteCard = (id) => {
  let toDeleteCard = document.querySelector(`#${id}`)
  console.log(toDeleteCard)
  showCardDiv.removeChild(toDeleteCard)
}

const showCard = (text) => {
let cardDiv = document.createElement("div")
cardDiv.setAttribute("id","id"+id.toString())
id = id+1
let cardHeading = document.createElement("h1")
let cardbodyDiv = document.createElement("div")
let cardBody = document.createElement("img")
let cancel = document.createElement("img")
StyleElements(`position:relative; right:-150px; top:-10px; height:35px;`,cancel)
cancel.src = "assets/images/icon_delete.png"
cardDiv.appendChild(cancel)
cancel.addEventListener("click", () => {deleteCard(cardDiv.id)})

cardHeading.innerHTML = text
StyleElements(`font-size:50px; font-weight:bold; margin-top:-40px; margin-bottom:10px`,cardHeading)

cardBody.src = rightBody.children[0].src
cardbodyDiv.appendChild(cardBody)
cardbodyDiv.style.height = "240px"
cardbodyDiv.style.marginTop="-5px"

if(isBlob.checked) {
  cardbodyDiv.style.backgroundImage =  "url('assets/images/blob.png')"
  cardbodyDiv.style.backgroundSize = "cover"


}
cardBody.style.width = "150px"
cardBody.style.height = "150px"

//cardBody.appendChild(rightBody.children[0])
cardDiv.appendChild(cardHeading)
cardDiv.appendChild(cardbodyDiv)
cardDiv.style.border = "black solid"
cardDiv.style.marginRight = "20px"
cardDiv.style.height = "300px"
cardDiv.style.width = "300px"
cardDiv.style.marginBottom = "40px"
//cardDiv.style.position = "relative"
cardDiv.style.backgroundColor = bgColor.value
cardDiv.style.textAlign = "center"
showCardDiv.appendChild(cardDiv)
}


let cameraDiv = document.createElement("div");
let cameraImg = document.createElement("img");
cameraImg.addEventListener("click",()=>{showCard(rightHeading.innerHTML,rightBody.childNodes)})
cameraImg.src = "assets/images/camera.png"
cameraImg.style.height = "30px"
cameraDiv.style.width = "60px"
cameraDiv.style.textAlign='center'
cameraDiv.style.padding='10px'
cameraDiv.style.border = "solid black"
cameraDiv.style.borderRadius='10px'
cameraDiv.style.marginLeft='10px'
cameraDiv.style.boxShadow = "0px 2px"
cameraDiv.appendChild(cameraImg)
leftSide.appendChild(cameraDiv)

insideMainDiv.appendChild(leftSide)
insideMainDiv.style.display = "flex"
leftSide.style.marginLeft="200px"
rightSide.style.marginLeft="400px"

rightSide.style.marginTop="100px"
let rightHeading = document.createElement("h1")
rightHeading.style.fontWeight = "bold"
rightHeading.style.fontSize = "40px"
rightHeading.style.padding = "10px"
rightHeading.style.textAlign = "center"

let rightBody = document.createElement("div")
rightBody.style.paddingTop = "70px"
rightBody.classList.add("rightImageDiv")
rightBody.style.height = "200px"
rightBody.style.width = "200px"
rightBody.style.backgroundSize = "cover"
rightSide.appendChild(rightHeading)
rightSide.appendChild(rightBody)
insideMainDiv.appendChild(rightSide)
main.appendChild(insideMainDiv)

let showCardDiv = document.createElement("div")
showCardDiv.style.display = "flex"
showCardDiv.style.flexDirection = "row"
showCardDiv.style.flexWrap = "wrap"
showCardDiv.style.textAlign = "center"
showCardDiv.style.marginLeft = "200px"
showCardDiv.style.marginRight = "200px"
showCardDiv.style.marginTop = "40px"
main.appendChild(showCardDiv)


