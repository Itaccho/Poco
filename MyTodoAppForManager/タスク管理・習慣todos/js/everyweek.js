(function() {
    'use strict';
  
    var vm = new Vue({
      el: '#EveryWeekTask',
      data: {
        name: '',
        newItem: '',
        weekTodos: []
      },
      watch: {
        weekTodos: {
          handler: function() {
            localStorage.setItem('weekTodos', JSON.stringify(this.weekTodos));
          },
          deep: true
        }
      },
      mounted: function() {
        this.weekTodos = JSON.parse(localStorage.getItem('weekTodos')) || [];
      },
      methods: {
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.weekTodos.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          this.weekTodos.splice(index, 1);
        },
        purge: function() {
          if (!confirm('delete finished?')) {
            return;
          }
          this.weekTodos = this.remaining;
        }
      },
      computed: {
        remaining: function() {
          return this.weekTodos.filter(function(weekTodo) {
            return !weekTodo.isDone;
          });
        }
      }
    });
  })();