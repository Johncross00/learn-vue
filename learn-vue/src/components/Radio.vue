<template>
    <h2>Radio</h2>
    <p>
        This is the radio component.
    </p>
    <button @click="sendMessage">Envoyer Message</button>
</template>
<script>
export default{
    name: 'RadioComp',
    methods: {
        sendMessage: function() {
            this.$emit("message-sent",{
                message: 'Hello from the radio component'
            }
        )
        }
    }
}
</script>