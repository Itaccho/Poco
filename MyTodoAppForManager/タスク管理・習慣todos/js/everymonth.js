(function() {
    'use strict';
  
    var vm = new Vue({
      el: '#EveryMonthTasks',
      data: {
        name: '',
        newItem: '',
        EveryMonthtodos: []
      },
      watch: {
        EveryMonthtodos: {
          handler: function() {
            localStorage.setItem('EveryMonthtodos', JSON.stringify(this.EveryMonthtodos));
          },
          deep: true
        }
      },
      mounted: function() {
        this.EveryMonthtodos = JSON.parse(localStorage.getItem('EveryMonthtodos')) || [];
      },
      methods: {
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.EveryMonthtodos.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          this.EveryMonthtodos.splice(index, 1);
        },
        purge: function() {
          if (!confirm('delete finished?')) {
            return;
          }
          this.EveryMonthtodos = this.remaining;
        }
      },
      computed: {
        remaining: function() {
          return this.EveryMonthtodos.filter(function(EveryMonthtodo) {
            return !EveryMonthtodo.isDone;
          });
        }
      }
    });
  })();