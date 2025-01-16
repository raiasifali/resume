
<template>
    <button :type="type || 'button'"
        class="bg-gray-900 dark:bg-[#F9FAFB] rounded-lg py-1.5 px-4 font-medium text-base text-gray-50 dark:text-[#111827] w-full"
        @click="$emit('click')">
        <slot>{{ label }}</slot>
    </button>
</template>

<script setup lang="ts">
    defineProps <{
        label?: string,
        type?: "button" | "submit" | "reset"
    }>()
    defineEmits(["click"])
</script>