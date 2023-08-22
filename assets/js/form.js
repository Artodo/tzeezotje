const forms = document.getElementsByClassName('form');

Array.from(forms).forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData));

    $.ajax({
      url: "../../index.php",
      type: "POST",
      data: json,
      contentType: "application/json",
      success: function () {
        $(form).append("<p class='success'>Successful</p>");
        form.reset();
      },
      error: function () {
        $(form).append("<p class='fail'>Something went wrong</p>");
        form.reset();
      }
    });
  });
});

