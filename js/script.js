//Focus on the first input field when the page loads
//Sets the first textfield in focus when the page loads
//Hides 'other-job' field unless 'other' is selected within selectfield
document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript has loaded!')
    $("input:text:visible:first").focus();
    $('#other-title').hide();


    //Shows 'other-job' input field if 'Other' is selected in Job Role selectfield
    $('#title').change(() => {
        if ($('#title option:selected').text() === 'Other') {
            $('#other-title').fadeIn();
        } else {
            $('#other-title').fadeOut();
        }
    });


    /*********  T-shirts  ************/


    //Hide the “Select Theme” `option` element in the “Design” menu.
    //Hide the “Colors” `option` element in the “Color” menu if theme has not been selected yet 
    //and appends 'Please select a T-shirt theme' option in the meantime.
    $('#design option:eq(0)').hide();
    $('#colors-js-puns').hide();
    $('#color').append('<option value="selectTheme" selected>Please select a T-shirt theme</option>');


    /*If “js puns” is selected, hide the three “heart js” option elements in the “Color” drop
    down menu, show the three “js puns” option elements, and update the “Color” field to
    the first available color.*/
    $('#design').change(() => {
        if ($('#design option:selected').val() === "js puns") {
            console.log('js puns selected!');
            $('#colors-js-puns').hide();
            $('#colors-js-puns').fadeIn();

            $('#color option[value ="cornflowerblue"]').attr("selected", true);
            $('#color option[value ="tomato"]').hide();
            $('#color option[value ="steelblue"]').hide();
            $('#color option[value ="dimgrey"]').hide();
            $('#color option[value ="cornflowerblue"]').show();
            $('#color option[value ="darkslategrey"]').show();
            $('#color option[value ="gold"]').show();
            $('#color option[value ="selectTheme"]').hide();


            /*If “heart js” is selected, hide the three “js puns” option elements in the “Color” drop
            down menu, show the three “heart js” option elements, and update the “Color” field to
            the first available color.*/
        } else if ($('#design option:selected').val() === "heart js") {
            console.log('heart js selected!');
            $('#colors-js-puns').hide();
            $('#color option[value ="cornflowerblue"]').attr("selected", false);

            $('#colors-js-puns').fadeIn();
            $('#color option[value ="tomato"]').attr("selected", true);
            $('#color option[value ="tomato"]').show();
            $('#color option[value ="steelblue"]').show();
            $('#color option[value ="dimgrey"]').show();
            $('#color option[value ="cornflowerblue"]').hide();
            $('#color option[value ="darkslategrey"]').hide();
            $('#color option[value ="gold"]').hide();
            $('#color option[value ="selectTheme"]').hide();
        }
    });

/*********  Activities  ************/

    //Appends total cost element onto Activities section
    $('.activities').append(`<label id='totalDisplay'>Total Cost: </label>`);
    let totalCost = 0;

    //Adds and subtracts total cost depending on if checbox is checked or not
    $('.activities').change((e) => {

        let allCheckboxes = $('input [type="checkbox"]');
        console.log(allCheckboxes)
        
        
        let clickedActivity = e.target;
        let clickedText = clickedActivity.parentNode.textContent;
        let index = clickedText.indexOf('$');
        let activityCost = parseInt(clickedText.slice(index + 1));

        if (clickedActivity.checked) {

            totalCost += activityCost;
            console.log(totalCost)
        } else {
            totalCost -= activityCost;
            console.log(totalCost)
        }
        //Updates Total Cost element dynamically
        $('#totalDisplay').text(`Total Cost: $${totalCost}`);


         if (e.target.name === "js-frameworks" && e.target.checked) {
            $(`input[name="express"]`).attr("disabled", true);
            $(`input[name="express"]`).parent().css( "color", "gray" )
           
          } else if (e.target.name === "js-frameworks" && !e.target.checked) {
            $(`input[name="express"]`).removeAttr("disabled");
            $(`input[name="express"]`).parent().css( "color", "black" )
          }

         if (e.target.name === "js-libs" && e.target.checked) {
            $('input[name="node"]').attr("disabled", true);
            $(`input[name="node"]`).parent().css( "color", "gray" );
          } else if (e.target.name === "js-libs" && !e.target.checked) {
            $('input[name="node"]').removeAttr("disabled");
            $(`input[name="node"]`).parent().css( "color", "black" )
          }
        
          if (e.target.name === "node" && e.target.checked) {
            $('input[name="js-libs"]').attr("disabled", true);
            $(`input[name="js-libs"]`).parent().css( "color", "gray" );
          } else if (e.target.name === "node" && !e.target.checked) {
            $('input[name="js-libs"]').removeAttr("disabled");
            $(`input[name="js-libs"]`).parent().css( "color", "black" )
          }
        
          if (e.target.name === "express" && e.target.checked) {
            $('input[name="js-frameworks"]').attr("disabled", true);
            $('input[name="js-frameworks"]').parent().css("color","gray");
          } else if (e.target.name === "express" && !e.target.checked) {
            $('input[name="js-frameworks"]').removeAttr("disabled");
            $('input[name="js-frameworks"]').parent().css("color","black");
          } 
    });

/*********  Payment  ************/

    $('option[value="select_method"]').hide();
    $('p').eq(0).hide();
    $('p').eq(1).hide();
    $('option[value="credit card"]').attr('selected',true);

    $('#payment').change(()=>{
        if($('#payment option:selected').text() === 'PayPal'){
            console.log('PayPal has been selected');
            $('p').eq(0).show();
            $('#credit-card').hide();
            $('p').eq(1).hide();
        }else if($('#payment option:selected').text() === 'Bitcoin'){
            console.log('Credit Card has been selected');
            $('p').eq(1).show();
            $('p').eq(0).hide();
            $('#credit-card').hide();
        }else {
        $('#credit-card').show();
        $('p').eq(0).hide();
        $('p').eq(1).hide();
        }

    });

/*********  Form Validation  ************/

//Creating error messages

 $('#name').before('<label id="name-error" class="error-message" >Please enter a valid name</label>');
 $('#mail').before('<label id="email-error" class="error-message" >Please enter a valid email address</label>');
 $('[name="all"]').before('<label id="activity-error" class="error-message" >------------------Please select an event---------------</label>');
 $('#cc-num').before('<label id="cc-error" class="error-message" >Credit Card number is invalid</label>');
 $('#zip').before('<label id="zip-error" class="error-message" >Invalid Zip Code</label>');
 $('#cvv').before('<label id="cvv-error" class="error-message" >Incorrect CVV</label>');



//Regex function for Name
const isValidName = (name)=>{
    let pattern = /^[a-z]+$/;
    if(pattern.test(name)){
        return true;
    } else {
        return false;
    }
};

//Regex function for Email
const isValidEmail = (email)=>{
    let pattern = /[^@]+@[^@.]+\.[a-z]+/i;
    if(pattern.test(email)){
        return true;
    } else {
        return false;
    }
};

// Validation for Email
$('#email-error').hide();
$('form').submit((e)=>{
e.preventDefault();
const email = $('#mail').val();
// const activities = $('.activities');
    if (isValidEmail(email) === false){
        $('input[type=email]').css("border", "2px solid red");
        console.log("Email Required"); 
        $('#name-error').show();
    }else{
        $('input[type=email]').css("border", "rgba(8, 63, 87, 0.7)")
        $('#name-error').hide();
    }
});

// Validation for Name
$('#name-error').hide();
$('form').submit((e)=>{
e.preventDefault();
const name = $('#name').val();
    if (isValidName(name) === false){
        $('#name').css("border", "2px solid red");
        $('#email-error').show();
        console.log("Name Required")
    }else{
        $('#name').css("border", "rgba(8, 63, 87, 0.7)");
        $('#email-error').hide();
}
});

//Activity Validation
$('#activity-error').hide();
const activitySelected = () =>{
    if($('.activities input:checked').length > 0){
        $('.activities').css("border","")
         $('#activity-error').hide();
        return true;
    }else if($('.activities input:checked').length < 1){
        console.log('please select an activity')
        $('#activity-error').show();
        // $('.activities').css("border","2px solid red")
        return false
       
    }
};

// Calling Activity Validation function in submit event handler
$('form').submit((e)=>{
    e.preventDefault();
    activitySelected();
});


/***********  Payment Validation  ************/

//Regex function for Credit Card
const isValidCard = (cardNumber)=>{
    let pattern = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/;
    if(pattern.test(cardNumber)){
        return true;
    } else {
        return false;
    }
};

//Regex function for CVV
const isValidCvv = (cvv)=>{
    let pattern = /[0-9]{3}/;
    if(pattern.test(cvv)){
        return true;
    } else {
        return false;
    }
};

//Regex function for ZipCode
const isValidZipCode = (zipCode)=>{
    let pattern = /[0-9]{5}/;
    if(pattern.test(zipCode)){
        return true;
    } else {
        return false;
    }
};

//Credit Card Validation function
$('#cc-error').hide();
$('form').submit((e)=>{
    e.preventDefault();
const cardNumber = $('#cc-num').val();
// const activities = $('.activities');
 if (isValidCard(cardNumber) === false){
    $('#cc-num').css("border", "2px solid red");
    $('#cc-error').show();
    console.log("CC number Required"); 
 }else{
    $('#cc-num').css("border", "rgba(8, 63, 87, 0.7)")
    $('#cc-error').hide();
 }
});

//Zip Code Validation function
$('#zip-error').hide();
$('form').submit((e)=>{
    e.preventDefault();
const zipCode = $('#zip').val();
// const activities = $('.activities');
 if (isValidZipCode(zipCode) === false){
    $('#zip').css("border", "2px solid red");
    $('#zip-error').show();
    console.log("Zip Code Required"); 
 }else{
    $('#zip-error').hide();
    $('#zip').css("border", "rgba(8, 63, 87, 0.7)")
 }
});

//CVV Validation function
$('#cvv-error').hide();
 $('form').submit((e)=>{
    e.preventDefault();
const cvv = $('#cvv').val();
// const activities = $('.activities');
 if (isValidCvv(cvv) === false){
    $('#cvv').css("border", "2px solid red");
    $('#cvv-error').show();
    console.log("cvv Required"); 
 }else{
    $('#cvv').css("border", "rgba(8, 63, 87, 0.7)")
    $('#cvv-error').hide();
 }
 

});

});

