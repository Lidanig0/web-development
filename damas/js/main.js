var Main = new Vue({
  el: '#app',
  data: {
    campos: []
  },
  methods: {
    geraTab: function () {
      alert("ddsaas");
      for (var i = 0; i < 8; i++) {
        var list = [];
        for (var j = 0; j < 8; j++) {
          list.push(" ");
        }
        this.campos.push(list);
      }
      for (var i = 0; i < this.campos.length; i++) {
        for (var j = 0; j < this.campos.length; j++) {
          if (i == 0){
            if (j % 2 == 0){
              this.campos[i][j] = "O";
            }
          } else if (i == 1){
            if (j % 2 != 0){
              this.campos[i][j] = "O";
            }
          } else if(i == 7){
            if (j % 2 != 0){
              this.campos[i][j] = "X";
            }
          } else if(i == 6){
            if (j % 2 == 0){
              this.campos[i][j] = "X";
            }
          }
        }
      }
      console.log(this.campos);
    }
  },
  created() {
    this.geraTab();
  },
  mounted: function () {
    //
  },
  updated: function(){
    //
  }
});
