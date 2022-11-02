export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin:{
        name:string,
        url:string,
    },
    lacation:{
        name: string,
        ulr: string,
    }
    image: string,
    episode:[],
    url: string,
    created:string,
    
}
