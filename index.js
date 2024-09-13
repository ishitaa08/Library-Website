console.log("welcome");
//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display Constructor
function Display() {}

//Add methods to display prototype
Display.prototype.add = function (book) {
  console.log("adding");
  tableBody = document.getElementById("tableBody");
  let uiString = `  <tr>
                    
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
                    `;
  tableBody.innerHTML += uiString;
};

//Implementing clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};
//Implementing the validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return fase;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                         <strong>Message!</strong> ${displayMessage}
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
               </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};

//Add submit event listener to library Form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("submission done");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  let fiction = document.getElementById("fiction");
  let rom = document.getElementById("rom");
  let self = document.getElementById("self");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (rom.checked) {
    type = rom.value;
  } else if (self.checked) {
    type = self.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("Success", "Your book has been successfully added");
  } else {
    //Show error to the user
    display.show("Error", " Sorry you cannot add this book.");
  }
  e.preventDefault();
}
