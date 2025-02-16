<template>
    <div class="flex justify-center">
        <div class="flex justify-center px-5 py-1 mt-12 rounded-xl bg-gray-200 dark:bg-[#374151]">
            <h2 class="dark:text-[#D1D5DB]">{{label}}</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label?: string
}>()
</script>