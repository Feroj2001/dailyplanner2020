$(document).ready(function () {
    var currentDay = $("#currentDay")
    var currentTime = moment().hours()
    currentDay.text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".timerr").each(function () {
      var hourBlock = ($(this).text());
      var formattedBlock = moment(hourBlock, "h A").format("H")
      if (formattedBlock < currentTime) {
          $(this).addClass("past")
        
      } else if (formattedBlock == currentTime) {
          $(this).addClass("present")
      } else {
          $(this).addClass("future")
      }

    })


    $("button").on("click", function () {
        console.log("clicked")
        var value = $(this).parent("td").siblings(".startTime").children().val()
        var time = $(this).parent("td").siblings(".startTime").children().attr("id")
        console.log(time)
        localStorage.setItem(time, value)
    })

    $("#hour8").val(localStorage.getItem("hour8"))
    $("#hour9").val(localStorage.getItem("hour9"))
    $("#hour10").val(localStorage.getItem("hour10"))
    $("#hour11").val(localStorage.getItem("hour11"))
    $("#hour12").val(localStorage.getItem("hour12"))
    $("#hour13").val(localStorage.getItem("hour13"))
    $("#hour14").val(localStorage.getItem("hour14"))
    $("#hour15").val(localStorage.getItem("hour15"))
    $("#hour16").val(localStorage.getItem("hour16"))
    $("#hour17").val(localStorage.getItem("hour17"))

})