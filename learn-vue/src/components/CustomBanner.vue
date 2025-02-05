<template>
    <div class="banner">
        <span v-if="topIcon" :class="topIcon">{{ topIcon }}</span>
        <p>
            <span v-if="leftIcon" :class="leftIcon">{{ leftIcon }}</span>
            {{ text }}
            <span v-if="rightIcon" :class="rightIcon">{{ rightIcon }}</span>
        </p>
        <span v-if="bottomIcon" :class="bottomIcon">{{ bottomIcon }}</span>
    </div>

</template>


<script>
export default{
    name: "CustomBanner",
    props:{
        topIcon: String,
        leftIcon: String,
        rightIcon: String,
        bottomIcon: String,
        text: String
    }
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