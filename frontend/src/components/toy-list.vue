<template >
    <ul class="toy-list">
        <toy-preview v-for="toy in toys" :key="toy._id" :toy="toy" @removeToy="removeToy"/>
    </ul>
</template>


<script>
import toyPreview from './toy-preview.vue';

export default {
    name: 'toy-list',
    props: {
        toys: {
            type: Array,
            required: true
        }
    },
    components: {
        toyPreview
    },
    methods: {
        removeToy(toyId) {
            this.$store.dispatch({type: 'removeToy', toyId});
        }
    }
}
</script>


<style>
    
</style>