import { Dispatch } from '@reduxjs/toolkit';
import animalService from '../../services/animal.service';
import { Animal } from './animal.type';
import { animalSlice } from './animalSlice';



export const getAnimals = () => async (dispatch: Dispatch) => {
    dispatch(animalSlice.actions.getAnimalsRequest());

    const response = await animalService.getAnimals().catch((err) => {
      console.error('Error', err);
    });

    if (!response) return;

    dispatch(animalSlice.actions.getAnimalsSuccess(response))
  };

  export const getAnimal = (id: string) => async (dispatch: Dispatch) => {
    dispatch(animalSlice.actions.getAnimalsRequest());

    const response = await animalService.getAnimal(id).catch((err) => {
      console.error('Error', err);
    });

    if (!response) return;

    dispatch(animalSlice.actions.getAnimalSuccess(response))
  };

export const createAnimal = (animal: Animal) => async (dispatch: Dispatch) => {
  dispatch(animalSlice.actions.getAnimalsRequest());

    const response = await animalService
      .createAnimal(animal)
      .catch((err) => {
        console.error('Error', err);
      });

    if (!response) return;

    dispatch(animalSlice.actions.createAnimalSuccess());
  };

export const updateAnimal = (id: string, animal: Animal) => async (dispatch: Dispatch) => {
  dispatch(animalSlice.actions.getAnimalsRequest());

    const response = await animalService
      .updateAnimal(id, animal)
      .catch((err) => {
        console.error('Error', err);
      });

    if (!response) return;

    dispatch(animalSlice.actions.updateAnimalSuccess())

  }

export const deleteAnimal = (id: string) => async (dispatch: Dispatch) => {
  dispatch(animalSlice.actions.getAnimalsRequest());

    const response = await animalService
      .removeAnimal(id)
      .catch((err) => {
        console.error('Error', err);
      });

    if (!response) return;

    dispatch(animalSlice.actions.deleteAnimalSuccess())

  }