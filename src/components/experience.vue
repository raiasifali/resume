<template>
    <div class="w-full bg-gray-50 dark:bg-[#111827] px-4 pb-20">
        <ContentHeader label="Experience" />
        <p class="font-normal text-lg text-gray-600 dark:text-[#D1D5DB] text-center mt-4">Here is a quick summary of my
            most recent experiences:</p>
            <div v-for="(experience, index) in experienceData" :key="index" class="mt-7 sm:flex sm:justify-center">
                <ExperienceCard :experience="experience" />
            </div>
    </div>
</template>

<script setup>
import ContentHeader from '../common/contentHeader.vue'
import {experienceData} from '../utils/experienceData.js'
import ExperienceCard from '../common/experienceCard.vue'
</script>