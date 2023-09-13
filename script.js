function uploadName(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let nameBox = document.getElementById('names');
    let liTag = document.createElement("li");
    if(name.length > 1){
        liTag.textContent = name;

        nameBox.appendChild(liTag);
        document.getElementById('name').value = "";
    }else{
        document.getElementById('error').value = "Ievades lauks ir tukš!";
        
    }


}
