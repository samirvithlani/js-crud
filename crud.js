function onFormSubmit() {

    var formData = readFormData()
    //console.log(formData)
    insertNewRecord(formData)
    resetForm()

}

function readFormData() {

    var formData = {}
    formData["fullName"] = document.getElementById("fullName").value
    formData["empCode"] = document.getElementById("empCode").value
    formData["empSalary"] = document.getElementById("empSalary").value
    formData["empCity"] = document.getElementById("empCity").value

    return formData;
}

//formData
function insertNewRecord(data) {
    //data  == formData

    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.fullName
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.empCode
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.empSalary
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.empCity
    cell4 = newRow.insertCell(4)
    cell4.innerHTML = `<a onclick ="onDelete(this)">DELETE</a>`

}

function resetForm() {

    document.getElementById("fullName").value = ""
    document.getElementById("empCode").value = ""
    document.getElementById("empSalary").value = ""
    document.getElementById("empCity").value = ""


}
function onDelete(td) {

    if (confirm('are you sure want to delete ?')) {

        row = td.parentElement.parentElement;
        console.log(row)
        console.log(row.rowIndex)
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm()

    }


}


