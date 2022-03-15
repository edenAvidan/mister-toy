<template>
    <section v-if="toy" class="toy-details">
        <h1>Toy Details</h1>
        <p>ID: {{toy._id}}</p>
        <p>Name: {{toy.name}}</p>
        <p>Price: {{toy.price}}</p>
        <p>Created At: {{formattedTime}}</p>
        <p>Labels:</p>
        <ul>
            <li v-for="label in toy.labels" :key="label">
                {{label}}
            </li>
        </ul>
    </section>
</template>


<script>
import { toyService } from '../services/toy-service.js';

export default {
    name: 'toy-details',
    data() {
        return {
            toy: null
        }
    },
    created() {
        const { toyId } = this.$route.params;
        toyService.getById(toyId)
            .then(toy => {
                console.log(toy);
                this.toy = toy
            });
    },
    computed: {
        formattedTime() {
            return new Date(this.toy.createdAt).toLocaleString();
        }
    }
}
</script>


<style>
    
</style>