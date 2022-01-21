console.log('conectado en js')

function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min
}

console.log(getRandomInt(10,20))

document.addEventListener('DOMContentLoaded', () =>{
        const idPokemon = (1)
        fetchData(idPokemon)
})

const fetchData = async(id)=>{
        try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                const data = await pokemon.json()
                //console.log(data)

                const jugador ={
                        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                        imgJuego: data.sprites.front_default,
                        imgCvg: data.sprites.other.dream_world.front_default,
                        nombre: data.name,
                        expeciencia: data.base_experience,
                        hp: data.stats[0].base_stat,
                        ataque: data.stats[1].base_stat,
                        defensa: data.stats[2].base_stat,
                        especial: data.stats[3].base_stat,
                }
                console.log(jugador)
                pintarCard(jugador)
        } catch (error) {
                console.log(error)
        }
}

const pintarCard = (pokemon) =>{
        const flex=document.querySelector(".flex")
        const template = document.getElementById("card").content
        const clone = template.cloneNode(true)
        const fragment = document.createDocumentFragment()

        flex.innerHTML= '';
        clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg)
        clone.querySelector(".card-body-title").innerHTML = `
                ${pokemon.nombre} <span>${pokemon.hp}</span> `
        clone.querySelector(".card-body-text").textContent = pokemon.expeciencia + " exp"
        clone.querySelectorAll(".card-footer-social h3")[0].textContent = pokemon.ataque + " k"
        clone.querySelectorAll(".card-footer-social h3")[1].textContent = pokemon.especial + " k"
        clone.querySelectorAll(".card-footer-social h3")[2].textContent = pokemon.defensa + " k"

        fragment.appendChild(clone)
        flex.appendChild(fragment)
}

const pintarLista = () =>{

}