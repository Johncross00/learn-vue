<template>
  <div class="banner">
    <slot name="top"></slot>
    <slot></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: "CustomBanner",
}
</script>

<style>
.banner {
  background: linear-gradient(135deg, #42b983, #a8d08d);
  color: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 0.3s ease-in-out;
}

.banner:hover {
  background-color: #58a764;
}
</style>
