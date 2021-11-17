<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input type="name" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    addContact() {
      this.$emit(
        "add-friend",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
