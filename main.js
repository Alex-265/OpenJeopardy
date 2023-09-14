window.onload = (event) => {
  const loadingDialog = document.getElementById("loading-dialog-id");
  const questionDialog = document.getElementById("question-dialog-id");
  questionDialog.showModal();
};
async function tableButtonClick(button) {
  getAllUsers();
  
  const questionDialog = document.getElementById("question-dialog-id");
  var parentDiv = button.parentElement;
  var buttonText = button.innerText;
  button.disabled = true;
  const SelectUser1ButtonId = document.getElementById("SelectUser1ButtonId");
  SelectUser1ButtonId.parentElement.parentElement.style.display = "flex";
  button.classList.remove("button");
  button.classList.add("button-disabled");
  questionDialog.showModal();
  console.log("Parent div:", parentDiv);
  console.log("Button text:", buttonText);
}

async function Loading() {
  const loadingDialog = document.getElementById("loading-dialog-id");
  loadingDialog.showModal();
  await Sleep(2000)
  loadingDialog.classList.add("hide");
  loadingDialog.addEventListener(
    "webkitAnimationEnd",
    function () {
      loadingDialog.classList.remove("hide");
      loadingDialog.close();
      loadingDialog.removeEventListener(
        "webkitAnimationEnd",
        arguments.callee,
        false
      );
    },
    false
  );
}

function closemodal() {
  closeQuestion();
}

async function hideUserButtons() {
  const SelectUser1ButtonId = document.getElementById("SelectUser1ButtonId");
  const SelectUser2ButtonId = document.getElementById("SelectUser2ButtonId");
  const SelectUser3ButtonId = document.getElementById("SelectUser3ButtonId");
  const SelectUser4ButtonId = document.getElementById("SelectUser4ButtonId");
  hide(SelectUser2ButtonId);
  hide(SelectUser3ButtonId);
  hide(SelectUser4ButtonId);
  hide(SelectUser1ButtonId);

  await Sleep(250);
  SelectUser1ButtonId.parentElement.parentElement.style.display = "none";
  await Loading();
}

async function SelectUser1() {
  hideUserButtons();
  sendToServer("SELECT USER 1")
}
async function SelectUser2() {
  hideUserButtons();
  sendToServer("SELECT USER 2");
}
async function SelectUser3() {
  hideUserButtons();
  sendToServer("SELECT USER 3");
}
async function SelectUser4() {
  hideUserButtons();
  sendToServer("SELECT USER 4");
}

function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
async function closeQuestion() {
  const questionDialog = document.getElementById("question-dialog-id");
  questionDialog.classList.add("hide");
  questionDialog.addEventListener(
    "webkitAnimationEnd",
    function () {
      questionDialog.classList.remove("hide");
      questionDialog.close();
      questionDialog.removeEventListener(
        "webkitAnimationEnd",
        arguments.callee,
        false
      );
    },
    false
  );
}

function hide(object) {
  object.classList.add("hide");
  object.addEventListener(
    "webkitAnimationEnd",
    function () {
      object.classList.remove("hide");
      object.display = "none";
      object.removeEventListener(
        "webkitAnimationEnd",
        arguments.callee,
        false
      );
    },
    false
  );

}

function getAllUsers() {
  const SelectUser1ButtonId = document.getElementById("SelectUser1ButtonId");
  const SelectUser2ButtonId = document.getElementById("SelectUser2ButtonId");
  const SelectUser3ButtonId = document.getElementById("SelectUser3ButtonId");
  const SelectUser4ButtonId = document.getElementById("SelectUser4ButtonId");
  const users = ["Pikachu", "Fabsi14"];
  if (users.length > 4) {
    sendToServer("Too many Users");
  } else {
    if (users.length < 4) {
      try {
        SelectUser1ButtonId.innerText = users[0];
        SelectUser2ButtonId.innerText = users[1];
        SelectUser3ButtonId.innerText = users[4];
        SelectUser4ButtonId.innerText = users[3];
      } catch {

      }
      
      SelectUser4ButtonId.style.display = "none";
    }
    if (users.length < 3) {
      SelectUser3ButtonId.style.display = "none";
    }
  }
  // TODO: Add Server Getting
  return users;
}


function sendToServer(message) {

}