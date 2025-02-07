<template>
  <div class="radio-container">
    <h2 class="radio-title">Radio</h2>
    <p class="radio-description">
        This is the radio component.
    </p>
    <button @click="sendMessage" class="send-btn">Envoyer Message</button>
  </div>
</template>

<script>
export default{
    name: 'RadioComp',
    methods: {
        sendMessage() {
            this.$emit("message-sent", {
                message: 'Hello from the radio component'
            });
        }
    }
}
</script>

<style scoped lang="scss">
.radio-container {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.radio-title {
  font-size: 24px;
  color: #212121;
}

.radio-description {
  font-size: 16px;
  color: #757575;
  margin-bottom: 20px;
}

.send-btn {
  background-color: #2196F3;
  color: white;
  border-radius: 50px;
  padding: 12px 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.send-btn:hover {
  background-color: #1976D2;
  transform: scale(1.05);
}
</style>
