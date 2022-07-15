//rutas GET, POST, PUT, DELETE
import { Router } from 'express';
import * as animalCtrl from './animals.controller.js';


const router = Router();

//el controlador (req, res) => { res.json({ message: 'Getting animales...' }) } esta en animales.controller.js
router.get('/all', animalCtrl.getAll);
router.get('/animals', animalCtrl.getAnimals);
router.post('/animal', animalCtrl.createAnimal);
router.delete('/animal/:id', animalCtrl.deleteAnimal);
router.put('/animal/:id', animalCtrl.updateAnimal);
router.get('/animal/:id', animalCtrl.getAnimal);
router.get('/animalbyid/:id', animalCtrl.getAnimalbyId);

export default router;