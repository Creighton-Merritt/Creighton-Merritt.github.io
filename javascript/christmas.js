// Load the current list in local storage
window.onload = function() {
    localArr = JSON.parse(localStorage.getItem('localArr')) || [];
    for(var i=0; i < localArr.length; i++) {
        var markup = "<tr><td><input type='radio' id='radio' name='record' value='"+localArr[i]+"'>"+localArr[i]+"</td></tr>";
        $("#tableBody").append(markup);
        $
    }
};


// Add to local storage and add to the list on screen
$(document).ready(function(){
    $(".add-row").click(function(){
        var itemName = $("#itemName").val();
        if(itemName != "") {
            localArr = JSON.parse(localStorage.getItem('localArr')) || [];
            localArr.push(itemName);
            localStorage.setItem("localArr", JSON.stringify(localArr));
            var markup = "<tr><td><input type='radio' id='radio' name='record' value='"+itemName+"'>"+itemName+"</td></tr>";
            $("#tableBody").append(markup);
        }
        document.getElementById("itemName").value = "";
        $('#itemName').focus();
    });

  //  Delete all checked rows and remove them from local storage using 'splice'
    $(".delete-row").click(function(){
        $("#tableBody").find('input[name="record"]').each(function(i){
            if($(this).is(":checked")){
                var $selected = $(this).val();
                $(this).parents("tr").remove();
                localArr = JSON.parse(localStorage.getItem('localArr')) || [];
                if($selected == localArr[i]) {
                    localArr.splice(i,1);
                    localStorage.setItem("localArr", JSON.stringify(localArr));
                    return false;
                }
            }
        });
    });
});
