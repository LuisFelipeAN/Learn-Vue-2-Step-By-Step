Vue.component('task-list',{
    template:'<div><task v-for="task in tasks">{{task.description}}</task></div>',

    data(){
        return{
            tasks: [
                {description: 'Task 1', completed: true},
                {description: 'Task 2', completed: false},
                {description: 'Task 3', completed: true},
                {description: 'Task 4', completed: false},
                {description: 'Task 5', completed: true},
            ]
        }
    }

})
Vue.component('task',{
    template:'<li><slot></slot></li>'
})
const app = new Vue({
    el:'#root',
})