<template>
    <div>
        <p>{{ currentData }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text : 'hi',
                message : 'there',
                boolSwitch : true
            }
        },

        computed : {
            currentData() {
                return this.boolSwitch ? this.text : this.message
            }
        },

        methods : {
            toggleData() {
                this.boolSwitch =! this.boolSwitch;
            }
        },

        mounted() {
            setInterval(() => {
                this.toggleData();
            }, 1000)
        }
    }
</script>

<style scoped>
    .bigDiv {
        font-size: large;
    }
</style>