export default (process.env.NODE_ENV === 'production') 
    ? 'http://<your_production_url>'
    : 'http://localhost:1337'