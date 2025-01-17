import { heroes } from "@/heroes/data/heroes"

export const getHeroById = (id) => {

    return heroes.find(hero => hero.id === id);
}