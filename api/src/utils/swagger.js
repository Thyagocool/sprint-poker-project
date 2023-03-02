const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Sprint poker api",
            description: "Alguma descrição",
            contact: {
                name: "",
                phone: ""
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: [
            "./src/routes/*.js"
        ]
}


export default swaggerOptions