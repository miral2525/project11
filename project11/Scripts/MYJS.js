//////$(document).ready(function () {

//////    $('#LSub').click(function () {

//////  $("#LoginForm").submit(function () {
//////            SaveLogin();
//////        });   /////  });
///////*});*/




//////$('#RSub').click(function () {
//////    SaveRegist();
//////    alert("Call RegistionA");
//////});

//////    $('#saveNewContactButton')    unction () {          newdata();
//////        alrert("your  i i    DER: $('#savecontacter').val          new_data    //        ta() {

//////    //    var newdata1 = {////           newUserName: $('#newUserName').val(),            newAddr ess1: $('#"newAddress1').val               newAddress2: $('#newAddress2').        //        newCountry: $('# newCountry')         //        newMobileNo: $('#newMobileNo 
//////    newJobTitle: $itle').val(),////A
////D/D/ADDRESS_BOOKR E S S _ B}O////O K    //    $.ajax({
//////  formloginl: '/Home/Index    //        type: 'POST',
//////        /ata: newdata1,
//////        //  ess: function (response) {//// //            alert(response);
//////        //     edirect();
//////        //            lDataBase....f = 'Contact';
//////            alert("Your Data Save In Addressbook");  //        },
//////        //        error:(request, sor) {
//////        error: function (request, status, error) {
//////                alert(request.responseText);
//////            }
//////        })
//////    }

//////function SaveLogin() {

//////    var formlogin = {
//////        email: $('#LEmail').val(),
//////        password: $('#LPassword').val(),
//////    }


//////        $.ajax({
//////            url: '/Home/LOGIN',
//////            type: 'POST',
//////            data: formlogin,
//////            success: function (response) {
//////                alert(response);
//////                //Redirect();
//////                location.href = '/Home/Index';
//////                alert("Your Data Save In DataBase....");
//////            },
//////            error: function (request, status, error) {
//////                alert(request.responseText);
//////            }
//////        })
//////    } 

//////   // signup

//////function SaveRegist() {

//////    var formDataRegi = {
//////        name: $("#RNAME").val(),
//////        email: $("#REMAIL").val(),
//////        password: $("#RPASSWORD").val(),
//////    }
//////    console.log(formDataRegi);

//////    $.ajax({
//////        url: "/Home/SIGNUP",
//////        type: "POST",
//////        data: formDataRegi,
//////        success: function (response) {
//////            alert(response);
//////            //Redirect();
//////     cation.hr});ef =Home/LOGIN';
//////            alert("Your Data Save In DataBase....");
//////        },
//////        error: function (request, status, error) {
//////            alert(request.responseText);
//////        }
//////    });
//////    }


//////});



$(document).ready(function () {
    $('#LSub').click(function () {
        $("#LoginForm").submit(function (event) {
            event.preventDefault();
            SaveLogin();
        });
    });

    $('#RSub').click(function () {
        SaveRegist();
        alert("Call Registration");
    });

    $('#saveNewContactButton').click(function () {
        newdata();
        alert("Your data is in address book");
    });

    function newdata() {
        var newdata1 = {
            USERNAME: $('#newUserName').val(),
            ADDRESS1: $('#newAddress1').val(),
            ADDRESS2: $('#newAddress2').val(),
            COUNTRY: $('#newCountry').val(),
            MOBILE_NO: $('#newMobileNo').val(),
            JOB_TITLE: $('#newJobTitle').val(),
            GENDER: $('#newGender').val()
        };

        $.ajax({
            url: '/Home/CreateAddressBookEntry',
            type: 'POST',
            data: JSON.stringify(newdata1),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    alert(response.message);
                    location.href = '/Home/NewContact';
                } else {
                    alert(response.message);
                }
            },
            error: function (request, status, error) {
                alert(request.responseText);
            }
        });
    }

    function SaveLogin() {
        var formlogin = {
            USERNAME: $('#LEmail').val(),
            PASSWORD: $('#LPassword').val()
        };

        $.ajax({
            url: '/Home/LoginA',
            type: 'POST',
            data: JSON.stringify(formlogin),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    alert(response.message);
                    location.href = '/Home/Index';
                } else {
                    alert(response.message);
                }
            },
            error: function (request, status, error) {
                alert(request.responseText);
            }
        });
    }

    function SaveRegist() {
        var formDataRegi = {
            USERNAME: $("#RNAME").val(),
            PASSWORD: $("#RPASSWORD").val()
        };

        $.ajax({
            url: "/Home/Signup",
            type: "POST",
            data: JSON.stringify(formDataRegi),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (response) {
                if (response.success) {
                    alert(response.message);
                    location.href = '/Home/Login';
                } else {
                    alert(response.message);
                }
            },
            error: function (request, status, error) {
                alert(request.responseText);
            }
        });
    }
});

