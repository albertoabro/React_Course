
export const PokemonCard = ({id, name, sprites = []}) => {
    return(
        <section className=" w-full">
            <h2 className="font-display" >#{id} - {name} </h2>

            {/* Images */}
            <div className="flex gap-4 overflow-x-auto p-2">
                {
                    sprites.map( sprite => (
                        <img key={sprite} src={sprite} alt={name} className="h-36 object-cover rounded-lg shadow-md"/>
                    ))
                }
            </div>
        </section>
    )
}


