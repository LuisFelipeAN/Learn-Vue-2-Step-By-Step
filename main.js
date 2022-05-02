Vue.component('coupon',{
    template:'<input placeholder="Code here" @blur="onCouponApplied">',
    methods:{
        onCouponApplied: function(){
            this.$emit('applied');
        }
    }
})

const app = new Vue({
    el:'#root',
    data: {
        couponApplied:false
    },
    methods:{
        onCouponApplied: function(){
           this.couponApplied=true;
        }
    }
})