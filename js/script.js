const app = new Vue (
  {
    el: "#todo_section",
    data: {
      toDoList: ["Fare la spesa", "Pagare le bollette", "Completare l'esercizio Boolean", "Cucinare il pranzo", "Pulire la casa"],
      inputText: "",
    },
    methods: {
      deleteToDo: function(index) {
        this.toDoList.splice(index, 1);
      },
      addToDo: function() {
        this.visible = true;
        this.toDoList.push(this.inputText);
        this.inputText = "";
      },
      deleteAll: function() {
        this.toDoList = [];
      }
    }
  }
);
