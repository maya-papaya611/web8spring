alert('welcome stranger')

function shake() {
    flip()
    var fortune = get_a_fortune()
    display_fortune(fortune)

}

function flip(){

    //no animation yet

}

function get_a_fortune() {
   
    
         let fortunes = ["yes", "no", "maybe", "ask again later"]
    let rand = Math.random()
    let random_range = rand * fortunes.length
    let random_index = Math.floor(random_range)
    return fortunes[random_index] 
    

}

function randInt(length) {
    let r = Math.random()
    let br = r * length
    let index = Math.floor(br)
    return index
}

function display_fortune (fortune){
    alert(fortune)

    
}

