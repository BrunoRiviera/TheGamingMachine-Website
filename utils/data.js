const request = require('postman-request');

const getAllGames = (callback) => {
    request('http://localhost:3001/games', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}


module.exports= {
 
  getAllGames

}

