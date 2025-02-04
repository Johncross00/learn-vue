<template>
    <h1>Récepteur</h1>
    <p>
        This is the receiver component.
    </p>
    <h6>{{ message }}</h6>

    <Radio @message-sent="updateMessage" />
</template>

<script>
import Radio from './Radio.vue';
export default {
    name: 'ReceiverComp',
    components: {
        Radio,
    },
    methods: {
        updateMessage: function(payload) {
            this.message = payload.message;
        }
    },
    data: function() {
        return {
            message: 'Pas de message'
        }
    },
}

</script>

<style scoped lang="scss"></style>