console.log('I am making a Notes taking website :)')
// functin add for showing even we refresh the page
showNotes();

let addbtn = document.querySelector('#addBtn');

addbtn.addEventListener("click", function(){

    let addTextArea = document.querySelector('.addTextarea');
    // stroing notes in local storage in form of object to string
    let notesInLocal = localStorage.getItem('notes')
    if (notesInLocal == null){
        notesObj = [];
    }
    else{
        // object by using jons.parse
        notesObj = JSON.parse(notesInLocal);
    }
    notesObj.push(addTextArea.value);
    // local stroage only store data in form of string
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTextArea.value = "";
    // console.log(notesObj);
  
    showNotes();
})
// for showing notes on card
function showNotes(){
    let notesInLocal = localStorage.getItem('notes');
    if(notesInLocal==null){
        notesObj = [];
    } else{
        notesObj = JSON.parse(notesInLocal);
    }
    let html = "";
    // adding html of card in retriving form 
    notesObj.forEach(function(element, index) {

        html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Notes ${index + 1}</h5>
            <p class="card-text perAddNote">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)"class="btn btn-primary">Delete Notes</button>
        </div>
    </div>`

    });
let notesElm = document.getElementById('notes');
if (notesObj.length != 0){
    notesElm.innerHTML = html;
}
else{
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
}

}

// deleteing notes funtion
function deleteNote(index){
    let notesInLocal = localStorage.getItem('notes');
    if(notesInLocal==null){
        notesObj = [];
    } else{
        notesObj = JSON.parse(notesInLocal);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));

    showNotes();

}

// search opertion 
let searchTxt = document.getElementById('searchTxt');

searchTxt.addEventListener("input",function(){

   let inputVal = searchTxt.value.toLowerCase();

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(noteCards){
        let perText = noteCards.getElementsByTagName("p")[0].innerText;

        if (perText.includes(inputVal)){
            noteCards.style.display = "block";
        }
        else{
            noteCards.style.display = 'none'
        }

    })


})
 

