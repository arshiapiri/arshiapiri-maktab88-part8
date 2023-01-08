function makeUserDataTable(personData) {
    const tableElem = document.querySelector("table");

    personData.forEach(function (person, index) {
        const row = document.createElement("tr");

        const rowCell = document.createElement("td");

        const rowCellText = document.createTextNode(`${index}`);
        
        rowCell.appendChild(rowCellText);
        

        for (const props in person) {
            const newCell = document.createElement("td");

            const cellText = document.createTextNode(`${person[props]}`);

            newCell.appendChild(cellText);
            row.appendChild(newCell);
            
        }
        tableElem.appendChild(row);
        
    })
    
}
makeUserDataTable(userData);



var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["UID"] = document.getElementById("UID").value;
    formData["fristName"] = document.getElementById("fristName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["city"] = document.getElementById("city").value;
    formData["postal"] = document.getElementById("postal").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    formData["Position"] = document.getElementById("Position").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.UID;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fristName;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastName;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.postal;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.phoneNumber;
    
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Position;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("UID").value = "";
    document.getElementById("fristName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("city").value = "";
    document.getElementById("postal").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("Position").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("UID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fristName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
    document.getElementById("postal").value = selectedRow.cells[4].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[5].innerHTML;
    document.getElementById("position").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.UID;
    selectedRow.cells[1].innerHTML = formData.fristName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[5].innerHTML = formData.postal;
    selectedRow.cells[6].innerHTML = formData.phoneNumber;
    selectedRow.cells[7].innerHTML = formData.Position;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fristName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
