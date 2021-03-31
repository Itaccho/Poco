(function() {
    'use strict';
  
    var vm = new Vue({
      el: '#EverydayTask',
      data: {
        name: '',
        newItem: '',
        Everydaytodos: []
      },
      watch: {
        Everydaytodos: {
          handler: function() {
            localStorage.setItem('Everydaytodos', JSON.stringify(this.Everydaytodos));
          },
          deep: true
        }
      },
      mounted: function() {
        this.Everydaytodos = JSON.parse(localStorage.getItem('Everydaytodos')) || [];
      },
      methods: {
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.Everydaytodos.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          this.Everydaytodos.splice(index, 1);
        },
        purge: function() {
          if (!confirm('delete finished?')) {
            return;
          }
          this.Everydaytodos = this.remaining;
        }
      },
      computed: {
        remaining: function() {
          return this.Everydaytodos.filter(function(Everydaytodo) {
            return !Everydaytodo.isDone;
          });
        }
      }
    });
  })();