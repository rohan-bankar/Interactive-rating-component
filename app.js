document.addEventListener('DOMContentLoaded',function(){
    const ratingButton = document.querySelectorAll('.btn');
    const subBtn = document.querySelector('.Submit');
    const thankYouCard = document.querySelector('.card-2');
   
    let selectRating = 0;

    // eventlistener rating button
    ratingButton.forEach((button)=>{
        button.addEventListener('click',function(){
           // Remove 'selected' class from all buttons
            ratingButton.forEach((button)=>{
                button.classList.remove('selected');
            })
              // Add 'selected' class to the clicked button
            this.classList.add('selected');
            // store the selected rating
            selectRating = parseInt(this.getAttribute("id"));
            console.log(selectRating);
        });
    });

    subBtn.addEventListener('click',function(){
        if(selectRating > 0){
            document.querySelector('.card-1').style.display = 'none';
            document.querySelector('.printingRating').innerText = `${selectRating}`;
            thankYouCard.style.display = 'block';
        }else{
            alert('Pleas select a rating before submitting');
        }
    });
});