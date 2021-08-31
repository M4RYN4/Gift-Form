/*Created by Maryna @M4RYN4 */

//1. submitForm() function:
function submitFormButton() {
    var firstName1 = document.getElementById("firstName").value;
    var lastName1 = document.getElementById("lastName").value;
    var email1 = document.getElementById("email").value;
    var phone1 = document.getElementById("phone").value;

    var address2 = document.getElementById("address").value;
    var city2 = document.getElementById("city").value;
    var province2 = document.getElementById("province").value;
    var postalCode2 = document.getElementById("postalCode").value;
    //USED later for display/edit-> NOT for validation as value=Canada CANNOT be changed
    var countryCanada2 = document.getElementById("country").value;

    //check box variable for JS validation & NO NEED if jQuery used
    var kindOfGift3 = document.getElementsByName("kindOfGift");
    //select/dropdown menu var:
    var occasion3 = document.getElementById("occasion").value;
    //another way to choose from select/dropdown menu:
    // var selectElementOccasion3 = document.getElementById("occasion");
    // var selectedValueOccasion3 = selectElementOccasion3t.options[selectElementOccasion3.selectedIndex].value;

    //radio button variable for JS validation & NO NEED if jQuery used
    var sendAdditionalItemsRadio3 = document.getElementsByName("sendAdditionalItemsRadio");

    var deliveryDate4 = document.getElementById("datepicker").value;
    var notes4 = document.getElementById("comment").value;
    var error = "";

    if (firstName1 == "") {
       //3 out of 3. document.getElementById("firstName").removeAttribute("aria-invalid"), which was previously added to input
       //to have screenreader read "invalid entry" when user go over the form 2nd time & does not fill in-->
        document.getElementById("firstName").removeAttribute("aria-invalid");
        error += "<li><a href=\"#firstName\" id=\"firstName_error\" style=\"color: #EE0000; background-color: white; display: block;\">Your First Name should be entered.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }
    if (lastName1 == "") {
        document.getElementById("lastName").removeAttribute("aria-invalid");
        error += "<li><a href=\"#lastName\" id=\"lastName_error\" style=\"color: #EE0000; background-color: white; display: block;\">Your Last Name should be entered.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }
    if (email1 == "") {
        document.getElementById("email").removeAttribute("aria-invalid");
        error += "<li><a href=\"#email\" id=\"email_error\" style=\"color: #EE0000; background-color: white; display: block;\">Your Email should be entered.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }
    if (phone1 == "") {
        document.getElementById("phone").removeAttribute("aria-invalid");
        error += "<li><a href=\"#phone\" id=\"phone_error\" style=\"color: #EE0000; background-color: white; display: block;\">Your Phone Number should be entered.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }

    if (address2 == "") {
        document.getElementById("address").removeAttribute("aria-invalid");
        error += "<li><a href=\"#address\" id=\"address_error\" style=\"color: #EE0000; background-color: white; display: block;\">Enter the Shipping address.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }
    if (city2 == "") {
        document.getElementById("city").removeAttribute("aria-invalid");
        error += "<li><a href=\"#city\" id=\"city_error\" style=\"color: #EE0000; background-color: white; display: block;\">Enter the City you are shipping to.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }
    if (province2 == "") {
        document.getElementById("province").removeAttribute("aria-invalid");
        error += "<li><a href=\"#province\" id=\"province_error\" style=\"color: #EE0000; background-color: white; display: block;\">Enter the Province you are shipping to.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }
    if (postalCode2 == "") {
        document.getElementById("postalCode").removeAttribute("aria-invalid");
        error += "<li><a href=\"#postalCode\" id=\"postalCode_error\" style=\"color: #EE0000; background-color: white; display: block;\">Enter the Postal Code you are shipping to.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }

    //* Check Box -> validation JS (HTML5 does not support validation)
    if (!(kindOfGift3[0].checked || kindOfGift3[1].checked || kindOfGift3[2].checked || kindOfGift3[3].checked)) {
        //* Check Box -> validation JjQuery (HTML5 does not support validation) 
        // if ($("input[type=checkbox][name=kindOfGift]:checked").length === 0) {
        
        document.getElementById("snacksAndSweets").removeAttribute("aria-invalid");//for screen reader
        document.getElementById("lifestyle").removeAttribute("aria-invalid");
        document.getElementById("newBabyAndMom").removeAttribute("aria-invalid");
        document.getElementById("travel").removeAttribute("aria-invalid");
       
        error += "<li><a href=\"#snacksAndSweets\" name=\"kindOfGift_error\" style=\"color: #EE0000; background-color: white; display: block;\">Select at least one checkbox to specify the kind of products.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";

        //to show invalid text message if nothing is selected & submitted in Bootstrap
        $("#invalidCheckBoxKindOfGift").show();
    } else {
        $("input[type=checkbox][name=kindOfGift]").prop("required", false);
    }
    $(document).ready(function () {
        $("#kindOfProductsCheck").change(function () {
            if ($("input[type=checkbox][name=kindOfGift]:checked").length >= 1) {
                $("#invalidCheckBoxKindOfGift").hide();
                $("#validCheckBoxKindOfGift").show();
                $("input[type=checkbox][name=kindOfGift]").prop("required", false);
            } else {
                $("#invalidCheckBoxKindOfGift").show();
                $("#validCheckBoxKindOfGift").hide();
                $("input[type=checkbox][name=kindOfGift]").prop("required", true);
            }
        });
    });

    if (occasion3 == "") {
        document.getElementById("occasion").removeAttribute("aria-invalid");//for screen reader
        error += "<li><a href=\"#occasion\" id=\"occasion_error\" style=\"color: #EE0000; background-color: white; display: block;\">Select the Occasion from the meny.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }

    // //* Radio Buttons -> validation JS
    // if (!(sendAdditionalItemsRadio3[0].checked || sendAdditionalItemsRadio3[1].checked)){
    // error += "<li><a href=\"#yes\" name=\"sendAdditionalItemsRadio_error\" style=\"color: #EE0000; background-color: white; display: block;\">Select Yes or No to indicate if you want to send us any additional items.</a></li>";
    // }

    //* Radio Buttons -> validation jQuiry-lenght
    if ($("input[type=radio][name=sendAdditionalItemsRadio]:checked").length === 0) {
        document.getElementById("yes").removeAttribute("aria-invalid");//for screen reader
        document.getElementById("no").removeAttribute("aria-invalid");
        error += "<li><a href=\"#yes\" name=\"sendAdditionalItemsRadio_error\" style=\"color: #EE0000; background-color: white; display: block;\">Select <strong>Yes</strong> or <strong>No</strong> to indicate if you want to send us any additional items.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }
    $(document).ready(function () {
        $("#radioSendAdditionalItemYesNo").change(function () {
            $("input[type=radio][name=sendAdditionalItemsRadio]:checked").length === 1;
        });
    });

    //date*
    if (deliveryDate4 == "") {
        document.getElementById("datepicker").removeAttribute("aria-invalid");//for screen reader
        error += "<li><a href=\"#datepicker\" id=\"datepicker_error\" style=\"color: #EE0000; background-color: white; display: block;\">Choose preferred Delivery Date.<span class=\"sr-only\">&nbsp;Please select this link to go to the field and correct the entry.</span></a></li>";
    }


    if (error != "") {
        document.getElementById("error").style.display = "block";// if any error found -> display those errors
        document.getElementById("errors").innerHTML = error;//var error is created & all errors add up
        document.getElementById("errorFocus").focus();
    } else {
        document.getElementById("error").style.display = "none";//NO errors found 
        document.getElementById("regForm").style.display = "none";//->do NOT display form UNTIL             
        document.getElementById("infoSubmited").style.display = "block";//-> display 2nd div (was hidden) id="infoSubmited"
        document.getElementById("firstNameAnswer").innerHTML = firstName1;
        document.getElementById("lastNameAnswer").innerHTML = lastName1;

        document.getElementById("emailAnswer").innerHTML = email1;
        document.getElementById("phoneAnswer").innerHTML = phone1;

        document.getElementById("addressAnswer").innerHTML = address2;
        document.getElementById("cityAnswer").innerHTML = city2;
        document.getElementById("provinceAnswer").innerHTML = province2;
        document.getElementById("postalCodeAnswer").innerHTML = postalCode2;
        //USED here for display/edit-> NOT for validation as value=Canada CANNOT be changed
        document.getElementById("canadaAnswer").innerHTML = countryCanada2;

        //* Check Box -> to get text from checkbox-> document.querySelector("#"+id+"+ label").innerText;        
        var productToInclude = "";
        if (kindOfGift3[0].checked) {
            productToInclude += document.querySelector("#" + "snacksAndSweets" + "+ label").innerText + "<br>";
        }
        if (kindOfGift3[1].checked) {
            productToInclude += document.querySelector("#" + "lifestyle" + "+ label").innerText + "<br>";
        }
        if (kindOfGift3[2].checked) {
            productToInclude += document.querySelector("#" + "newBabyAndMom" + "+ label").innerText + "<br>";
        }
        if (kindOfGift3[3].checked) {
            productToInclude += document.querySelector("#" + "travel" + "+ label").innerText;
        }
        document.getElementById("includeAnswer").innerHTML = productToInclude;

        //*Select/dropdown menu -> to get text for an option->  document.getElementById("occasionAnswer").innerHTML = "text";
        if (occasion3 === "birthday") {
            document.getElementById("occasionAnswer").innerHTML = "Birthday";
        } else if (occasion3 === "getWellSoon") {
            document.getElementById("occasionAnswer").innerHTML = "Get Well Soon";
        } else if (occasion3 === "newBabyAndMom") {
            document.getElementById("occasionAnswer").innerHTML = "New Baby and Mom";
        } else if (occasion3 === "thankYou") {
            document.getElementById("occasionAnswer").innerHTML = "Thank You";
        } else if (occasion3 === "iAmSorry") {
            document.getElementById("occasionAnswer").innerHTML = "I am Sorry";
        } else {
            document.getElementById("occasionAnswer").innerHTML = "Just Because";
        }
        //* Radio Buttons -> to get text for an option->
        if (sendAdditionalItemsRadio3[0].checked) {
            document.getElementById("sendAdditionalItemsAnswer").innerHTML = "Yes, I will send additional items.";
        } else {
            document.getElementById("sendAdditionalItemsAnswer").innerHTML = "No, I do not want to send additional items.";
        }

        //*datepicker
        document.getElementById("deliveryDateAnswer").innerHTML = deliveryDate4;

        //text box-> optional-> to get text        
        document.getElementById("notesAnswer").innerHTML = notes4;

        document.getElementById("submited").style.display = "block";//-> 2. DISPLAY ON THE TOP MESSAGE submited in BLUE
        document.getElementById("submited").focus();//-> focus on TOP message
    }
}

//2. editForm() function:
function editButton() {
    document.getElementById("infoSubmited").style.display = "none";
    document.getElementById("submited").style.display = "none";
    document.getElementById("regForm").style.display = "block";
}
//3. confirmForm() function:
function confirmButton() {
    document.getElementById("infoSubmited").style.display = "none";
    document.getElementById("submited").style.display = "none";
    document.getElementById("confirmed").style.display = "block";//-> 3. DISPLAYED ON THE TOP MESSAGE confirmed in GREEN
    document.getElementById("confirmed").focus();
}
//4. datepicker:
$(function () {
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "calendar4.svg",
        buttonImageOnly: true,
        buttonText: "Select Date"              
    });
    $("#datepicker").datepicker("setDate", new Date());
    $("img").attr("alt", "Select Date");//add alt text if buttonImage cannot be loaded
    
});

//1. JS validation for Bootstrap -> to display invalid input & prevent submission
(function () {
    "use strict";
    window.addEventListener("load", function () {
        //Get all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener("submit", function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
    }, false);
})();

//0. remove note AODA compliant completely (screen reader annownce otherwise) 
function closeAlertBox() {
        document.getElementById("alertBox").style.display = "none";
        document.getElementById("alertBox").removeAttribute("role");
    }