import { createClient } from 'redis';


const client = createClient({
    password: 'root12345',
    socket: {
        host: 'redis-19245.c267.us-east-1-4.ec2.cloud.redislabs.com',
        port: 19245
    }
})

client.on('connect', () => {
    console.log('Redis Client connected...');
})

client.on('error', err => console.log('Error Connecting to Redis Client :', err));

console.log('connecting...')
await client.connect();

process.on('SIGINT', async () => {
    console.log("  Graceful shutdown started...")
    await client.quit();
})

await client.hSet('Frameworks', {
    "Java": "Springboot",
    "Kotlin": "Ktor",
    "Javascript": "Angular"
})

let getFrameworks = await client.hGetAll('Frameworks')

console.log(JSON.stringify(getFrameworks))