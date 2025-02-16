<template>
    <div id="work" class="w-full sm:px-36 px-4 pb-20">
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
import Klingit from '../assets/images/klingit.png'
import MicrohealthLLC from '../assets/images/microhealthllc.png'
import MaikoChat from '../assets/images/maiko-chat.png'
import ProjectSkills from '../common/projectSkills.vue'

import {ref} from 'vue'

const projectsDetail = ref([{ 
    image: Klingit,
    title: "Klingit", 
    description: "I spearheaded the development of Klingit's dynamic platform, leveraging Vue.js as the core frontend framework. My role focused on optimizing user interactions and enhancing the overall user experience by effectively utilizing Vue.js functionalities. I contributed to creating a seamless, responsive, and engaging interface that provided an exceptional experience for clients worldwide. Additionally, I collaborated with cross-functional teams to integrate backend functionalities, ensuring robust system performance and smooth operation across the platform.",
    skills:['Vue.Js','Vuetify','Sass','PostgresSql','figma','Git']
    },
    {
    image: MicrohealthLLC,
    title: "MicrohealthLLC",
    description: "I orchestrated the creation of consumer-centric healthcare apps at Microhealth, utilizing Vue.js and Ruby on Rails (RoR) as the primary development frameworks. I engineered user-friendly interfaces and seamless functionalities through Vue.js, ensuring a smooth and interactive user experience. Leveraging the power of RoR, I implemented robust backend systems that enabled efficient data processing and seamless app operations. My work played a pivotal role in empowering healthcare consumers by providing essential information, tools, and transparency through innovative app solutions. Additionally, I spearheaded the development of a real-time collaboration platform that included features like concept maps, kanban boards, documents, and spreadsheets. I designed and implemented features that enabled seamless teamwork and simultaneous editing in various formats, integrating real-time updates and interactive functionalities to boost user engagement and productivity. This collaboration platform streamlined workflows across multiple projects, empowering teams to work efficiently. Furthermore.",
    skills: ['Vue','ERB','Bootstrap 4', 'ROR', 'PostgresSql', 'figma', 'Git']
    }, 
    {
    image: MaikoChat,
    title: "Maiko Chat",
    description: "Designed the frontend and implemented real-time interactions using Socket.io, ensuring seamless and responsive communication across the application. Migrated the backend from Firebase to MongoDB, enhancing scalability and providing a more robust infrastructure for handling growing user data and application requirements.",
    skills: ['React.Js', 'NextJs', 'TailwindCss', 'Mongodb', 'figma', 'Git', 'Socket.io']
    },])
</script>