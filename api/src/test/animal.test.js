import request from 'supertest';
import app from '../app';
import jest from 'jest';
import { connectDB } from '../database';
import mongoose from 'mongoose';

describe('the routes from the api', () => {
    beforeAll((done) => {
        done();
    });

    afterAll((done) => {
        // close the DB connection.
        mongoose.connection.close();
        done();
    });

    //getAnimals
    test('responds to GET /animals', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .get('/animals')
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(200);
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    //getanimalbyidSenasa
    test('responds to /animal/:id GET', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .get('/animal/123')
                .send();
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(400);
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    //getAnimalById
    test('responds to /animal:id', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .get('/animalbyid/62cdc1b7f0c9da5a2db3a111')
                .send();
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(200);
            expect(res.body.animalFound._id).toEqual('62cdc1b7f0c9da5a2db3a111');
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    //deleteAnimal
    test('responds fail to DELETE /animal/:id ', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .delete('/animal/62c')
                .send();
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toEqual(
                'animal not found'
            );
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    //editAnimals
    test('responds fail to PUT /animal/:id ', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .put('/animal/123')
                .send({ weight: 123 });
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(400);
        } catch (e) {
            expect(e).toMatch('error');
        }
    });



    //createAnimal
    test('responds fail to post /animal/create ', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .post('/animal/')
                .send(
                    {
                        "typeAnimal": "Vaquillona",
                        "idSenasa": "1203456789abcdef",
                        "weight": 150,
                        "paddock": "Potrero 2",
                        "typeDevice": "CARAVANA",
                        "numberDevice": "12340abc"
                    }
                );
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toEqual(
                'Animal already exists'
            );
        } catch (e) {
            expect(e).toMatch('error');
        }
    });


});