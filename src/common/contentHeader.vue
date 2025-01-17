<template>
    <div class="flex justify-center">
        <div class="flex justify-center px-5 py-1 mt-24 rounded-xl bg-gray-200 dark:bg-[#374151]">
            <p class="font-normal text-sm text-gray-600 dark:text-[#D1D5DB]">{{label}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label?: string
}>()
</script>