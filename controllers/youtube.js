require('dotenv').config();
const {google} = require('googleapis');
const youtube = google.youtube({
  version: 'v3',
  auth:process.env.API_KEY
})

const searchfromyoutube  = async (req, res, next) => {
    try {
        const query = req.query.search_item;
           
            const response = await youtube.search.list({
                part: 'snippet',
                q: query,
                type: 'video',
                maxResults: 2,
                sort:'-date'
            
              });
            //   res.send(response.data.items);
         const {title,description} = response.data.items;
         const obj = {
            title,
            description
         }
         res.send(obj);
           
       } catch (error) {
        next(error);
       }
}

module.exports = { searchfromyoutube };