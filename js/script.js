const app = new Vue (
  {
    el: "#todo_section",
    data: {
      toDoList: ["Fare la spesa", "Pagare le bollette", "Completare l'esercizio Boolean", "Cucinare il pranzo", "Pulire la casa"],
      visible: true
    },
    methods: {
      deleteToDo: function() {
        this.visible = false;
      }
    }
  }
);
