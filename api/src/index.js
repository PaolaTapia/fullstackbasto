import app from "./app.js";
import { connectDB } from './database.js';


const main = async () => {
    try {
        await connectDB();

        app.listen(app.get('port'), () => {
            console.log(`Server on port ${app.get('port')}`);
        });

    } catch (e) {
        console.log(e);
    }
};

main();

