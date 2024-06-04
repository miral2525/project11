document.getElementById('generate-qr').addEventListener('click', function () {
    const qrcodeContainer = document.getElementById('qrcode');
    const textToEncode = "Your QR Code Text Here"; // You can change this to any text you want to encode

    // Clear previous QR code if exists
    qrcodeContainer.innerHTML = '';

    // Generate QR code
    QRCode.toCanvas(qrcodeContainer, textToEncode, function (error) {
        if (error) console.error(error);
        console.log('QR code generated!');
    });
});
