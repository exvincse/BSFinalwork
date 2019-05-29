$(document).ready(function () {
    $('#del').on('show.bs.modal', function (event) {
        var target = $(event.relatedTarget);
        var thisval = target.parents('.kind').find('td');
        var name = thisval[1].textContent;
        var number = thisval[2].textContent;
        $(this).find('.modal-title').text("確認刪除" + name + number);
    })
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();