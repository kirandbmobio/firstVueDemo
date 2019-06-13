import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
      changeAge1(age){
        this.$emit('ageWasEdited',age);
      },
      changeRollN(rollnumber){
        this.$emit('rollNumberReset',rollnumber);
      }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
