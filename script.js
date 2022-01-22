var pageContentEl = document.querySelector("#page-content");
var quizHeading = document.getElementById("quiz-heading");
var buttonsDiv = document.getElementById("buttons-div");
var responseFooterDiv = document.getElementById("respons-footer");
var currentQuestion = 1;
var questions = 4;
var currentAnswer = "";
var count = 75;


var start = document.getElementById("start")
var startbtn = document.getElementById("startbtn")


//` `
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


//Load Question1 HTML Elements

//The condition in an if / else statement is enclosed within ____.
var question1 = function() {

    responseFooterDiv.innerHTML = "";
    quizHeading.innerHTML = "The condition in an if / else statement is enclosed within ____."
    
    var quotesbutton = document.createElement("button");
    quotesbutton.textContent = "Quotes";
    quotesbutton.className = "btn quotes-btn button";
    quotesbutton.setAttribute("data-button-id", 'quotes');
    buttonsDiv.appendChild(quotesbutton);
  
     var curlybraketsbutton = document.createElement("button");
    curlybraketsbutton.textContent = "Curely Brakets";
    curlybraketsbutton.className = "btn curelybraket-btn button";
    curlybraketsbutton.setAttribute("data-button-id", 'curlybraket');
    buttonsDiv.appendChild(curlybraketsbutton);
    
    var paranthesesbutton = document.createElement("button");
    paranthesesbutton.textContent = "Parentheses";
    paranthesesbutton.className = "btn parentheses-btn button";
    paranthesesbutton.setAttribute("data-button-id", 'parentheses');
    buttonsDiv.appendChild(paranthesesbutton);
  
    var squarebrakets = document.createElement("button");
    squarebrakets.textContent = "Square Brakets";
    squarebrakets.className = "btn squarebrakets-btn button";
    squarebrakets.setAttribute("data-button-id", 'squarebrakets');
    buttonsDiv.appendChild(squarebrakets);
    
  };
  
  startbtn.addEventListener("click", function(event){
      event.preventDefault()
      document.getElementById("questions").setAttribute("style", "display:flex")
      start.setAttribute("style", "display:none")
      question1();
      
      var interval = setInterval(function(){
        document.getElementById('count').innerHTML=count;
        count--;
        if (count === 0){
          clearInterval(interval);
          document.getElementById('count').innerHTML='Done';
          // or...
          alert("You're out of time!");
        }
        else if (
            currentQuestion === 5
        ){
            clearInterval(interval)
        }
      }, 1000);
      })
      
  
  //Load Question2 HTML Elements
  //Commonly used data types DO NOT include:
  var question2 = function() {
       responseFooterDiv.innerHTML = "";
      quizHeading.innerHTML = "Commonly used data types DO NOT include:"
      removeAllChildNodes(buttonsDiv);
  
      var stringsbutton = document.createElement("button");
      stringsbutton.textContent = "Strings";
      stringsbutton.className = "btn strings-btn";
      stringsbutton.setAttribute("data-button-id", 'strings');
      buttonsDiv.appendChild(stringsbutton);
  
      var booleansbutton = document.createElement("button");
      booleansbutton.textContent = "Booleans";
      booleansbutton.className = "btn booleans-btn";
      booleansbutton.setAttribute("data-button-id", 'booleans');
      buttonsDiv.appendChild(booleansbutton);
  
        var alertsbutton = document.createElement("button");
      alertsbutton.textContent = "Alerts";
      alertsbutton.className = "btn alerts-btn";
      alertsbutton.setAttribute("data-button-id", 'alerts');
      buttonsDiv.appendChild(alertsbutton);
      
      var numbersbutton = document.createElement("button");
      numbersbutton.textContent = "Numbers";
      numbersbutton.className = "btn numbers-btn";
      numbersbutton.setAttribute("data-button-id", 'numbers');
      buttonsDiv.appendChild(numbersbutton);
  }
  
  //Load Question3 HTML Elements
  //Arrays in Javascript can be used to store ____.
  var question3 = function() {
      responseFooterDiv.innerHTML = "";
     quizHeading.innerHTML = "Arrays in Javascript can be used to store ____."
     removeAllChildNodes(buttonsDiv);
  
  
     var numbersandstringsbutton = document.createElement("button");
     numbersandstringsbutton.textContent = "Number and Strings";
     numbersandstringsbutton.className = "btn numbersandstrings-btn";
     numbersandstringsbutton.setAttribute("data-button-id", 'numbersandstrings');
     buttonsDiv.appendChild(numbersandstringsbutton);
  
     var otherarrays = document.createElement("button");
     otherarrays.textContent = "Other arrays";
     otherarrays.className = "btn otherarrays-btn";
     otherarrays.setAttribute("data-button-id", 'otherarrays');
     buttonsDiv.appendChild(otherarrays);
  
       var booleansbutton = document.createElement("button");
     booleansbutton.textContent = "Booleans";
     booleansbutton.className = "btn booleans-btn";
     booleansbutton.setAttribute("data-button-id", 'booleans');
     buttonsDiv.appendChild(booleansbutton);
  
     var alloftheabovebutton = document.createElement("button");
     alloftheabovebutton.textContent = "All of the above";
     alloftheabovebutton.className = "btn all-of-the-above-btn";
     alloftheabovebutton.setAttribute("data-button-id", 'alloftheabove');
     buttonsDiv.appendChild(alloftheabovebutton);
  
  }
  
  //Load Question4 HTML Elements
  //A very useful tool for used during development and debugging for printing content to the debugger is:
  var question4 = function() {
      responseFooterDiv.innerHTML = "";
     quizHeading.innerHTML = "A very useful tool for used during development and debugging for printing content to the debugger is:"
     removeAllChildNodes(buttonsDiv);
  
   
     var Javascriptbutton = document.createElement("button");
     Javascriptbutton.textContent = "Javascript";
     Javascriptbutton.className = "btn javascript-btn";
     Javascriptbutton.setAttribute("data-button-id", 'javascript');
     buttonsDiv.appendChild(Javascriptbutton);
  
     var terminalbutton = document.createElement("button");
     terminalbutton.textContent = "terminal";
     terminalbutton.className = "btn terminal-btn";
     terminalbutton.setAttribute("data-button-id", 'terminal');
     buttonsDiv.appendChild(terminalbutton);
  
       var forloopsbutton = document.createElement("button");
     forloopsbutton.textContent = "for loops";
     forloopsbutton.className = "btn forloops-btn";
     forloopsbutton.setAttribute("data-button-id", 'forloops');
     buttonsDiv.appendChild(forloopsbutton);
  
     var consolelogbutton = document.createElement("button");
     consolelogbutton.textContent = "console log";
     consolelogbutton.className = "btn consolelog-btn";
     consolelogbutton.setAttribute("data-button-id", 'consolelog');
     buttonsDiv.appendChild(consolelogbutton);
  }

  