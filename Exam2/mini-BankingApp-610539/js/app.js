$(document).ready(function(){
    $.getJSON('js/customerData.json', function(data){
        var temp = ''

        $.each(data, function(key, value){
            temp += '<tr>'
            temp += '<td>' + value['Account Number'] + '</td>'
            temp += '<td>' + value['Customer Name'] + '</td>'
            temp += '<td>' + value['Type of Account'] + '</td>'
            temp += '</tr>'
        })
        
        $('#jsonData').append(temp)


        for(var i in localStorage){
            //console.log(localStorage[i]);
            $('#jsonData').append(localStorage.getItem(i))
        }
    })
})

document.getElementById('createAccount').addEventListener('submit', function (event) {
    event.preventDefault() 
    let cust = {}

    cust['Account Number'] = document.getElementById('acct').value
    cust['Customer Name'] = document.getElementById('name').value
    cust['Type of Account'] = document.getElementById('accountType').value
    

    let custAppend = cust['Account Number'] + ' ' + cust['Customer Name'] + ' ' + cust['Type of Account']
    
    if(cust['Account Number'] != "" && cust['Customer Name'] != "" && cust['Type of Account'] != ""){
        var temp = ''
        temp += '<tr>'
        temp += '<td>' + cust['Account Number'] + '</td>'
        temp += '<td>' + cust['Customer Name'] + '</td>'
        temp += '<td>' + cust['Type of Account'] + '</td>'
        temp += '</tr>'
    }
    localStorage.setItem(cust['Account Number'],temp)

    $('#jsonData').append(temp)
})
