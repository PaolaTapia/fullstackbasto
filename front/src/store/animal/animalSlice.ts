import { createSlice } from '@reduxjs/toolkit';
import { AnimalState } from './animal.type';


const initialState: AnimalState = {
  animals: [],
  loading: false,
};

export const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
      getAnimalsRequest: (state) => ({
        ...state,
        loading: true,
      }),
      getAnimalsSuccess: (state, {payload}) => ({
        ...state,
        loading: false,
        animals: payload
      }),
      getAnimalSuccess: (state, {payload}) => ({
        ... state,
        loading: false,
        selectedAnimal: payload
      }),
      createAnimalSuccess: (state) => ({
        ...state,
        loading: false
      }),
      deleteAnimalSuccess: (state) => ({
        ...state,
        loading: false,
      }),
      updateAnimalSuccess: (state) => ({
        ...state,
        loading: false,
      }),
      
  },
});