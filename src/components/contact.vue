<template>
    <div class="w-full bg-gray-50 dark:bg-[#111827] px-4 pb-20">
        <ContentHeader label="Contact me" />
        <p class="font-normal text-lg text-gray-600 dark:text-[#D1D5DB] text-center mt-4">What’s next? Feel free to
            reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        <div class="flex gap-4 justify-center mt-12">
            <img :src="Email" alt="Email icon" />
            <p class="text-lg sm:text-4xl font-semibold text-gray-900 dark:text-[#F9FAFB]">mirzajamaluddin44@gmail.com
            </p>
            <img :src="Copy" alt="Copy icon" />
        </div>
        <div class="flex gap-5 justify-center mt-4">
            <img :src="Call" alt="Call icon" />
            <p class="text-lg sm:text-4xl font-semibold text-gray-900 dark:text-[#F9FAFB]">+923314980509</p>
            <img :src="Copy" alt="Copy icon" />
        </div>
    </div>
</template>

<script setup>
import ContentHeader from '../common/contentHeader.vue'
import Email from '../assets/svgs/email.svg'
import Copy from '../assets/svgs/copy.svg'
import Call from '../assets/svgs/call.svg'
</script>