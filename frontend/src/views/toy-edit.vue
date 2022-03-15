<template>
    <section class="toy-edit">
        {{toyToEdit}}
        <h1>{{ addOrEdit }} Toy</h1>
        <el-form label-width="120px">
            <el-form-item label="Name">
                <el-input v-model="toyToEdit.name" />
            </el-form-item>

            <el-form-item label="Price">
                <el-input v-model.number="toyToEdit.price" />
            </el-form-item>

            <el-form-item label="In Stock">
                <el-select v-model="toyToEdit.inStock">
                    <el-option label="Yes" :value="true" />
                    <el-option label="No" :value="false" />
                </el-select>
            </el-form-item>

            <el-form-item label="Labels">
                <label-picker v-model="toyToEdit.labels" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="saveToy">Save</el-button>
                <el-button @click="goToToyApp">Go Back</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>


<script>
import { toyService } from '../services/toy-service.js';
import labelPicker from '../components/label-picker.vue';

export default {
    name: 'toy-edit',
    data() {
        return {
            toyToEdit: toyService.getEmptyToy(),
        }
    },
    components: {
        labelPicker
    },
    created() {
        const { toyId } = this.$route.params;
        if (toyId) {
            toyService.getById(toyId)
                .then(toy => this.toyToEdit = toy);
        }
    },
    methods: {
        saveToy() {
            this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit });
            this.goToToyApp();
        },
        goToToyApp() {
            this.$router.push('/');
        }
    },
    computed: {
        addOrEdit() {
            return this.$route.params.toyId ? 'Edit' : 'Add';
        }
    }
}
</script>


<style>
</style>