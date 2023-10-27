const {createApp} = Vue
createApp({
// contiene tutti i dati / le variabili 
    data(){
        return {
            text: 'Buonanotte stelline!',
            image: "../img/stars.jpeg",
            backgroundImage: "background-image: url(../img/stars.jpeg)",
            textColor: "text-light",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
    },
    // contiene le funzioni e i metodi
    methods: {
    }
}).mount('#app')