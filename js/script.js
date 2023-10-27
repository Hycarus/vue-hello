const {createApp} = Vue
createApp({
// contiene tutti i dati / le variabili 
    data(){
        return {
            text: 'Buonanotte stelline!',
            image: "../img/stars.jpeg",
            backgroundImage: "background-image: url(../img/stars.jpeg); background-repeat: no-repeat; background-size: cover; background-position: center;",
            textColor: "text-light",
        }
    },
    // contiene le funzioni e i metodi
    methods: {
    }
}).mount('#app')