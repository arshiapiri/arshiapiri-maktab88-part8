function makeUserDataTable(personData) {
    const tableElem = document.querySelector("table");
    
    personData.forEach(function(person, index) {
        const row = document.createElement("tr");

        const rowCell = document.createElement("td");

        const rowCellText = document.createTextNode(`${index + 1}`);

        rowCell.appendChild(rowCellText);
        row.appendChild(rowCell);

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

///

th.addEventListener('click' , function(e){
    console.log(e.target);
})

