/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
var id = 1
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
appHeading.style.fontSize =  "30px"
appHeading.style.fontWeight =  "bold"
main.style.fontFamily="Montserrat"
let headerDiv = document.createElement("div")
let headerOne = document.createElement("h2")
headerOne.innerHTML = "Sizzle your Life"
headerOne.style.fontSize =  "30px"
headerOne.style.marginTop =  "50px"
headerDiv.appendChild(headerOne)

let headerTwo = document.createElement("h1")
headerTwo.innerHTML = "Make a Card"
headerDiv.appendChild(headerTwo)
headerTwo.style.fontSize =  "50px"
headerTwo.style.marginTop =  "20px"
headerTwo.style.fontWeight =  "bold"
headerDiv.style.marginTop = "30px"
headerDiv.style.marginBottom = "80px"
leftSide.appendChild(headerDiv)


const displayImage = (text) =>{

  let buttonImage = document.createElement("img")
  buttonImage.style.height = "150px"
  buttonImage.style.width = "150px"
  //buttonImage.style.zIndex = 4
  //buttonImage.style.position = "absolute"
  //buttonImage.style.top = "60px"
  //buttonImage.style.left = "80px"

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
  //rightBody.style.border = "red solid"
  rightBody.appendChild(buttonImage)
}

let buttonList = ["Polaroid", "TV", "Traitor" ,"Fall Guy", "Radio"]
let buttonsGroup1 = document.createElement("div")

const buttonCreate = (text) =>{
  let buttons= document.createElement("button")
  buttons.addEventListener("click",()=>{displayImage(text)})
  buttons.style.padding = "10px"
  buttons.style.border = "black solid"
  buttons.style.borderRadius="10px"
  buttons.style.backgroundColor = "white"
  buttons.style.margin = "10px"
  buttons.style.boxShadow = "0px 2px"
  buttons.innerHTML = text
  return buttons
}

buttonList.map((buttonName)=>{
  buttonsGroup1.appendChild(buttonCreate(buttonName))
})
leftSide.appendChild(buttonsGroup1)

let buttonsGroup2 = document.createElement("div")
let blingName = document.createElement("input")
blingName.oninput=function(event) {rightHeading.textContent = event.target.value}
buttonsGroup2.style.margin="10px"
//blingName.addEventListener("change", (event)=>{rightHeading.textContent = event.target.value})
blingName.setAttribute("type","text")
blingName.setAttribute("placeholder","Name your bling!")
blingName.style.backgroundColor="black"
blingName.style.borderRadius="10px"
blingName.style.border = "black solid"
blingName.style.color = "white"
blingName.style.padding = "10px"
buttonsGroup2.appendChild(blingName)

let bgColors = ["Gold","Snow","DodgerBlue","LightSalmon", "LightCoral"]
let bgColor = document.createElement("select")
bgColor.onchange=function(event) {
  document.querySelector("body").style.backgroundColor = event.target.value
}
bgColor.style.backgroundColor="black"
bgColor.style.color = "white"
bgColor.style.height = "35px"
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
isNope.style.marginLeft="10px"
isNope.setAttribute("value","Nope")
isNopeLabel.innerHTML = "Nope"
radioDiv.appendChild(isNope)
radioDiv.appendChild(isNopeLabel)
buttonsGroup2.appendChild(radioDiv)
radioDiv.style.border = "solid black"
radioDiv.style.margin="10px"
radioDiv.style.padding="5px"
radioDiv.style.borderRadius="10px"
radioDiv.style.backgroundColor="black"
radioDiv.style.color="white"
leftSide.appendChild(buttonsGroup2)

let blobImage = document.createElement("img")
blobImage.src = "assets/images/blob.png"
blobImage.style.height = "350px"
blobImage.style.width = "350px"
blobImage.style.zIndex = 1
//blobImage.style.position="relative"
//blobImage.style.top ="0"
//blobImage.style.left = "0"
//blobImage.style.bottom = "150px"
//blobImage.style.bottom = "130px"



const handleRadio = (event) => {
  //console.log(event.target)
  if(event.target.value == "Blob"){
    console.log(event.target)
    isNope.checked=false
    event.target.checked = true
    //rightBody.appendChild(blobImage)
    //rightBody.style.backgroundImage = "url(`assets/images/blob.png`)"
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


const showCard = (text,img) => {
let cardDiv = document.createElement("div")
cardDiv.setAttribute("id","id"+id.toString())
id = id+1
let cardHeading = document.createElement("h1")
let cardbodyDiv = document.createElement("div")
let cardBody = document.createElement("img")
let cancel = document.createElement("img")
cancel.style.position="relative"
cancel.style.right = "-150px"
cancel.style.top = "-10px"
cancel.src = "assets/images/icon_delete.png"
cancel.style.height = "35px"
cancel.style.height = "35px"
cardDiv.appendChild(cancel)
cancel.addEventListener("click", () => {deleteCard(cardDiv.id)})

cardHeading.innerHTML = text
cardHeading.style.fontSize = "50px"
cardHeading.style.fontWeight = "bold"
//cardHeading.style.marginBottom = "5px"
cardHeading.style.marginTop = "-50px"
cardHeading.style.marginBottom = "20px"


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
cardDiv.style.marginTop = "30px"
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
//cameraDiv.style.border = "solid black"
cameraDiv.style.borderRadius='10px'
cameraDiv.appendChild(cameraImg)
leftSide.appendChild(cameraDiv)

insideMainDiv.appendChild(leftSide)
//leftSide.style.border="black solid"
//insideMainDiv.style.border = "red solid"


insideMainDiv.style.display = "flex"
//insideMainDiv.style.justifyContent = "center"
leftSide.style.marginLeft="200px"
rightSide.style.marginLeft="400px"
rightSide.style.marginTop="100px"
let rightHeading = document.createElement("h1")
rightHeading.style.fontWeight = "bold"
rightHeading.style.fontSize = "40px"
rightHeading.style.marginTop = "-40px"
rightHeading.style.padding = "20px"


rightHeading.style.textAlign = "center"


let rightBody = document.createElement("div")
rightBody.style.marginTop = "30px"
//rightBody.style.position = "relative"
//rightBody.style.top = "0px"
//rightBody.style.left = "0px"

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


