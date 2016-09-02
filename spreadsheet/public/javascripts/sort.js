var checkSortOrder = true;
var myArr = [];
var totalLength = 0;
var rowsToDisplay = 50;

//main function for showing the list
function log(rows) {
    var str = '';
    $('#log').empty();
    toDisplayLength = rows.length;

    for (var i = 0; i < rowsToDisplay && i < toDisplayLength; i++) {
        str += "<li id='" + i + "' contenteditable='true' class='list-group-item'>" +
            "<span class='list-text'>" + rows[i] + "</span>" + "</li>";
    }

    console.log(toDisplayLength);
    updateLength(toDisplayLength);
    $('#log').html(str);
}

//get the array of elements from different route on page load
$.get('/data', function(response) {
    for (i in response) {
        myArr.push(response[i].text);
    }
    console.log("am preluat datele")
    myArr = $.unique(myArr);
    sortArray(myArr);
})

//show the number of entries
function updateLength(length) {
    $("#length").html("<br>" + length + " entries");
    //de adaugat length entries
}

//sort the main array
function sortArray(response) {
    $("body").delegate("#sortBtn", "click", function(e) {
        var sorted = [];
        sorted = response.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        if (checkSortOrder == false) {
            sorted.reverse();
        }
        checkSortOrder = !checkSortOrder;
        log(sorted);
    });
}

//INFINITE SCROLL
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        rowsToDisplay += 50;
        log(myArr);
    }
});
