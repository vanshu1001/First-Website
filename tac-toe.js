var sign=true
function draw(btn_class) {
    var btn_value=document.getElementsByClassName(btn_class)
    if (sign==true) {
        btn_value[0].innerHTML="X"
        btn_value[0].style.color="pink"
        sign=false
    checkwinner()
    }
    else{ 
        btn_value[0].innerHTML="O"
    btn_value[0].style.color="purple"
    sign=true
    checkwinner()
    }
}

function reset(btn_class){
    var value=document.querySelectorAll('.bt')
    document.getElementById('result').innerHTML=""
    sign=true
    for(i=0;i<value.length;i++){
        value[i].innerHTML=""
    }
}
var value_match={}
function checkwinner(){
    var value=document.querySelectorAll('.bt')
    for(i=0;i<value.length;i++){
        value_match[i]=value[i].innerHTML
    }
    set_pattern()
}
function set_pattern(){
    if ((value_match[0]== 'X') && (value_match[1]=='X')&&(value_match[2]=="X")) {
        document.getElementById('result').innerHTML="X is the Winner!"    
    }
    else if ((value_match[0]== 'O')&&(value_match[1]== 'O')&&(value_match[2]=="O")) {
        document.getElementById('result').innerHTML="O is the Winner!"
            
    }
    else if((value_match[3]== 'X')&&(value_match[4]=='X')&&(value_match[5]=="X")){
        document.getElementById('result').innerHTML="X is the Winner!"
            
    }
    else if((value_match[3]== 'O')&&(value_match[4]=='O')&&(value_match[5]=="O")){
        document.getElementById('result').innerHTML="O is the Winner!"
            
    }
    else if((value_match[6]== 'X')&&(value_match[7]=='X')&&(value_match[8]=="X")){
        document.getElementById('result').innerHTML="X is the Winner!"
            
    }
    else if((value_match[6]== 'O')&&(value_match[7]=='O')&&(value_match[8]=="O")){
        document.getElementById('result').innerHTML="O is the Winner!"
            
    }
    else if((value_match[0]== 'X')&&(value_match[3]=='X')&&(value_match[6]=="X")){
        document.getElementById('result').innerHTML="X is the Winner!"
            
    }
    else if((value_match[0]== 'O')&&(value_match[3]=='O')&&(value_match[6]=="O")){
        document.getElementById('result').innerHTML="O is the Winner!"
            
    }
    else if((value_match[1]== 'X')&&(value_match[4]=='X')&&(value_match[7]=="X")){
        document.getElementById('result').innerHTML="X is the Winner!"
            
    }
    else if((value_match[1]== 'O')&&(value_match[4]=='O')&&(value_match[7]=="O")){
        document.getElementById('result').innerHTML="O is the Winner!"
            
    }
    else if((value_match[2]== 'X')&&(value_match[5]=='X')&&(value_match[8]=="X")){
        document.getElementById('result').innerHTML="X is the Winner!"
            
    }
    else if((value_match[2]== 'O')&&(value_match[5]=='O')&&(value_match[8]=="O")){
        document.getElementById('result').innerHTML="O is the Winner!"
            
    }
    else if((value_match[0]== 'X')&&(value_match[4]=='X')&&(value_match[8]=="X")){
        document.getElementById('result').innerHTML="X is the Winner!"
            
    }
    else if((value_match[0]== 'O')&&(value_match[4]=='O')&&(value_match[8]=="O")){
        document.getElementById('result').innerHTML="O is the Winner!"
            
    }
    else if((value_match[2]== 'X')&&(value_match[4]=='X')&&(value_match[6]=="X")){
        document.getElementById('result').innerHTML="X is the Winner!"
            
    }
    else if((value_match[2]== 'O')&&(value_match[4]=='O')&&(value_match[6]=="O")){
        document.getElementById('result').innerHTML="O is the Winner!"
            
    }
}
 