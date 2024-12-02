
const todoList = {
    data(){
        return{
            tarefas: [],
            newTarefa: {
                
            }
        }
    },
    methods: {
        addTarefa:  function(){
         if(this.newTarefa.description){
            this.tarefas.push(this.newTarefa)
            this.newTarefa= {}

            //Salvando no localStorage
            localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
         }
         else{
            alert("Insira alguma tarefa antes de tentar adicionar")
         }
        },
        storeTarefas(){
                localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
        }
    },

    created(){
       this.tarefas = localStorage.getItem("tarefas") ?  JSON.parse(localStorage.getItem("tarefas") )  : this.tarefas;
    },
   
   
} 

Vue.createApp(todoList).mount('#app')
