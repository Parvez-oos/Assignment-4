   <========== Answers To Questions =========>

1. Ans:- 

getElementById, getElementsByClassName, and querySelector / querySelectorAll all returns either a single or collection of elements, but get them different ways:

a. getElementById :  It's returns the single element in the document that has the specified ID . It is generally the fasted methods because there can only be one.

b. getElementsByClassName : It's returns a collection of elements that have the specified class. It's select all elements with a given class.

c. querySelector / querySelectorAl : Both are use css selectors to selectors to select elements. querySelector returns the first single element in the document that matches the CSS-type selector and querySelectorAl returns a collection of all elements in the document that match the selector.


2. Ans:-

To create and insert a new element into Dom using javascript , first we have to use document.createElement('tagName') to create the element in memory and then insert it into an existing specified parent element using methods like appendChild() or insertBefore(). There are some modern alternatives for insert using methods like
append() and prepend().example:

   const newDiv = document.createElement("div");
   newDiv.textContent = "This is a new created div";
   const parentElement = document.getElementById("parent-container");
   parentElement.appendChild(newDiv);
   
3. Ans:- 

Event bubbling is a concept in the Dom. It happens when an element receives an event, it first run the handlers on that element, then on its parent, then all the way up to the document and window.

How it works:

When a button is clicked, it triggers an event directed to the element. If an event handler is present, it activates, and the event then "bubbles up" to the parent elements, triggering any associated event handlers until it reaches the document element.

4. Ans:-

Event Delegation is a pattern based upon the concept of Event Bubbling. It is a technique where a single event listener is attached to a parent element to handle events for its current or future child elements.

Why useful:
it is useful because its allows to write cleaner code and create fewer event listeners with similar logic. It's also Handles dynamic elements added after page load.

5. Ans:-
event.preventDefault() is used to prevent the browser from executing the default action associated with the event. It tells the browser not to perform its default behavior for the event and event.stopPropagation() stops the event from propagating further through the DOM tree. It prevents the event from reaching ancestor elements during the capturing or bubbling phase.




