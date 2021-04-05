let use=localStorage.getItem("uid")



let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title")
let addTxt = document.getElementById("note-text")



addBtn.addEventListener("click", (e) => {
if (addTitle.value == "" || addTxt.value == ""){
    return alert("Please add note title and details");
}

let notes = localStorage.getItem("notes");
if (notes == null){
    notesObj = [];

}else {
    notesObj = JSON.parse(notes);
}

let myObj = {
   u:use, 
    title: addTitle.value,
    text: addTxt.value,
}
notesObj.push(myObj);
localStorage.setItem("notes" ,JSON.stringify(notesObj));
addTxt.value = "";
addTitle.value = "";

showNotes();
})

function shownotes(){
    let notes = localStorage.getItem("notes");
    if (notes==null){
    notesObj = []

    }else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element,index){
        if(use==notesObj[index].u){
        html += `
        <div id="note">

      <p class="note-counter">Note ${index + 1}</p>
      <h3 class="note-tittle">${element.title}</h3>
      <p class="note-text">${element.text}</p>
      <button id="${index}" onclick ="deleteNote(this.id)" class="note-btn">Delete Note</button>
      <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">Edit note</button>
    
    </div> 
    ` ;}
        
        });

        let noteElem = document.getElementById("notes");
        if (notesObj.length != 0){
            noteElem.innerHTML = html;
        } else{
            noteElem.innerHTML = "No Notes Yet!";
        }
       }
 function deleteNote(index){
       let confirmDel = confirm("You are deleting this note!!");
       if (confirmDel == true){
        let notes = localStorage.getItem("notes");
        if (notes == null){
            notesObj = [];
        
        }else {
            notesObj = JSON.parse(notes);
        }

       notesObj.splice(index, 1);
       localStorage.setItem("notes",JSON.stringify(notesObj));
       shownotes();
     }

 }
function editNote(index){
    let notes =localStorage.getItem("notes");
    if (addTitle.value !== "" || addTxt.value !== ""){
    return alert("please clear the form before editing a note");
    }
if (notes == null){
    notesObj = [];

}else {
    notesObj = JSON.parse(notes);
}
notesObj.findIndex((element,index) =>{

    addTitle.value = element.title;
    addTxt.value = element.text;

})

notesObj.splice(index, 1);
localStorage.setItem("notes",JSON.stringify(notesObj));
shownotes();
}
shownotes();