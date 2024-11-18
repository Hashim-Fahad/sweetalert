function submitForm(){
    username= document.getElementById('name').value;
    userEmail= document.getElementById('email').value;
    userFeedback= document.getElementById('Feedback').value;

    if(userName != "" && userEmail != "" && userFeedback != ""){
        alert("Thank you")
        swal({
            title: "MMBFLIX",
            text: "Thanks for showing interest, we will get back to you soon!",
            icon: "Success",
            button:"Ok",
        })
    }
}
