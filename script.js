// coposant racine
const RootComponent = {
  data() {
    return {
      netannuel: 0,
      brutannuel: 0,
      cadre: false,
      brutmensuel: 0,
    };
  },
  methods: {
    annuelNet(e) {
      this.netannuel = e.target.value;
      this.brutannuel = e.target.value;
      this.brutmensuel = e.target.value;
    },
    // changement statu cadre ou non cadre
    cadre(e) {
      this.cadre = e.target.checked;
    },
  },
  //   propreite caclculer
  compuned: {
    netannuel() {
      if (this.cadre === true) {
        return this.brutannuel * 0, 75;
      }
      return this.brutannuel * 0, 78;
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
            <td>Salaire brut <input type="number" @input = "annuelNet"/>€</td>
            <td>{{netannuel}}€</td>
        </tr>
        <tr>
            <td>Mensuel</td>
            <td>{{brutmensuel}}€</td>
            <td>{{brutannuel}}€</td>
        </tr>
        </table>

        <input type="checkbox" />
        <label for="label">cadre</label>
    <table>
    `,
};
Vue.createApp(RootComponent).mount("#root");
