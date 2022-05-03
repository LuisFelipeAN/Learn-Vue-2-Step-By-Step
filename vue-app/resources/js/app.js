import Vue from 'vue'
import axios from 'axios'
import Form from './core/Form.js'
import Example from './components/Example.js'

window.axios = axios;
window.Form=Form;

new Vue({
    el:'#app',
    components:{
        Example
    },
    data: {
        form: new Form(
            {   name:'',
                description:'',
            })
    },
    methods: {
        onSubmit: function(){
           this.form.submit('post','/projects').then(data=> console.log(data)).catch(error=> console.log(error))
        },
    }
})
