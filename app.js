function getPin(){
    const pin=Math.round(Math.random()*10000)
    const pinString=pin+''
    if(pinString.length==4){
        return pinString
    }
    else{
        return getPin()
    }
}
function generatePin(){
    const input=document.getElementById("input-info")
    input.value=getPin()
}
document.getElementById("keypad").addEventListener("click",function(event){
const number=event.target.innerText
console.log(number);
const calculaterField=document.getElementById("calculatore-field")

if(isNaN(number)){
    if(number=="C"){
        calculaterField.value=''
    }
}
else{
    const previousNumber=calculaterField.value
    calculaterField.value=previousNumber+number
}
})

function tryCheck(){
    let tryValue=document.getElementById("try-Value").innerText
    let generateValue=document.getElementById("generatePin").value
    let calculateValue=document.getElementById("calculatore-field").value
    document.getElementById("submit").addEventListener("click",function(){
        tryValue=3
    })
    if(generateValue!=calculateValue){
        if(tryValue>0){
            document.getElementById("try-Value").innerText=parseInt(tryValue)-1
            document.getElementById("negative-text").style.display="block"
            document.getElementById("positive-text").style.display="none"
        }
    }
    else if (generateValue==calculateValue) {
        document.getElementById("try-Value").innerText=3
        document.getElementById("negative-text").style.display="none"
        document.getElementById("positive-text").style.display="block"
    }
    if (tryValue==1) {
    document.getElementById("submit").setAttribute("disabled",true)
    }
}
document.getElementById("submit").addEventListener("click",function(){
    tryCheck()
})





