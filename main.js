const toggleBtn = document.querySelector('#appealtojobpost');
const jobPostGround = document.querySelector('#jobpostmainground');
toggleBtn.addEventListener('click', function(event){
    event.preventDefault();
    jobPostGround.classList.toggle('hide')
});