import { Animal } from "../store/animal/animal.type";


class AnimalService {

  configValue: string = (process.env.REACT_APP_API_HOST as string);  

  async getAnimals(): Promise<any> {
    const response = await fetch(`${this.configValue}/animals`, {});
    return response.json();
  }

  async getAnimal(id: string): Promise<any> {
    const response = await fetch(`${this.configValue}/animal/${id}`);
    return response.json();
  }

  async createAnimal(animal: Animal): Promise<any> {
    const response = await fetch(`${this.configValue}/animal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(animal),
    });
    return response.json();
  }

  async removeAnimal(id: string) {
    const response = await fetch(`${this.configValue}/animal/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.json();
  }

  async updateAnimal(id: string, animal: Animal) {
    const response = await fetch(`${this.configValue}/animal/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(animal)
    });
    return response.json();
  }
}

const animalService = new AnimalService();
export default animalService;