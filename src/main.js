import { createApp } from 'vue';

import newApp from './App.vue'

import FriendContacts from './components/FriendContacts.vue'



const app = createApp(newApp)
app.component('friend-contact', FriendContacts)
app.mount('#app');
