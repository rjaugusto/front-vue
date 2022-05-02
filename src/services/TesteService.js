import Api from './Api';

export default {

  async getTeste() {
    try {
      const response = await Api().get('/teste');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async createNewTeste(atributo) {
    console.log(atributo);
    try {
      const response = await Api().post('/teste', atributo);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
