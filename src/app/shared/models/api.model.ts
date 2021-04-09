export interface PetDetailI {
    id: number;
    url: string;
    width: number;
    height: number;
    breeds: PetBreedI[];
}

export interface PetBreedI {
    id: number;
    name: string | undefined;
    origin: string | undefined;
    life_span: string;
    temperament: string;
    bred_for: string;
    weight: PetSizeI;
    height: PetSizeI;
    wikipedia_url: string | undefined;
}


export interface PetSizeI {
    imperial: string;
    metric: string;
}

export interface DetailResponse extends PetBreedI {
    image: { id: number, url: string, width: number, height: number }
}