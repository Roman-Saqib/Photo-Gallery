// js for Door open 
const singleDoor = document.getElementById('singledoor');
singleDoor.addEventListener('click', function() {
this.classList.add('open');
});

// js for showing the dialogue box after the door opens completely
singleDoor.addEventListener('transitionend', function(event) {
if (event.propertyName === 'transform') {
showDialogueBox(); }
});

// js for dialogue box after the door opens
function showDialogueBox() {
document.getElementById('dialogueBox').style.display = 'block';
}

function redirectToNextPage() {
window.location.href = "2nd Phase.html";
}