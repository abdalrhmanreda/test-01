require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://abdalrhmanr935:BgUsY3ZYrdMElPdU@cluster0.klbnlsh.mongodb.net/beet-truck-management?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production',
    NODE_ENV: process.env.NODE_ENV || 'development'
}; 