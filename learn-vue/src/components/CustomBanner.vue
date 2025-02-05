<template>
    <div class="banner">
        <slot name="top"></slot>
        <slot></slot>
        <slot name="bottom"></slot>
    </div>

</template>


<script>
export default{
    name: "CustomBanner",
}


</script>
<style>
.banner {
    background-color: rgba(0, 128, 0, 0.789);
    color: white;
    padding: 20px;
    margin: 20px;
}
</style>