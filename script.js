// 1. Show an alert box on click on a link.
// function showAlert() {
//     alert("Thanks for clicking the link!");
// }


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
// function showAlert(mobileName) {
//     // Display alert message
//     document.getElementById('alertMessage').innerText = `Thanks for Purchasing ${mobileName}`;
//     document.getElementById('alertBox').classList.add('active');
//     document.getElementById('overlay').classList.add('active');
// }

// function closeAlert() {
//     // Hide the alert box and overlay
//     document.getElementById('alertBox').classList.remove('active');
//     document.getElementById('overlay').classList.remove('active');
// }


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
// function deleteRow(button) {
//     // Delete the row containing the clicked button
//     const row = button.parentElement.parentElement;
//     row.remove();
// }


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// Change the image on mouseover
// function changeImage(image) {
//     image.src = "./images/second.jpg";
// }

// // Revert back to the original image on mouseout
// function resetImage(image) {
//     image.src = "./images/first.jpg";
// }


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
// Initial counter value
// let counterValue = 0;

// // Function to increase the counter
// function increaseCounter() {
//     counterValue++;
//     document.getElementById('counter').innerText = counterValue;
// }

// // Function to decrease the counter
// function decreaseCounter() {
//     counterValue--;
//     document.getElementById('counter').innerText = counterValue;
// }