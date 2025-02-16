<template>
    <div class="bg-white dark:bg-[#1F2937] rounded-xl p-8 sm:max-w-[80%]">
        <div class="flex flex-col">
            <div class="flex items-center">
                <a :href="experience.href">
                    <img :src="experience.logo" :alt="`${experience.companyName}`" class="w-[102px] h-[5rem] object-contain" />
                </a>
                <p class="font-semibold text-lg ml-3">{{ experience.companyName }}</p>
            </div>
            <div class="text-gray-600 dark:text-amber-700 mt-4 px-3 flex justify-between font-semibold">
                <p class="text-base">{{ experience.tenure }}</p>
                <p class="text-lg text-right">{{ experience.title }}</p>
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
    href: string;
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