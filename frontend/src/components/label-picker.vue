<template>
    <el-select-v2
        v-model="modelValue"
        :options="labels"
        placeholder="Add Labels"
        style="width: 240px"
        multiple
        clearable
        collapse-tags
        collapse-tags-tooltip
        @change="changeLabels"
        class="color-picker"
    />
</template>
<script>
export default {
    name: 'label-picker',
    props: {
        modelValue: Array
    },
    data() {
        return {
            labels: [
                {value: 'Doll', label: 'Doll'},
                {value: 'Battery Powered', label: 'Battery Powered'},
                {value: 'Baby', label: 'Baby'},
                {value: 'Outdoor', label: 'Outdoor'},
                {value: 'Puzzle', label: 'Puzzle'},
                {value: 'On Wheels', label: 'On Wheels'},
                {value: 'Box Game', label: 'Box Game'},
                {value: 'Art', label: 'Art'},
            ]
        }
    },
    methods: {
        changeLabels() {
            this.$emit('update:modelValue', this.modelValue);
        }
    },
}
</script>
<style lang="">
    
</style>