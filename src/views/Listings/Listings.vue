<template>
    <h1>Find your braider</h1>
    <div v-for="braider in braiders" :key="braider.id">
        <router-link :to="{name: 'listingDetails', params: {id: braider.id}}"> 
            <p>Braider: {{ braider.name }}</p>
        </router-link>    
    </div>
</template>

<script>
export default {
    data() {
        return{
            braiders: []
        }   
    },
    mounted() {
        fetch('http://localhost:3000/listings')
            .then(res => res.json())
            .then(data => this.braiders = data)
            .catch(err => console.log(err.message)),
            this.braiders.forEach(braider => {braider.id = braider.name})
    }
}
</script>