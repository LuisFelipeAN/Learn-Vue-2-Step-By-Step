Vue.component('message',{
    props: ['title', 'body'],
    template:`<article class="message" v-show="isVisible">
    <div class="message-header">
      <p>{{title}}</p>
      <button class="delete" aria-label="delete" @click="hideModal"></button>
    </div>
    <div class="message-body">
        {{body}}
    </div>
  </article>`,
  data(){
      return{
          isVisible: true
      }
  },
  methods: {
      hideModal: function(){
          this.isVisible=false;
      }
  }


})
Vue.component('task',{
    template:'<li><slot></slot></li>'
})
const app = new Vue({
    el:'#root',
})