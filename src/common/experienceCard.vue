<template>
    <div class="bg-white dark:bg-[#1F2937] rounded-xl p-8 sm:max-w-[896px]">
        <div class="flex flex-col">
            <img :src="experience.logo" :alt="`${experience.companyName}`" class="w-[102px] object-contain" />
            <div class="text-gray-600 dark:text-[#D1D5DB] mt-4">
                <p class="font-normal text-base">{{ experience.tenure }}</p>
                <p class="font-semibold text-lg">{{ experience.title }}</p>
            </div>
            <ul class="font-normal text-base text-gray-600 dark:text-[#D1D5DB] list-disc mt-4 pl-6"
                v-for="responsibility in experience.responsibilities">
                <li>{{ responsibility }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Experience {
    logo: string;
    companyName: string;
    tenure: string;
    title: string;
    responsibilities: string[];
}

defineProps<{
    experience: Experience
}>()

</script>