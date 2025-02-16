<template>
    <div id="skills" class="w-full px-4 pb-20">
        <ContentHeader label="Skills" />
        <p class="font-normal text-lg text-gray-600 dark:text-[#D1D5DB] text-center mt-4">The skills, tools and
            technologies I am really
            good at:</p>
        <div class="grid grid-cols-4 sm:grid-cols-8 mt-6 px-4 gap-x-16 gap-y-4 mx-auto">
            <div v-for="skill in skills" class="flex flex-col items-center gap-2">
                <img :src="skill.icon" :alt="`${skill.name} icon`" class="h-16 w-16" />
                <p class="font-normal text-sm text-gray-600 dark:text-[#D1D5DB]">{{skill.name}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {skills} from '../utils/skills.js'
import ContentHeader from '../common/contentHeader.vue'
</script>