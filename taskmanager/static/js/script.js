document.addEventListener('DOMContentLoaded', function () {
    // Sidenav initialization 
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav);

    // Datepicker initialization 
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // Select initialization 
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // Collapsible initialization
    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});