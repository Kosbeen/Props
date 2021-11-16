<template>
  <li>
    <h2>{{ name }} {{ isBest ? "THE BEST ONE" : "" }}</h2>
    <button @click="toggleBestone">WHO`s THE BEST ONE BEACH</button>
    <button @click="toggleDetails">
      {{ friendDetails === true ? "Hide" : "Show" }}Detail
    </button>
    <ul v-if="friendDetails">
      <li>{{ phoneNumber }}</li>
      <li>{{ emailAdress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    isBest: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      friendDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.friendDetails = !this.friendDetails;
    },
    toggleBestone() {
      this.$emit("toggle-best", this.id);
    },
  },
};
</script>
