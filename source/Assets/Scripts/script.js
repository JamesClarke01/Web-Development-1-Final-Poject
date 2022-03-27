console.log("Javascript Active")

var oldsrc
var srcStart = "Assets/Images/"
var filename
var newString

function boxOpen(id) {
  oldsrc = document.getElementById(id).src;               //gets the src of current image
  filename = oldsrc.substring(oldsrc.lastIndexOf('/') + 1); //gets filename
  imgSrc = srcStart + filename;                        //makes src of current image

  document.getElementById(id).src = "Assets/Images/boxopen.png";
}

function boxClose(id) {
  //changes box image to closed
  document.getElementById(id).src = imgSrc;
}


function validate() {

  //resets any errors from the previous submission
  document.getElementById("fnameError").innerHTML = ""
  document.getElementById("lnameError").innerHTML = ""
  document.getElementById("emailError").innerHTML = ""
  document.getElementById("genderError").innerHTML = ""
  document.getElementById("selectError").innerHTML = ""
  document.getElementById("commentError").innerHTML = ""

  //firstname validation
  var firstName = document.contactForm.fname.value;

  if (firstName == "") {
    document.getElementById("fnameError").innerHTML = "First Name must be filled out"
    return false;
  }


  //last name validation
  var lastName = document.contactForm.lname.value;

  if (lastName == "") {
    document.getElementById("lnameError").innerHTML = "Last Name must be filled out"
    return false;
  }


  //email validation
  var email = document.contactForm.email.value;

  if (email == "") {
    document.getElementById("emailError").innerHTML = "Email must be filled out"
    return false;
  }

  //checks if @ is in email
  var n = email.indexOf("@");

  if (n == -1) {
    document.getElementById("emailError").innerHTML = "Invalid email"
    return false;
  }


  //gender validatioin

  var gender = contactForm.gender;

  var isChecked = 0;

  for (var i = 0; i < gender.length; i++) {
    //loops through each button and checks if one is checked

    if (gender[i].checked != false) {
      //if one is checked, isChecked variable is set to one
      isChecked = 1
    }
  }

  if (isChecked == 0) {
    //if an item is not checked an error is displayed
    document.getElementById("genderError").innerHTML = "Input must be chosen"
    return false;
  }

  //devices drop down validation
  if (contactForm.devices.value == "default") {
    document.getElementById("selectError").innerHTML = "Please select an option";
    return false;
  }

  //comment box
  var comment = document.contactForm.comment.value;

  if (comment == "") {
    //if comment is blank, give error
    document.getElementById("commentError").innerHTML = "Comment section must be filled out"
    return false;
  }

  console.log("form is validated")
  alert("Thank you for submitting, we will contact you through email shortly.")
  return true;
}




//fact file js

//creates the "character" object
class character {
  constructor(img, name, age, role) {
    this.img = img;
    this.name = name;
    this.age = age;
    this.role = role;
  }
}


//initialises the character objects
gordon = new character("gordon.jpg", "Gordon Freeman", "27", "Player Character");
alyx = new character("alyx.jpg", "Alyx Vance", "24", "Supporting Character");
breen = new character("breen.jpg", "Dr. Wallace Breen", "~52", "Antagonist");
zombie = new character("zombie.jpg", "Zombie", "Unknown", "Enemy")


var i = 0

function changeChar(n) {
  //function runs when button "back" or "next" is pressed
  //when button "back" is pressed n = -1 and with button "next" n = 1

  pathStart = "Assets/Images/";

  characterList = [gordon, alyx, breen, zombie]; //creates array of character objects

  i += n; //will increase i by 1 if button "next" was pressed and decrease i by 1 if button "back" was pressed

  if (i > (characterList.length - 1)) {
    //if the index goes over the length of the character array it is reset to 0 (loops back around)
    i = 0;
  }

  if (i < 0) {
    //if the index goes below 0 it is set to the length of the list -1 (the last element in the array)
    i = (characterList.length - 1);
  }

  //sets the current character to be displayed
  currentChar = characterList[i];

  //updates the relevant html with the attributes of the current character
  document.getElementById("charImg").src = pathStart + currentChar.img;
  document.getElementById("charName").innerHTML = currentChar.name;
  document.getElementById("charAge").innerHTML = currentChar.age;
  document.getElementById("charRole").innerHTML = currentChar.role;



}