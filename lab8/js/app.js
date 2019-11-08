

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
            
    })
})