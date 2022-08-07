document.addEventListener("DOMContentLoaded", function () {
  var tabList = [].slice.call(document.querySelectorAll("#child a"));
  tabList.forEach(function (tab) {
    var tabTrigger = new bootstrap.Tab(tab);

    tab.addEventListener("click", function (event) {
      event.preventDefault();
      tabTrigger.show();
    });
  });
});


function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
