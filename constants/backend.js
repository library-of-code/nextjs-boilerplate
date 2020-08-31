export default (process.env.NODE_ENV === 'production') 
    ? 'http://<your_production_url>'
    : 'http://cms:1337'