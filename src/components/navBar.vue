<template>
    <div
        class="w-full flex flex-wrap gap-3 p-5 sm:px-28 py-5 sm:flex-row-reverse sm:items-center justify-end md:justify-center lg:justify-between dark:bg-n-gradient shadow-custom-inset backdrop-blur-custom sticky top-0 left-0 z-50">
        <div
            class="hidden sm:flex items-center flex-wrap md:ml-auto font-medium text-base text-gray-600 dark:text-[#D1D5DB]">
            <!-- <p class="pr-6 cursor-pointer" @click="$emit('navigate','about')">About</p> -->
            <p class="pr-6 cursor-pointer" @click="$emit('navigate', 'skills')">Skills</p>
            <p class="pr-6 cursor-pointer" @click="$emit('navigate', 'work')">Work</p>
            <p class="pr-6 cursor-pointer" @click="$emit('navigate', 'contact')">Contact</p>
            <div class="border-l border-gray-100 h-6 pr-6">
            </div>
            <div class="pr-6 cursor-pointer" @click="toggleDark()">
                <svg v-if="isDark" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z"
                        stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 3V7" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M21 5H17" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 2V4" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M12 20V22" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M4.92993 4.92999L6.33993 6.33999" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M17.6599 17.66L19.0699 19.07" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M2 12H4" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M20 12H22" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M6.33993 17.66L4.92993 19.07" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M19.0699 4.92999L17.6599 6.33999" stroke="#4B5563" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <div>
                <Button label="Download CV" @click="downloadCv" />
            </div>
        </div>
        <div class="hidden sm:flex gap-3">
            <a href="https://github.com/raiasifali" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512" height="25px"
                    width="25px">
                    <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/raiasifali/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" height="25px"
                    width="25px">
                    <path
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
            </a>
        </div>
        <div class="sm:hidden flex justify-end" @click="isMobileView = !isMobileView">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_429_11066)">
                    <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#292929" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_429_11066">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    </div>
    <SideBar v-if="isMobileView" :isMobileView="isMobileView" @toggleSideBar="isMobileView = false"
        @navigate="scrollToSection" @download-cv="downloadCv" />
</template>

<script setup>
import { ref } from "vue"
import Button from '../common/button.vue'
import SideBar from './sideBar.vue'
import { useDark, useToggle } from '@vueuse/core'

const emit = defineEmits(['navigate'])
const isDark = useDark()
const toggleDark = useToggle(isDark)
const isMobileView = ref(false)

const scrollToSection = (id)=>{
    emit('navigate',id)
    isMobileView.value = false
}

const downloadCv = ()=>{
    const link = document.createElement('a');
    link.href ="src/assets/Asif Full Stack Resume.pdf";
    link.download = "Asif's Resume";
    link.click();
}

</script>