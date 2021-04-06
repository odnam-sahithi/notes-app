let use=localStorage.getItem("uid")



let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addTxt = document.getElementById("note-text");

let today = new Date();
var date = today.getDate();
var month = today.getMonth() +1;
var year = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();



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
    date : date,
    month : month,
    year : year,
    hour : hour,
    minute : minute,
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
      <h3 class="note-tittle">${element.title}</h3>
      <p class="note-text">${element.text}</p>
      <p class="date">${element.date}/${element.month}/${element.year}</p>
        <p class="time">${element.hour}:${element.minute}</p>
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
    let saveindex= document.getElementById("saveindex"); 
    let savenote = document.getElementById("save-btn");
    saveindex.value = index;
    let notes= localStorage.getItem("notes");
    let notesObj = JSON.parse(notes);
    let addTitle=document.getElementById("note-title");
    let addTxt=document.getElementById("note-text");
   addTxt.value = notesObj[index].text;
   addTitle.value=notesObj[index].title;
    savenote.style.display="block";
    addBtn.style.display="none";
}
function saveNote(){
    let notes= localStorage.getItem("notes");
    let notesObj = JSON.parse(notes);
    let saveindex= document.getElementById("saveindex").value;
    if(addTxt.value!=0 && addTitle!=0){
        notesObj[saveindex].title=addTitle.value;
        notesObj[saveindex].text=addTxt.value;
    }
    localStorage.setItem("notes",JSON.stringify(notesObj));
    
    savenote.style.display="none";
    shownotes();

}
 shownotes();