// composant racine
const RootComponent = {
  //data proporty
  data() {
    return {
      annuelsalarybrut: 0, //salaire brut
      iscadre: false, //statut
    };
  },
  methods: {
    setannuelsalarybrut(e) {
      // modification de la valeur de salaire but annuel
      this.annuelsalarybrut = e.target.value;
    },
    // changement statu cadre ou non cadre
    setcadre(e) {
      this.iscadre = e.target.checked;
    },
  },
  //   proprietes caclculées
  compuned: {
    //salaire net annuel
    annuelsalarynet() {
      if (this.cadre === true) {
        return this.brutannuel * 0.75;
      }
      return this.brutannuel * 0.78;
    },

    //salaire mensuel brut

    mensuelbrut() {
      return this.brutannuel / 12;
    },
    // salaire mensuel net
    mensuelnet() {
      if (this.cadre) {
        return this.mensuelbrut * 0.75;
      }
      return this.mensuelbrut * 0.78;
    },
  },
  template: `
    <table>
        <tr>
            <td></td>
            <td>Brut</td>
            <td>net</td>
        </tr>
        <tr>
            <td>Annuel</td>
            <td>Salaire brut <input type="number" @input = "setannuelsalarybrutt!"/>€</td>
            <td>{{brutannuel}}€</td>
        </tr>
        <tr>
            <td>Mensuel</td>
            <td>{{brutmensuel}}€</td>
            <td>{{annuelnet}}€</td>
        </tr>
        </table>

        <input  id= "cadre" type="checkbox" @change="setcadre"/>
        <label for="label">cadre</label>
    <table>
    `,
};
Vue.createApp(RootComponent).mount("#root");
