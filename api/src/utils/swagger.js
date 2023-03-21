const swaggerAutogen = require("swagger-autogen")

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Sprint poker api",
            description: "Alguma descrição",
            contact: {
                name: "",
                phone: ""
            },
            servers: ["http://localhost:3001"]
        }
    },
    options : {
        openapi: true,          // Enable/Disable OpenAPI. By default is null
        language: 'en-US',         // Change response language. By default is 'en-US'
        disableLogs: true,     // Enable/Disable logs. By default is false
        autoHeaders: true,     // Enable/Disable automatic headers capture. By default is true
        autoQuery: true,       // Enable/Disable automatic query capture. By default is true
        autoBody: true         // Enable/Disable automatic body capture. By default is true
    },
    
    apis: [
            
        ]
}

const outputFile = "./src/utils/swagger-output.json"
const endpointsFiles = [
                        "./src/routes/*Routes.js" 
                    ]

// swaggerAutogen(outputFile, endpointsFiles, swaggerOptions.swaggerDefinition)

   swaggerAutogen(swaggerOptions.options)(outputFile, endpointsFiles, swaggerOptions.swaggerDefinition).then(async () => {
    await import('../app.js') // Your project's root file
  })

module.exports = swaggerOptions