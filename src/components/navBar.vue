<template>
    <div class="w-full flex sm:flex-col flex-wrap p-5 sm:px-28 py-5 md:flex-row-reverse items-center justify-between">
        <div class="hidden sm:flex items-center flex-wrap md:ml-auto font-medium text-base text-gray-600">
            <p class="pr-6">About</p>
            <p class="pr-6">Work</p>
            <p class="pr-6">Testomonials</p>
            <p class="pr-6">Contact</p>
            <div class="border-l border-gray-100 h-6 pr-6">
            </div>
            <div class="pr-6 cursor-pointer" @click="toggleDark()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <Button label="Download CV" />
            </div>
        </div>
        <div class="flex gap-3" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                <path
                    d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px">
                <path
                    d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px">
                <path
                    d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z" />
            </svg>
        </div>
        <div class="sm:hidden" @click="isMobileView = !isMobileView">
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
    <SideBar v-if="isMobileView" :isMobileView="isMobileView" @toggleSideBar="isMobileView = false" />
</template>

<script setup>
import { ref } from "vue"
import Button from '../common/button.vue'
import SideBar from './sideBar.vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isMobileView = ref(false)


</script>