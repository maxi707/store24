<template>
    <select class="form-select" :value="modelValue" @change="changeValue">
        <option disabled value="">Select</option>
        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value">
        {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'BaseSelect',
    props: {
        options: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: String
        }
    },
    methods: {
        changeValue(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>

</style>