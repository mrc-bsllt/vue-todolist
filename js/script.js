const app = new Vue (
  {
    el: "#todo_section",
    data: {
      toDoList: ["Fare la spesa", "Pagare le bollette", "Completare l'esercizio Boolean", "Cucinare il pranzo", "Pulire la casa"],
      inputText: "",
      toDoListIndex: -1
    },
    methods: {
      deleteToDo: function(index) {
        this.toDoListIndex = index;
        setTimeout(
          () => {
            this.toDoList.splice(index, 1);
            this.toDoListIndex = -1;
          }, 500);
      },
      addToDo: function() {
        this.toDoList.push(this.inputText);
        this.inputText = "";
      },
      deleteAll: function() {
        this.toDoList = [];
      }
    }
  }
);
