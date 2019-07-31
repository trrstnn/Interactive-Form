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
});