let num1 = document.querySelector('.num-1')
let num2 = document.querySelector('.num-2')
let choice= document.querySelector('.choice')
let choice1= document.querySelector('.choice1 ')
let choice2= document.querySelector('.choice2 ')
let choice3= document.querySelector('.choice3 ')
let choice4= document.querySelector('.choice4 ')
let choice5= document.querySelector('.choice5 ')
let answer = document.querySelector('.answer')

function add(){
    let x = Math.floor(Math.random()*10)
    num1.innerHTML= x
    let y = Math.floor(Math.random()*10)
    num2.innerHTML= y
    z = x + y
    let a = z - 1
    let b = z - 3
    let c = z + 2
    let d = z + 1
    let array = [a , b, c, d, z]
    for(i = array.length; i--;){
        let arr = []
        let k = Math.floor(Math,random()*i)
        array.remove[k]
        arr.push[k]
    }
    choice1.innerHTML = array[0]
    choice2.innerHTML = array[1]
    choice3.innerHTML = array[2]
    choice4.innerHTML = array[3]
    choice5.innerHTML = array[4]
    if(choice1.innerHTML == z){
        answer.innerHTML = choice1.innerHTML
    }else{
        answer.innerHTML = "wrong"
    }
    if(choice2.innerHTML == z){
        answer.innerHTML = choice2.innerHTML
    }else{
        answer.innerHTML = "wrong"
    }
    if(choice3.innerHTML == z){
        answer.innerHTML = choice3.innerHTML
    }else{
        answer.innerHTML = "wrong"
    }
    if(choice4.innerHTML == z){
        answer.innerHTML = choice4.innerHTML
    }else{
        answer.innerHTML = "wrong"
    }
    if(choice5.innerHTML == z){
        answer.innerHTML = choice5.innerHTML
    }else{
        answer.innerHTML = "wrong"
    }
    console.log(arr)
    return z
   
}





choice1.addEventListener('click', () => {
    add()
})

choice2.addEventListener('click', () => {
    add()
})

choice3.addEventListener('click', () => {
     add()
})

choice4.addEventListener('click', () => {
     add()
})

choice5.addEventListener('click', () => {
    add()
})


