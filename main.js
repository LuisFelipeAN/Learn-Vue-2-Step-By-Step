window.Event = new Vue();

Vue.component('coupon',{
    template:'<input placeholder="Code here" @blur="onCouponApplied">',
    methods:{
        onCouponApplied: function(){
            Event.$emit('applied');
        }
    }
})

const app = new Vue({
    el:'#root',
    data: {
        couponApplied:false
    },
    
    created(){
        Event.$on('applied',()=>alert('Handling it'))
    }
})