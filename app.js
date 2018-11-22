const app = new Vue({
  el: '#app',
  data: {
    message: 'Aplicación con VueJS',
    frutas: [
      {nombre: 'Manzana', cantidad: 10},
      {nombre: 'Durazno', cantidad: 11},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Sandia', cantidad: 0},
      {nombre: 'Melon', cantidad: 5},
    ],
    nuevaFruta: '',
    total: 0,
    fondo: 'bg-danger',
    color: false
  },
  methods: {
    agregarFruta () {
      this.frutas.push({
        nombre: this.nuevaFruta,
        cantidad: 0
      });
      this.nuevaFruta = '';
    }
  },
  computed: {
    sumarFrutas () {
      this.total = 0;
      for (const fruta of this.frutas) {
        this.total = this.total + fruta.cantidad;
      }

      return this.total;
    }
  }
});