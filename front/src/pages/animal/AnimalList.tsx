import { Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddCircle from '@mui/icons-material/AddCircle';
import { ColumnInterface } from '../../interfaces/tableInterfaces';
import { useAppDispatch } from '../../store/redux-hooks';
import { Animal } from '../../store/animal/animal.type';
import TableComponent from '../../components/tableComponent/tableComponent';



type AnimalListProps = {
  animals: Animal[];
  onOpenModal: () => void;
  onOpenModal2: () => void;
  onHandleClick: (row: any) => void;
};

const AnimalsList: React.FC<AnimalListProps> = ({
  animals,
  onOpenModal,
  onOpenModal2,
  onHandleClick
}) => {

  const columns: ColumnInterface[] = [
    {
      name: 'idSenasa',
      label: 'ID Senasa',
      minWidth: 100,
    },
    {
      name: 'typeAnimal',
      label: 'Tipo Animal',
      minWidth: 100,
    },
    {
      name: 'weight',
      label: 'Peso',
      minWidth: 100,
    },
    {
      name: 'paddock',
      label: 'Potrero',
      minWidth: 100,
    },
    {
      name: 'typeDevice',
      label: 'Tipo de Collar',
      minWidth: 100,
    },
    {
      name: 'numberDevice',
      label: 'Numero de Dispositivo',
      minWidth: 100,
    },
  ];


  return (
    <Grid data-aos="fade-up" data-aos-duration="3000">
      <Grid>
        <Grid xs={12}>
          <Grid container justifyContent="flex-end" marginBottom={1}>
            <IconButton onClick={onOpenModal}>
              <AddCircle sx={{ fontSize: 40, color: '#8bb132' }} />
            </IconButton>
          </Grid>
        </Grid>
        <TableComponent
          columns={columns}
          entityList={animals}
          onHandleClick={onHandleClick}
        />
      </Grid>
    </Grid>
  );
};


export default AnimalsList;