<template>
    <div>
      <ul id="example-1">
        <li v-for="t in teste" :key="t">{{ t }}</li>
      </ul>
        <div class="container">
            <div class="form-group">
            <label class="font-weight-bold">Atributo</label>
            <input type="text"
            class="form-control"
            placeholder="Type Your Name"
            v-model="atributo">
            </div>
            <div class="form-group">
            <button @click="submitNewTeste" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Teste
            </button>
          </div>
        </div>
    </div>
</template>

<script>
import TesteService from '../../services/TesteService';

export default {
  name: 'ListEmployeeComponent',
  data() {
    return {
      teste: [],
      atributo: '',
    };
  },
  mounted() {
    this.getTeste();
  },
  methods: {
    async getTeste() {
      const response = await TesteService.getTeste();
      this.teste = response;
    },

    async submitNewTeste() {
      try {
        this.isSubmitted = true;
        await TesteService.createNewTeste(this.atributo);
        this.getTeste();
      } catch (error) {
        console.log(error);
      }
    },

  },
};

</script>
