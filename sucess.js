document.addEventListener('DOMContentLoaded', function () {
    const goBackButton = document.querySelector('.text-indigo-500');

    if (goBackButton) {
        goBackButton.addEventListener('click', function () {
            window.history.back();
        });
    }
});
