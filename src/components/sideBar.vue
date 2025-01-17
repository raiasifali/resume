<template>
    <div
        class='fixed top-0 right-0 h-full bg-white dark:bg-[#121212] shadow-lg transform transition-transform duration-300 ease-in-out w-72 max-w-full z-50'>
        <div class="flex justify-between p-4 items-center border-b dark:border-[#1F2937]">
            <div class="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
                    <path
                        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
                    <path
                        d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
                    <path
                        d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z" />
                </svg>
            </div>
            <button @click="toggleSideBar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>
            </button>
        </div>
        <div class="p-4 flex flex-col gap-4 font-medium text-base text-gray-600 dark:text-[#d1d5db]">
            <p class="mt-3" @click="$emit('navigate','about')">About</p>
            <p class="mt-3" @click="$emit('navigate', 'work')">Work</p>
            <p class="mt-3" @click="$emit('navigate', 'about')">Skills</p>
            <p class="mt-3" @click="$emit('navigate', 'contact')">Contact</p>
        </div>
        <div class="p-4 mt-3 cursor-pointer border-t dark:border-[#1F2937]">
            <Button label='Download Cv' />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from '../common/button.vue';

defineProps < {
    isMobileView: boolean
} > ()

const emits = defineEmits(['toggleSideBar','navigate'])

const toggleSideBar = ()=>{
    emits('toggleSideBar')
}
</script>