<template>
  <div class="receiver-container">
    <h1 class="receiver-title">Récepteur</h1>
    <p class="receiver-description">
        This is the receiver component.
    </p>
    <h6 class="receiver-message">{{ message }}</h6>

    <Radio @message-sent="updateMessage" />
  </div>
</template>

<script>
import Radio from './Radio.vue';

export default {
    name: 'ReceiverComp',
    components: {
        Radio,
    },
    methods: {
        updateMessage(payload) {
            this.message = payload.message;
        }
    },
    data() {
        return {
            message: 'Pas de message'
        };
    }
}
</script>

<style scoped lang="scss">
.receiver-container {
  background-color: #f4f4f4;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;
}

.receiver-title {
  font-size: 24px;
  font-weight: 600;
  color: #212121;
}

.receiver-description {
  font-size: 16px;
  color: #757575;
}

.receiver-message {
  color: #FF5722;
  font-weight: bold;
}
</style>
