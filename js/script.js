document.addEventListener('DOMContentLoaded', () => {
console.log('Javascript has loaded!')
    
//Sets the first textfield in focus when the page loads
$("input:text:visible:first").focus();

$('[value="other"]').hide();
});