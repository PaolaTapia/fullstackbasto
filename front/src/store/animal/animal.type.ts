export interface Animal {
    _id?: string,
    idSenasa: string;
    typeAnimal: string;
    weight: number;
    paddock: string;
    typeDevice: string;
    numberDevice: string
  }
  
  export interface AnimalState {
    animals: Animal[];
    selectedAnimal?: Animal;
    loading: boolean;
  }