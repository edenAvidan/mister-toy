<template>
    <section class="toy-filter">
        <el-input 
        @input="filter"
        v-model="filterBy.name"
        clearable
        placeholder="Search..." />

        <el-select v-model="filterBy.inStock" @change="filter">
            <el-option label="All" value="" />
            <el-option label="In stock" :value="true" />
            <el-option label="Not in stock" :value="false" />
        </el-select>

        <label-picker v-model="filterBy.labels" @change="filter"/>

        <el-select v-model="filterBy.sortBy" @change="filter">
            <el-option label="Sort By" value="" disabled/>
            <el-option label="Time" value="time"/>
            <el-option label="Name" value="name" />
            <el-option label="Price" value="price" />
        </el-select>
    </section>
</template>


<script>
import labelPicker from './label-picker.vue';

export default {
    name: 'toy-filter',
    data() {
        return {
            filterBy: {
                name: '',
                inStock: '',
                labels: [],
                sortBy: ''
            }
        }
    },
    components: {
        labelPicker
    },
    methods: {
        filter() {
            this.$store.dispatch({
                type: 'filter',
                filterBy: JSON.parse(JSON.stringify(this.filterBy))
            })
        }
    }
}
</script>


<style>
    
</style>