(function () {
    'use strict';

    const app = new Vue({
        el: '#app',
        data: {
            loading: false,
            people: [],
            next: null,
            count: null
        },
        created() {
            this.getPeople();
        },
        methods: {
            getPeople(url = 'https://swapi.co/api/people') {
                this.loading = true;
                fetch(url)
                    .then(response => response.json())
                    .then(json => {
                        this.next = json.next;
                        this.count = json.count;
                        this.people.push(...json.results);
                        this.loading = false;
                    });
            },
            loadMore() {
                this.getPeople(this.next);
            }
        }
    });
})();