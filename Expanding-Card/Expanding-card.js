let cards=document.querySelectorAll(".card")
cards.forEach(card=>{
    card.addEventListener('click', ()=>{
        handlecard();
        card.classList.add('active')
        
    })

})

function handlecard(){
    cards.forEach(card=>{
        card.classList.remove('active')
    })
}



