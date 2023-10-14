let output = document.getElementById('input')

function display(num){
 output.value+=num
}
function calculate(){
    try{
        output.value = eval(output.value)
    }
    catch{
        output.value = 'error....'
    }
}
function clr(){
    output.value=" "
}
function remove(){
    output.value = output.value.slice(0,-1)
}