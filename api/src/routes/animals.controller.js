//CRUD en DB de animals
import Animal from './animals.js';

export const getAll = async (req, res) => {
    try {
        const animals = await Animal.find({});
        res.json(animals);
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getAnimals = async (req, res) => {
    try {
        const all = await Animal.find({});
        const animals = all.filter(animal => animal.is_active && animal);
        res.json(animals);
    } catch (error) {
        res.status(400).json({ message: 'Animals no encontrado' })
    }
}

export const getAnimal = async (req, res) => {
    const animalFound = await Animal.findOne({ idSenasa: req.params.id });
    if (animalFound) return res.status(200).json({ message: 'Animal encontrado', animalFound })
    else return res.status(400).json({ message: 'Animal not found' })
}

export const getAnimalbyId = async (req, res) => {
    const animalFound = await Animal.findById({ _id: req.params.id });
    if (animalFound) return res.status(200).json({ message: 'Animal encontrado', animalFound })
    else return res.status(400).json({ message: 'Animal not found' })
}

export const createAnimal = async (req, res) => {
    try {
        const animalFound = await Animal.findOne({ idSenasa: req.body.idSenasa });
        if (animalFound) return res.status(400).json({ message: 'Animal already exists' });
        const animal = new Animal(req.body);
        const savedAnimal = await animal.save(animal);
        res.json({ message: 'animal saved', savedAnimal });
    } catch (error) {
        res.status(400).json(error)
    }
}

export const updateAnimal = async (req, res) => {
    try {
        const animalUpdated = await Animal.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!animalUpdated) return res.status(400).json({ message: 'Animal not found' });
        res.json({ message: 'Animal udated', animalUpdated });
    } catch (error) {
        res.status(400).json({ message: 'Animal not found' })
    }
}

export const deleteAnimal = async (req, res) => {
    try {
        const animalDeleted = await Animal.findByIdAndUpdate(
            req.params.id,
            { is_active: false },
            { new: true }
        );
        res.json({ message: 'animal deleted', animalDeleted });
    } catch (error) {
        res.status(400).json({ message: 'animal not found' })
    }
}


