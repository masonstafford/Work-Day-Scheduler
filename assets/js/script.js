
for (let i = 0; i < 18 ;i++) {
   var todo = localStorage.getItem("hour-"+i)
   if(todo){
       $("#textArea"+i).val(todo)
   }
}
$(".saveBtn").on("click", function() {
    var hour = $(this).val();
   var todo = $("#textArea"+hour).val()
   console.log(todo)
   localStorage.setItem("hour-"+hour, todo)
})

var displayTime = setInterval(function() {
    var currentDateAndTime = Date(Date.now());
    $("#currentDay").text(currentDateAndTime)
},1000);

var currentHour = new Date().getHours();
$("#textArea" + currentHour).removeClass("future")
$("#textArea" + currentHour).addClass("present")

for (var j = 9; j < currentHour; j++) {
    $("#textArea"+j).removeClass()
    $("#textArea"+j).addClass("col-8 past")
}