const axios = require('axios');

const resultsApi = async(req, res) => {

    //let {city} = req.body;
    
    let city = 'Rosario'

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric&lang=es`

    await axios({
        method: 'get',
        url,
      })
        .then((response) => {
          //res.json(response);
          console.log(response.data);
          res.json({msg: 'ok'})
        })
        .catch( (error) => {

          if (error) {
            res.json({msg: 'ups, something went wrong'})
          }

        })

}

module.exports = {
    resultsApi,
}