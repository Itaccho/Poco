(function() {
    'use strict';
  
    var vm = new Vue({
      el: '#TodayTask',
      data: {
        name: 'sho',
        newItem: '',
        todaysTodos: []
      },
      watch: {
        todaysTodos: {
          handler: function() {
            localStorage.setItem('todaysTodos', JSON.stringify(this.todaysTodos));
          },
          deep: true
        }
      },
      mounted: function() {
        this.todaysTodos = JSON.parse(localStorage.getItem('todaysTodos')) || [];
      },
      methods: {
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.todaysTodos.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          this.todaysTodos.splice(index, 1);
        },
        purge: function() {
          if (!confirm('delete finished?')) {
            return;
          }
          this.todaysTodos = this.remaining;
        }
      },
      computed: {
        remaining: function() {
          return this.todaysTodos.filter(function(todaysTodo) {
            return !todaysTodo.isDone;
          });
        }
      }
    });
  })();
