$(document).ready(function() {
    $.ajax({
        type: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        url: "http://localhost:8000/api/products",
        success: function (res) {
            var data = res.data;
            $.each(data, function(index, obj){
                var tr = $("<tr></tr>");

                tr.append("<td>"+ index +"</td>");
                tr.append("<td>"+ obj.name +"</td>");
                tr.append('<img src="' + obj.thumbnail + '" width="50" heigh="50" />');
                tr.append("<td>"+ obj.price +"</td>");
                tr.append("<td>"+ obj.seller +"</td>");

                $("#my-containing-data").append(tr);
            });
        }
    });
});