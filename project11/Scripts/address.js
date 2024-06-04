

//document.getelementbyid('addcontact').addeventlistener('click', function () {
//    alert('add new contact');
//    window.location.href = 'newcontact.cshtml'; // redirect to a new page for adding a contact
//});

//document.getelementbyid('savebutton').addeventlistener('click', function () {
//    alert('save button clicked');
//    // add your save functionality here
//});

//document.getelementbyid('editbutton').addeventlistener('click', function () {
//    alert('edit button clicked');
//    // add your edit functionality here
//});

//document.getelementbyid('generateqrbutton').addeventlistener('click', function () {
//    window.location.href = 'qrcode.cshtml'; // redirect to the qr code generation page
//});
document.getElementById('generate-qr').addEventListener('click', function () {
    const username = document.getElementById('username').textContent;
    const qrcodeContainer = document.getElementById('qrcode');

    // Clear previous QR code if exists
    qrcodeContainer.innerHTML = '';

    // Generate QR code
    QRCode.toCanvas(qrcodeContainer, username, function (error) {
        if (error) console.error(error);
        console.log('QR code generated!');
    });
});
