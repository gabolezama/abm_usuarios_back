import sequelize from "../libs/sequelize.js";
export class UsersService {
  
    constructor() {}

  async create(data) {
    const newUser = await sequelize.models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await sequelize.models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id);
    if(!user){
      throw new Error('user not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = user.update(changes)
    return rta
  }

  async delete(id) {
    await sequelize.models.User.destroy({
        where: {
          id
        },
      });
    return { id };
  }
}