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

  <p class="date-info">(from State) My birthday is : {{ day }}/ {{ month }}/ {{ year }}</p>
  <p class="date-info">(from Getter) My birthday is : {{ formattedDate }}</p>

  <!-- Bouton avec effet Material Design -->
  <button @click="INCREMENT_DAY" class="action-btn">(from Mutation) Add Day +</button>
  
  <hr>
  
  <button @click="incrementMonth" class="action-btn">(from Action) Add Month</button>
  
  <p class="real-name">My real name is ktm but with a upperCase function with Getters: {{ uppercaseName }}</p>

  <div class="container">
    <h1 class="title">👨‍👩‍👦 Communication Parent - Enfant</h1>
    <h2 class="message-parent">📢 Message du parent : <span class="message">{{ messageParent }}</span></h2>

    <!-- Intégration du composant enfant -->
    <ChildComponent @update-message="updateMessage" />
  </div>

  <div id="receiver">
    <Receiver />
  </div>

  <nav>
    <router-link to="/" class="nav-link">Home</router-link> |
    <router-link to="/about" class="nav-link">About</router-link>
  </nav>

  <router-view />
</template>

<script>
import CustomBanner from "./components/CustomBanner.vue";
import Receiver from "./components/Receiver.vue";
import ChildComponent from "./components/ChildComponent.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Receiver,
    CustomBanner,
    ChildComponent,
  },
  data() {
    return {
      messageParent: "👋 Bonjour, je suis le parent !"
    };
  },
  methods: {
    updateMessage(nouveauMessage) {
      this.messageParent = nouveauMessage;
    },
    ...mapMutations(['INCREMENT_DAY']),
    ...mapActions(['incrementMonth']),
  },
  computed: {
    ...mapState(['day', 'month', 'year']),
    ...mapGetters(['formattedDate', 'uppercaseName']),
  }
};
</script>

<style lang="scss">
/* Styles généraux */
.container {
  text-align: center;
  margin-top: 50px;
  font-family: 'Roboto', sans-serif;
}

.message-parent {
  font-size: 18px;
  font-weight: 600;
  color: #212121;
}

.message {
  color: #FF5722;
  font-weight: bold;
}

.date-info {
  color: #2196F3;
  font-size: 18px;
  margin: 10px 0;
}

/* Boutons style Material Design */
.action-btn {
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  padding: 12px 25px;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.action-btn:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.real-name {
  font-size: 18px;
  color: #333;
}

/* Navigation style */
nav {
  padding: 30px;
}

.nav-link {
  font-weight: 600;
  color: #2c3e50;
  text-decoration: none;
}

.nav-link:hover {
  color: #42b983;
}

#receiver {
  margin-top: 50px;
}
</style>
