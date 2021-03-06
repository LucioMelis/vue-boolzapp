console.log('Js Ok');

const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]

const app = new Vue({
    el: '#root',
    data: {
        contacts,
        indiceContatto: 0,
        testoInserito: '',
        ricercaUtente: ''
    },
    methods: {
        imgURLAvatar(avatarContatti) {
            return `img/avatar${avatarContatti.avatar}.jpg`
        },
        attivaContatto(index) {
            this.indiceContatto = index;
            console.log(this.indiceContatto)
        },
        immagineRandom(avatar) {
            return `img/avatar${avatar}.jpg`
        },
        ultimoMessaggio(oggettoMessaggi) {
            return oggettoMessaggi[oggettoMessaggi.length - 1].message
        },
        aggiungiClasse(status) {
            if (status === 'received') {
                return 'ricevuti'
            } else {
                return 'inviati'
            }
        },
        visualizzaMessaggi(messaggi) {
            const messaggio = messaggi.message;
            return messaggio
        },
        inserisciNuovoMessaggio(oggettoIndicizzato) {
            // console.log(oggettoIndicizzato);
            const nuovoMessaggio = {
                date: `10/01/2020 ${this.orarioLive()}`,
                message: this.testoInserito,
                status: 'sent'
            }
            if (this.testoInserito.length > 0) {
                oggettoIndicizzato.push(nuovoMessaggio);
                this.testoInserito = '';
                setTimeout(this.rispostaAlMessaggio, 1000);
            }
        },
        rispostaAlMessaggio() {
            const rispondi = {
                date: `10/01/2020 ${this.orarioLive()}`,
                message: 'Ok, ci sentiamo domani!',
                status: 'received'
            }
            this.contacts[this.indiceContatto].messages.push(rispondi);
        },
        utenteRicercato() {
            this.contacts.forEach(element => {
                const nomi = element.name.toLowerCase();
                console.log(nomi)
                element.visible = nomi.includes(this.ricercaUtente.toLowerCase());
            });
        },
        ultimaDataOrario(oggettoMessaggi) {
            return oggettoMessaggi[oggettoMessaggi.length - 1].date;
        },
        orarioMessaggi(messaggiIndicizzati) {
            return messaggiIndicizzati.date.slice(11, 19);
        },
        orarioLive() {
            let today = new Date();
            let hh = String(today.getHours()).padStart(2, '0');
            let mm = String(today.getMinutes()).padStart(2, '0');
            let ss = String(today.getSeconds()).padStart(2, '0');
            return today = hh + ':' + mm + ':' + ss;
        }
    }
})
