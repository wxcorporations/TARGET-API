
import mongoose from 'mongoose';

// Conexão para o primeiro MongoDB
// const conn1 = mongoose.createConnection('mongodb://mongo:27017/meubanco');


// // Models separados para cada banco
// const Model1 = conn1.model('Model1', schema1);
// const Model2 = conn2.model('Model2', schema2);

const uri = 'mongodb://mongo:27017/meubanco'

const config = {
    connect: () => {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => { console.log('MongoDB conectado!') })
            .catch((err) => { console.error('Erro ao conectar:', err) });
    }
}


export default config