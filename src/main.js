import { createApp } from 'vue';

import newApp from './App.vue'

import FriendContacts from './components/FriendContacts.vue'
import NewFriend from './components/NewFriend.vue'


const app = createApp(newApp)
app.component('friend-contact', FriendContacts)
app.component('add-contact', NewFriend)
app.mount('#app');
