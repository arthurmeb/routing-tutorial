<template>
    <h1>{{ id }}'s profile</h1>
   
</template>

<script>
export default {
    data() {
        return{
            id: this.$route.params.id
        }   
    },
    }

</script>