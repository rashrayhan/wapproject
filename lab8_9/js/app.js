$(document).ready(function(){
    $.getJSON('js/studentsData.json', function(data){
        var temp = ''

        $.each(data, function(key, value){
            temp += '<tr>'
            temp += '<td>' + value.studentId + '</td>'
            temp += '<td>' + value.firstName + '</td>'
            temp += '</tr>'
        })
        
        $('#jsonData').append(temp)

        for(var i in localStorage){
            //console.log(localStorage[i]);
            $('#jsonData').append(localStorage.getItem(i))
        } 
    })
})

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault()
    let stu = {}

    stu.studentId = document.getElementById('stuId').value
    stu.firstName = document.getElementById('name').value

    let stucombo = stu.studentId + ' ' + stu.firstName
    
    if(stu.studentId != "" && stu.firstName != ""){
        var temp = ''
        temp += '<tr>'
        temp += '<td>' + stu.studentId + '</td>'
        temp += '<td>' + stu.firstName + '</td>'
        temp += '</tr>'
    }
    localStorage.setItem(stu.studentId,temp)
    $('#jsonData').append(temp)
    document.querySelector('#stuId').value = ''
    document.querySelector('#name').value = ''
    
    // console.log(stu)
    // console.log(students)
    
})
