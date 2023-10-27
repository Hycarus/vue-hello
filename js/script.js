const {createApp} = Vue
createApp({
// contiene tutti i dati / le variabili 
    data(){
        return {
            text: 'Buonanotte stelline!',
            image: "../img/stars.jpeg",
        }
    },
    // contiene le funzioni e i metodi
    methods: {
    }
}).mount('#app')