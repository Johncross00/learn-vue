<template>
    <div class="child-container">
    <button @click="$emit('update-message', '🚀 Message modifié depuis l\'enfant !')">
      🔄 Changer le message du parent
    </button>
  </div>
</template>



<style scoped>
.child-container {
  margin-top: 20px;
}
button {
  background-color: green;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: darkgreen;
}
</style>