var app1 = new Vue ({
    el: "#app1",
    data: {
        message: "Tôi tên là Trung Nguyễn",
        a: true
    }
});

var app3 = new Vue({
    el: "#app2",
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});

var vm = new Vue({
    el: "#app",
    data: {
        question: '',
        response: '',
        products: []
    },
    watch: {
        question: function(newValue){
            if (newValue.indexOf("products") > -1){
                // https://hplussport.com/api/products
                // Customer Ask: how about those products?
                // Virtual Assistant reply: list product
                this.response = 'Sure, i can list the products for you';
                $.getJSON('https://hplussport.com/api/products')
                    .done((data) => {
                        vm.products = data;
                    })
            }
            else
            {
                this.response = 'Sorry, i don\'t unserstand that question';
                this.products = [];
            }
        }
    }
});