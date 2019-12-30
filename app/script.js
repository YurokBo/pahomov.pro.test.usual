const allContentWrapper = document.querySelector('.all_content-wrapper');
const myForm = document.getElementById('my-form');


myForm.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(e.target),

        response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
            method: 'post',
            body: formData
        });

    const json = await response.json();

    if (json.success) {
        allContentWrapper.classList.add('all_content-wrapper-none');

        const welcome = document.querySelector('.welcome'),
            userId = welcome.querySelector('#user_id');

        welcome.classList.add('welcome_active');
        userId.innerHTML = json.user_id;
    }


})

