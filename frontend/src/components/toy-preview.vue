<template>
        <el-card class="toy-preview">
            <template #header>
                <section class="card-header">
                    <span>{{toy.name}}</span>
                </section>
            </template>

            <p>Price: {{toy.price}}</p>
            <p :style="stockColor">{{toyStockStatus}}</p>

            <section class="actions">
                <el-button type="primary" @click="goToRoute('details')">Details</el-button>
                <el-button type="info" @click="goToRoute('edit')">Edit</el-button>
                <el-button type="danger" @click="removeToy(toy._id)">Remove</el-button>
            </section>
        </el-card>
</template>

<script>
export default {
    name: 'toy-preview',
    props: {
        toy: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeToy(toyId) {
            this.$emit('removeToy', toyId);
        },
        goToRoute(routeName) {
            this.$router.push(`/toy/${routeName}/${this.toy._id}`)
        }
    },
    computed: {
        toyStockStatus() {
            return this.toy.inStock ? 'In Stock' : 'Not Currently In Stock'
        },
        stockColor() {
            return this.toy.inStock ? 'color: #67C23A' : 'color: #F56C6C'
        }
    }
}
</script>

<style lang="">

</style>