//Model
import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    //(Alfanumeric 16 chars)
    idSenasa: {
        type: String,
        maxlength: [16, 'idSenasa debe tener al menos 16 caracteres'],
        minlength: [16, 'idSenasa debe tener como máximo 16 caracteres'],
        required: [true, 'idSenasa es requerido'],
        unique: [true, 'idSenasa ya existe'],
        index: true,
        trim: true,
    },
    //(Novillo, Toro, Vaquillona)
    typeAnimal: {
        type: String,
        trim: true,
        enum: {
            values: ["Novillo", "Vaquillona", "Toro"],
            message: "{VALUE} no es válido. El tipo de animal debe ser Novillo, Vaquillona o Toro",
        },
        required: [true, 'Tipo animal es requerido']
    },
    //(kg)
    weight: {
        type: Number,
        trim: true,
        required: [true, 'Peso es requerido'],
    },
    //(Nombre del potrero: Text up to 200 chars)
    paddock: {
        type: String,
        maxlength: [200, 'El potrero debe tener al menos 200 caracteres'],
        required: [true, 'Potrero es requerido'],
        trim: true
    },
    //(COLLAR, CARAVANA)
    typeDevice: {
        type: String,
        trim: true,
        enum: {
            values: ["COLLAR", "CARAVANA"],
            message: "{VALUE} no es válido. El tipo de dispositivo debe ser COLLAR o CARAVANA",
        },
        required: [true, 'tipo es requerido']
    },
    //(Alfanumeric 8 caracteres)
    numberDevice: {
        type: String,
        maxlength: [8, 'El Nro. de dispositivo debe tener al menos 8 caracteres'],
        minlength: [8, 'El Nro. de dispositivo debe tener como máximo 8 caracteres'],
        required: [true, 'Nro. dispositivo es requerido'],
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true,
    },
},
    {
        timestamps: true,
        collection: 'animals',
        versionKey: false,
    }
);

//nombre del modelo y el esquema
export default mongoose.model("animals", animalSchema);