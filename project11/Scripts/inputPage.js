document.addEventListener("DOMContentLoaded", function () {
    let rowCount = 0;

    window.addRow = function () {
        const table = document.getElementById("dynamicTable").getElementsByTagName('tbody')[0];
        rowCount++;
        const newRow = table.insertRow();

        // Insert cells
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell4 = newRow.insertCell(4);


        // Add data to cells
        cell1.innerHTML = rowCount;
        cell2.innerHTML = `<input type="text" placeholder="Enter Name">`;
        cell3.innerHTML = `<input type="number" placeholder="Enter Price" step="0.01">`;
        cell4.innerHTML = `<input type="text" placeholder="Enter Username">`;
    }

    window.saveData = function () {
        const table = document.getElementById("dynamicTable").getElementsByTagName('tbody')[0];
        const rows = table.rows;
        let data = [];

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].cells;
            const row = {
                id: cells[0].innerText,
                USERNAME: cells[1].querySelector('input').value,
                ADDRESS1: cells[2].querySelector('input').value,
                ADDRES2: cells[3].querySelector('input').value,
                COUNTRY: cells[2].querySelector('input').value,
                GENDER: cells[3].querySelector('input').value,
            };
            data.push(row);
        }

        localStorage.setItem('tableData', JSON.stringify(data));
        window.location.href = 'QRCode.cshtml';
    }
});
