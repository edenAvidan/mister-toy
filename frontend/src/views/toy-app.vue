<template>
    <section class="toy-app">
        <el-button type="success" @click="goToEdit">Add a new toy</el-button>
        <toy-filter />
        <toy-list :toys="toys"/>
    </section>
</template>


<script>
import toyList from '../components/toy-list.vue';
import toyFilter from '../components/toy-filter.vue';

export default {
    components: {
        toyList,
        toyFilter
    },
    methods: {
        goToEdit() {
            this.$router.push('/toy/edit');
        }
    },
    computed: {
        toys() {
            return this.$store.getters.toys;
        }
    }
}
</script>


<style>
    
</style>