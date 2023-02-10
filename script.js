var uid = new ShortUniqueId();
// Return the first element that matches selection.

// 1 --> + code
const addbtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const textArea = document.querySelector(".text-area-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
// 2 ---> x code
const plusBtn = document.querySelector(".fa-plus");
const removeBtn = document.querySelector(".fa-x");
// For Select all the container color
const toolBoxColors = document.querySelectorAll(".toolbox-color>*");
// console.log(toolBoxColors);

const colors = ["lightpink", "lightgreen", "lightblue", "lightblack"];
let modalPriorityColor = colors[colors.length - 1]; // by default it give black
const mainCont = document.querySelector(".main-cont");
let ticketArr = [];
// intially modal is not present
var isModalPresent = false;
addbtn.addEventListener("click", function () {
  // case 1 -> if modal is not present then display modal

  if (!isModalPresent) {
    // display modal
    // Javascript is able to change HTML CSS with the help of DOM below some ex-> of DOM
    modalCont.style.display = "flex";
    
  } else if (isModalPresent) {
    // display none
    modalCont.style.display = "none";
  }
  isModalPresent = !isModalPresent;
});

// 2 --> Generate ticket
modalCont.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    // 1 call createTicket
    createTicket(modalPriorityColor, textArea.value);
    // 2 alter display and update ismodalPresent
    modalCont.style.display = "none";
    isModalPresent = "false";
    textArea.value = "";
  }
});

function createTicket(ticketColor, data, ticketId) {
  let id = ticketId || uid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id"> ${id}</div>
    <div class="task-area"> ${data}</div>
    <div class="ticket-lock">
         <i class="fa-solid fa-lock"></i>
    </div>
    `;
  mainCont.appendChild(ticketCont);

  //-0-->   Local  Storage ---> LocalStorage is a property that allows JavaScript sites and apps to save
  //        key-value pairs in a web browser with no expiration date. This means the data stored in the
  //        browser  will persist even after the browser window is closed.

  // -----> if ticket is beging gennrated for the first time save it in local storage
  if (!ticketId) {
    ticketArr.push({
      ticketId: id,
      ticketColor,
      ticketTask: data,
    });
    localStorage.setItem("tickets", JSON.stringify(ticketArr));
  }
  handleRemoval(ticketCont,id);
  handlePriorityColor(ticketCont, id);
  handleLock(ticketCont,id);
}
// ---> getting data from localstorage, for renderinf of tickets
if (localStorage.getItem("tickets")) {
  ticketArr = JSON.parse(localStorage.getItem("tickets"));
  ticketArr.forEach((ticketObj) =>
    createTicket(
      ticketObj.ticketColor,
      ticketObj.ticketTask,
      ticketObj.ticketId
    )
  );
}

// this is for generate ticket with selected color
allPriorityColors.forEach((colorElement) => {
  colorElement.addEventListener("click", function () {
    allPriorityColors.forEach((el) => {
      el.classList.remove("active");
    });
    colorElement.classList.add("active");
    // this gives 0 index color
    modalPriorityColor = colorElement.classList[0];
  });
});    

// Generate ticket on the basics of ticket color
for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", function () {
    let currColor = toolBoxColors[i].classList[0];
    let filteredTickets = ticketArr.filter(
      (ticketObj) => ticketObj.ticketColor == currColor
    );

    //---> remove all tickets
    let allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach((ticket) => ticket.remove());

    //----> disply filtered tickets
    filteredTickets.forEach((ticket) =>
      createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId)
    );
  });
  
  // ----> For Double click to show all ticket
  toolBoxColors[i].addEventListener("dblclick", function(){

    // -----> first remove all tickets
    let allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach((ticket) => ticket.remove());
    //------> Display all ticket
    ticketArr.forEach(ticket => createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId));

  });
}
var isRemoveBtnActive = false;
removeBtn.addEventListener("click", function(){
  //  case 1  --> if remove is not active then make it active i.e red color
  if (!isRemoveBtnActive){
    // ----> display modal
    removeBtn.style.color = "red";
  }

  //  case 2 ---> if remove is active then makes it inactive i.e white color
  else if(isRemoveBtnActive){
    // display none
    removeBtn.style.color = "white";
  }
  isRemoveBtnActive = !isRemoveBtnActive;
})
var isPlusBtnActive = false;
plusBtn.addEventListener("click", function(){
  //  case 1  --> if remove is not active then make it active i.e red color
  if (!isPlusBtnActive){
    // ----> display modal
    plusBtn.style.color = "red";
  }

  //  case 2 ---> if remove is active then makes it inactive i.e white color
  else if(isPlusBtnActive){
    // display none
    plusBtn.style.color = "white";
  }
  isPlusBtnActive = !isPlusBtnActive;
})
//helps in removing the ticket from frontend and saving in localStorage
function handleRemoval(ticketCont, id){
  ticketCont.addEventListener("click", function(){
    if(!isRemoveBtnActive) return;

    // ---> remove from ticketArr
    let idx = getTicketIdx(id);
    ticketArr.splice(idx,1);

    // set in local storage
    localStorage.setItem("tickets",JSON.stringify(ticketArr));

    // remove from frontend
    ticketCont.remove();
  });
}

//--> return the index of ticket present in ticketArr
function getTicketIdx(id){
  let idx = ticketArr.findIndex(ticketObj => {
    return ticketObj.ticketId == id
  })
  return idx;
}

//-----> change the priority of the ticketColor in ticketCont 
function handlePriorityColor(ticketCont, id){
  let ticketColor = ticketCont.querySelector(".ticket-color");

  //-----> addevent listener of type click on ticketColor
  ticketColor.addEventListener("click", function(){
    let currTicketColor = ticketColor.classList[1]; //- lightpink
    let currTicketColorIdx = colors.indexOf(currTicketColor); //- 0
    let newTicketColorIdx = (currTicketColorIdx + 1)%colors.length; //- 2
    let newTicketColor = colors[newTicketColorIdx];//- lightgreen
    ticketColor.classList.remove(currTicketColor); //-ligthpink class removed
    ticketColor.classList.add(newTicketColor); //- ligthgreen class added

    // ---> update local storage
    let idx = getTicketIdx(id);
    //----> update the newticketcolor in ticket array
    ticketArr[idx].ticketColor = newTicketColor;
    //----> set in local storage
    localStorage.setItem("tickets", JSON.stringify(ticketArr));
  });
}
//---> unlock class -> fa-lock-open
const unlock = "fa-lock-open";
function handleLock(ticketCont, id) {
  let ticketLock = ticketCont.querySelector(".ticket-lock");
  let lock = ticketLock.children[0].classList[1];
  let ticketTaskArea = ticketCont.querySelector(".task-area");

  ticketLock.addEventListener("click", function(){
    if(ticketLock.children[0].classList.contains(lock)){
      //--> remove lock class
      ticketLock.children[0].classList.remove(lock);
      //---> add unlock class
      ticketLock.children[0].classList.add(unlock);

      // ---> make content editable
      ticketTaskArea.setAttribute("contenteditable", "true");

    }
    else if (ticketLock.children[0].classList.contains(unlock)) {
      // ---> add lock class
      ticketLock.children[0].classList.add(lock);
      //---> remove unlock class
      ticketLock.children[0].classList.remove(unlock);

      //--->  make content non editable
      ticketTaskArea.setAttribute("contenteditable", "false");
    }
    let idx = getTicketIdx(id);
    ticketArr[idx].ticketTask = ticketTaskArea.textContent;
    localStorage.setItem("tickets", JSON.stringify(ticketArr));
  })
}