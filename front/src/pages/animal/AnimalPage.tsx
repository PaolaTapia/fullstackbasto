import { Breadcrumbs, Container, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAnimals } from '../../store/animal/animal.action';
import { Animal } from '../../store/animal/animal.type';
import { useAppDispatch, useAppSelector } from '../../store/redux-hooks';
import AnimalsList from './AnimalList';
import AnimalModal, { AnimalModal2 } from './AnimalModal';


const AnimalPage: React.FC = () => {
  const animalStore = useAppSelector((state) => state.animal);
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [animal, setAnimal] = useState<Animal>({} as Animal);


  useEffect(() => {
    dispatch(getAnimals());
  }, []);


  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClickOpen2 = () => {
    setOpenModal2(true);
  };

  const handleClose2 = () => {
    setOpenModal2(false);
  };
  const handleClick = (row: any) => {
    setOpenModal2(true);
    setAnimal(row);
  };


  return (
    <div >
      <Container>
        <div data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-in-sine"role="presentation" style={{marginTop: 20}} >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Admin
            </Link>
            <Typography color="text.primary">Animales</Typography>
          </Breadcrumbs>
        </div>
        <Typography data-aos="fade-left" data-aos-duration="3000" variant="h4" component="div" gutterBottom sx={{ marginTop: 3 }}>
          Establecimiento Ganadero - Animales
        </Typography>
        {openModal && (
          <AnimalModal openModal={openModal} onClose={handleClose} />
        )}
        {openModal2 && (
          <AnimalModal2 animal={animal} edit openModal2={openModal2} onClose2={handleClose2} />
        )}
        <Typography variant="h6" data-aos="fade-up" data-aos-duration="3000">
          Lista de Animales
        </Typography>
        <AnimalsList
          onOpenModal2={handleClickOpen2}
          onOpenModal={handleClickOpen}
          onHandleClick={handleClick}
          animals={animalStore.animals}
        />
      </Container>
    </div>
  );
};

export default AnimalPage;