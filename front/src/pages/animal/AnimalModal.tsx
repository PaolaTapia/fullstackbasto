import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    FormControl,
    Input,
    InputLabel,
    MenuItem,
} from '@mui/material';
import { useAppDispatch } from '../../store/redux-hooks';
import { createAnimal, deleteAnimal, getAnimals, updateAnimal } from '../../store/animal/animal.action';
import ModalComponent from '../../components/modalComponent/modalComponent';
import { Animal } from '../../store/animal/animal.type';



type AnimalModalProps = {
    openModal: boolean;
    onClose: (value: boolean) => void;
};

const AnimalModal: React.FC<AnimalModalProps> = ({
    openModal,
    onClose,
}) => {
    const dispatch = useAppDispatch();
    const [idSenasa, setIdSenasa] = useState<string>('');
    const [typeAnimal, setTypeAnimal] = useState<string>('');
    const [weight, setWeight] = useState<number>(0);
    const [paddock, setPaddock] = useState<string>('');
    const [typeDevice, setType_device] = useState<string>('');
    const [numberDevice, setNumber_device] = useState<string>('');

    const isDisabled = () => {
        if (
            idSenasa === '' ||
            typeAnimal === '' ||
            paddock === '' ||
            typeDevice === '' ||
            numberDevice === '' ||
            idSenasa.length !== 16 ||
            numberDevice.length !== 8 ||
            paddock.length > 200
        ) {
            return true;
        }
        return false;
    };

    const saveSeniority = async () => {
        if (
            idSenasa?.trim() &&
            typeAnimal?.trim() &&
            paddock?.trim() &&
            typeDevice?.trim() &&
            numberDevice?.trim()
        ) {
            await dispatch(
                createAnimal({
                    idSenasa,
                    typeAnimal,
                    weight,
                    paddock,
                    typeDevice,
                    numberDevice
                })
            );
            await dispatch(getAnimals())
        }
    };


    return (
        <ModalComponent
            openModal={openModal}
            onClose={onClose}
            onSave={saveSeniority}
            isDisabled={isDisabled}
            title="Agregar Animal"
            acceptButtonText="Guardar"
            cancelButtonText="Cancelar"
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">ID Senasa</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={idSenasa}
                        onChange={(e) => setIdSenasa(e.target.value)}
                        required
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Tipo de Animal"
                        value={typeAnimal}
                        onChange={e => setTypeAnimal(e.target.value)}
                        helperText="Por favor selecciona el tipo de animal"
                        variant="standard"
                    >

                        <MenuItem key={0} value={'Novillo'}>
                            Novillo
                        </MenuItem>
                        <MenuItem key={1} value={'Toro'}>
                            Toro
                        </MenuItem>
                        <MenuItem key={2} value={'Vaquillona'}>
                            Vaquillona
                        </MenuItem>

                    </TextField>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Peso del Animal</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        required
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Nombre de Potrero</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={paddock}
                        onChange={(e) => setPaddock(e.target.value)}
                        required
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Tipo de Dispositivo"
                        value={typeDevice}
                        onChange={e => setType_device(e.target.value)}
                        helperText="Por favor selecciona el tipo de dispositivo"
                        variant="standard"
                    >

                        <MenuItem key={0} value={'COLLAR'}>
                            COLLAR
                        </MenuItem>
                        <MenuItem key={1} value={'CARAVANA'}>
                            CARAVANA
                        </MenuItem>

                    </TextField>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Numero de Dispositivo</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={numberDevice}
                        onChange={(e) => setNumber_device(e.target.value)}
                        required
                    />
                </FormControl>
            </Box>
        </ModalComponent>
    );
};

export default AnimalModal;

type AnimalModal2Props = {
    openModal2: boolean;
    onClose2: (value: boolean) => void;
    animal: Animal;
    edit: boolean;
};

export const AnimalModal2: React.FC<AnimalModal2Props> = ({
    openModal2,
    onClose2,
    animal,
}) => {

    const dispatch = useAppDispatch();
    const [idSenasa, setIdSenasa] = useState<string>(animal.idSenasa);
    const [typeAnimal, setTypeAnimal] = useState<string>(animal.typeAnimal);
    const [weight, setWeight] = useState<number>(animal.weight);
    const [paddock, setPaddock] = useState<string>(animal.paddock);
    const [typeDevice, setTypeDevice] = useState<string>(animal.typeDevice);
    const [numberDevice, setNumberDevice] = useState<string>(animal.numberDevice);

    const isDisabled = () => {
        if (
            idSenasa === '' ||
            typeAnimal === '' ||
            paddock === '' ||
            typeDevice === '' ||
            numberDevice === '' ||
            idSenasa.length !== 16 ||
            numberDevice.length !== 8 ||
            paddock.length > 200
        ) {
            return true;
        }
        return false;
    };


    const removeAnimal = async () => {
        if (animal._id !== undefined) {
            await dispatch(deleteAnimal(animal._id));
            await dispatch(getAnimals());
        }
    }

    const update = async () => {
        if (animal._id !== undefined &&
            idSenasa?.trim() &&
            typeAnimal?.trim() &&
            paddock?.trim() &&
            typeDevice?.trim() &&
            numberDevice?.trim()
        ) {
            await dispatch(
                updateAnimal(
                    animal._id,
                    {
                        idSenasa,
                        typeAnimal,
                        weight,
                        paddock,
                        typeDevice,
                        numberDevice
                    }
                )
            );
            await dispatch(getAnimals());
        }
    }



    return (
        <ModalComponent
            openModal={openModal2}
            onClose={onClose2}
            onSave={removeAnimal}
            onEdit={update}
            isDisabled={isDisabled}
            title="Animal"
            acceptButtonText="Aceptar"
            cancelButtonText="Cancelar"
            editButtonText="Editar"
            deleteButtonText="Eliminar"
            edit
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">ID Senasa</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={idSenasa}
                        onChange={(e) => setIdSenasa(e.target.value)}
                        required
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Tipo de Animal"
                        value={typeAnimal}
                        onChange={e => setTypeAnimal(e.target.value)}
                        helperText="Por favor selecciona el tipo de animal"
                        variant="standard"
                    >

                        <MenuItem key={0} value={'Novillo'}>
                            Novillo
                        </MenuItem>
                        <MenuItem key={1} value={'Toro'}>
                            Toro
                        </MenuItem>
                        <MenuItem key={2} value={'Vaquillona'}>
                            Vaquillona
                        </MenuItem>

                    </TextField>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Peso del Animal</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        required
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Nombre de Potrero</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={paddock}
                        onChange={(e) => setPaddock(e.target.value)}
                        required
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Tipo de Dispositivo"
                        value={typeDevice}
                        onChange={e => setTypeDevice(e.target.value)}
                        helperText="Por favor selecciona el tipo de dispositivo"
                        variant="standard"
                    >

                        <MenuItem key={0} value={'COLLAR'}>
                            COLLAR
                        </MenuItem>
                        <MenuItem key={1} value={'CARAVANA'}>
                            CARAVANA
                        </MenuItem>

                    </TextField>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Numero de Dispositivo</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={numberDevice}
                        onChange={(e) => setNumberDevice(e.target.value)}
                        required
                    />
                </FormControl>
            </Box>
        </ModalComponent >
    );
};
