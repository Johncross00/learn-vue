<template>
  <CustomBanner>
    <template v-slot:top>
      <span>🔝</span>
    </template>
    <template v-slot:bottom>
      <span>⬇️</span>
    </template>
    <p>
      <span>⬅️</span>
      lorem ipsum dolor sit amet
      <span>➡️</span>
    </p>
  </CustomBanner>
  <p>(from mapState) My birthday is : {{ day }}/ {{ month }}/ {{ year }}</p>
  <p>(from mapGetter) My birthday is : {{ formattedDate }}</p>
  <button @click="incrementDay">(from mutation) Add Day +</button>
  <hr>
  <button @click="incrementMonth">Add Month</button>
  <div class="container">
    <h1>👨‍👩‍👦 Communication Parent - Enfant</h1>
    <h2>📢 Message du parent : <span class="message">{{ messageParent }}</span></h2>

    <!-- Intégration du composant enfant -->
    <ChildComponent @update-message="updateMessage" />
  </div>
  <div id="receiver">
    <Receiver />
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import CustomBanner from "./components/CustomBanner.vue";
import Receiver from "./components/Receiver.vue";
import ChildComponent from "./components/ChildComponent.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  components: {
    Receiver,
    CustomBanner,
    ChildComponent,
  },
  data() {
    return {
      messageParent: "👋 Bonjour, je suis le parent !" // Message par défaut
    };
  },
  methods: {
    updateMessage(nouveauMessage) {
      this.messageParent = nouveauMessage; // Mise à jour du message
    },
    // incrementDay(){
    //   this.$store.commit('INCREMENT_DAY')
    // },
    ...mapMutations(['INCREMENT_DAY']),
    // incrementMonth(){
    //   this.$store.dispatch('incrementMonth')
    // },
    ...mapActions(['incrementMonth'])
  },
  computed: {
    ...mapState(['day', 'month', 'year']),
    ...mapGetters(['formattedDate'])
  }
};
</script>

<style lang="scss">

.container {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}
.message {
  color: blue;
  font-weight: bold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
