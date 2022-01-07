const cards = document.querySelectorAll(".card");

const options = {
    root: null,
    threshold: .525,
    rootMargin: "-10%"
};


function is_touch_screen() {
    return ( 'ontouchstart' in window ) || 
           ( navigator.maxTouchPoints > 0 ) || 
           ( navigator.msMaxTouchPoints > 0 );
}

console.log(document.body.clientHeight, window.innerHeight);
console.log(document.body.clientHeight/window.innerHeight);

function colorize_card(){
    if(document.body.clientHeight/window.innerHeight > 1.5){
        var observer = new IntersectionObserver(function(entries, observer){
            entries.forEach(entry =>{
                if(entry.isIntersecting){
                    entry.target.classList.add("active");
                    console.log(entry.target.id)
                }
                else{
                    entry.target.classList.remove("active");
                }
        
            })
        },options)
        
        cards.forEach(function(card){
            observer.observe(card)
        })
    }
}

window.addEventListener('resize', function(){
    colorize_card();
});

window.addEventListener("load", function(){
    colorize_card();
});