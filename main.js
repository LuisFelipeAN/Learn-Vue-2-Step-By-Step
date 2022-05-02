Vue.component('modal',{
    template:`<div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            <p>
                <slot></slot>
            </p>    
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>`,
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
    data: {
        showModal:false
    }
})