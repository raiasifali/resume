<template>
    <div class="w-full sm:px-36 px-4 pb-20">
        <ContentHeader label="Work" />
        <p class="font-normal text-lg text-gray-600 dark:text-[#D1D5DB] text-center mt-4">Some of the nwtworthy project
            that i have built:</p>
        <div class="flex flex-col gap-6 sm:grid sm:grid-cols-2 bg-[#FFFFFF] dark:bg-[#1F2937] rounded-xl overflow-hidden shadow-md mt-10"
            v-for="(projectDetail,index) in projectsDetail" :key="index">
            <div class="bg-gray-100 dark:bg-[#1F2937] p-8 rounded-t-xl"
                :class="{ 'sm:order-2 rounded-r-xl': index % 2 === 1, 'sm:order-1 sm:rounded-l-xl ': index % 2 === 0 }">
                <div class="flex justify-center">
                    <img :src="projectDetail.image" alt="Project 1" class="object-cover rounded-lg" />
                </div>
            </div>
            <div class="p-8 dark:bg-[#1f2937]"
                :class="{ 'sm:order-1': index % 2 === 1, 'sm:order-2': index % 2 === 0 }">
                <p class="font-semibold text-lg sm:text-xl text-gray-900 dark:text-[#F9FAFB]">{{ projectDetail.title }}
                </p>
                <p class="mt-6 text-base font-normal text-gray-600 dark:text-[#D1D5DB]">{{ projectDetail.description }}
                </p>
                <div class="flex flex-wrap gap-2 mt-6 -ml-2">
                    <ProjectSkills v-for="projectSkill in projectDetail.skills" :label="projectSkill" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ContentHeader from '../common/contentHeader.vue'
import CoachCatalyst from '../assets/images/coach-catalyst.png'
import EarnIt from '../assets/images/earnit.png'
import MaikoChat from '../assets/images/maiko-chat.png'
import ProjectSkills from '../common/projectSkills.vue'

import {ref} from 'vue'

const projectsDetail = ref([{ 
    image: CoachCatalyst,
    title: "Coach Catalyst", 
    description: "Developed responsive web pages using Vue.js and Tailwind CSS, ensuring a seamless user experience across various devices.Integrated API- driven dynamic features to enhance interactivity and boost user engagement.Successfully migrated a project from Vue 2 to Vue 3, leading to improved performance and modernized features.Efforts also included resolving frontend bugs, significantly improving overall functionality and user experience.",
    skills:['Vue.Js','TailwindCss','Sass','PostgresSql','figma','Git']
    },
    {
    image: EarnIt,
    title: "EarnIt",
    description: "Developed the frontend of the EarnIt platform from scratch using Next.js, creating a modern, scalable, and responsive web application. The platform allows users to earn money online through various methods, including playing games, utilizing cashback links, sharing referral links, and engaging with advertisements. Leveraged Next.js features such as Server-Side Rendering (SSR) and Static Site Generation (SSG) to optimize performance and enhance SEO. Designed and styled user-friendly and responsive interfaces using Tailwind CSS, ensuring a seamless experience across devices. Implemented dynamic, API-driven features to provide real-time updates and foster user engagement. Integrated robust state management to handle user sessions, transactions, and earnings efficiently, delivering a reliable and interactive platform that prioritizes usability and scalability.",
    skills: ['React.Js','NextJs','TailwindCss','PostgresSql', 'figma', 'Git']
    }, 
    {
    image: MaikoChat,
    title: "Maiko Chat",
    description: "Designed the frontend and implemented real-time interactions using Socket.io, ensuring seamless and responsive communication across the application. Migrated the backend from Firebase to MongoDB, enhancing scalability and providing a more robust infrastructure for handling growing user data and application requirements.",
    skills: ['React.Js', 'NextJs', 'TailwindCss', 'Mongodb', 'figma', 'Git', 'Socket.io']
    },])
</script>