export interface PokemonListResponse {
    count:     number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id: number;
}

export interface Pokemon {
    abilities:                Ability[];
    base_experience:          number;
    cries:                    Cries;
    forms:                    Form[];
    height:                   number;
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    name:                     string;
    order:                    number;
    sprites:                  Sprites;
    types:                    Type[];
    weight:                   number;
}

export interface Other {
    dream_world:        DreamWorld;
    home:               Home;
    showdown:           Sprites;
}

export interface Home {
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
}

export interface DreamWorld {
    front_default: string;
    front_female:  null;
}

export interface Sprites {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other?:             Other;
    animated?:          Sprites;
}

export interface Ability {
    ability:   Form;
    is_hidden: boolean;
    slot:      number;
}

export interface Form {
    name: string;
    url:  string;
}

export interface Cries {
    latest: string;
    legacy: string;
}

export interface Type {
    slot: number;
    type: Form;
}
