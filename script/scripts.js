function gaanate(){
    let feri = window.prompt("გთხოვთ მიუთითოთ შქუნიშნის ფერი: red, green or yellow");

    if(feri == "red"){
        document.getElementById("red").style.backgroundColor = 'red';
        document.getElementById("redback").style.backgroundColor = 'red';
    }
    else if(feri == "yellow"){
        document.getElementById("yellow").style.backgroundColor = 'yellow';
        document.getElementById("yellowback").style.backgroundColor = 'yellow';
    }
    else if(feri == "green"){
        document.getElementById("green").style.backgroundColor = 'green';
        document.getElementById("greenback").style.backgroundColor = 'green';
    }
    else{
        alert("ვერ გევიგეეეეეეეეეეეე?");
    }
}



