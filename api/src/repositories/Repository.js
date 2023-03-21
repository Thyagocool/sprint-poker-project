class Repository{
    constructor(model){
        this._model = model
    }

    async selectAll() {
        console.log(this.model)
        const data = await this._model.findAll();
        return data
    }

    async findOneById(id) {
        const data = await this._model.findByPk(id)
        return data
    }

    async insertDataModel(data) {
        const resultSet = await this._model.create(data)
        if(resultSet){
            return resultSet
        }else{
            return {message: "erro"}
        }
    }

    async updateModel(id, data) {
        const resultSet = await this._model.update(data,{
            where: {
              id: id
            }
        })
        
        if(resultSet){
            return resultSet
        }else{
            return {message: "erro"}
        }
    }

    async deleteModel(id){
        const data = await this.findOneById(id)
        const resultSet = await this._model.destroy({ where: {
            id:id
        }})

        if(resultSet){
            return resultSet
        }else{
            return {message: "erro"}
        }
    }
}

module.exports = Repository