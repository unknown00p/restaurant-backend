export const config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    DATABASE_URL: process.env.DATABASE_URL || '',
    DIRECT_URL: process.env.DIRECT_URL || '',
    PROJECT_URL: process.env.PROJECT_URL || '',
    API_KEY: process.env.API_KEY || '',
    logLevel: 'info',
};