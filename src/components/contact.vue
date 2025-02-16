<template>
    <div id="contact" class="w-full bg-gray-50 dark:bg-[#111827] px-4 pb-20">
        <ContentHeader label="Contact me" />
        <p class="font-normal text-lg text-gray-600 dark:text-[#D1D5DB] text-center mt-4">What’s next? Feel free to
            reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        <div class="flex gap-4 justify-center mt-12 items-center">
            <img :src="Email" alt="Email icon" />
            <p class="text-lg sm:text-4xl font-semibold text-gray-900 dark:text-[#F9FAFB]">
                devasif.alee@gmail.com
            </p>
            <p v-if="isCopied === 'email'" class="font-normal text-sm text-gray-600 dark:text-[#D1D5DB]">Copied</p>
            <Popper v-else arrow hover content="Copy Email" placement="top">
                <img :src="Copy" alt="Copy icon" class="cursor-pointer" id="email"
                    v-clipboard:copy="'devasif.alee@gmail.com'" v-clipboard:success="onCopy" />
            </Popper>
        </div>
        <div class="flex gap-5 justify-center mt-4 items-center">
            <img :src="Call" alt="Call icon" />
            <p class="text-lg sm:text-4xl font-semibold text-gray-900 dark:text-[#F9FAFB]">+92 300 0041176</p>
            <p v-if="isCopied === 'phoneNo'" class="font-normal text-sm text-gray-600 dark:text-[#D1D5DB]">Copied</p>
            <Popper v-else arrow hover content="Copy Phone No" placement="right">
                <img :src="Copy" alt="Copy icon" id="phoneNo" v-clipboard:copy="'+923000041176'"
                    v-clipboard:success="onCopy" class="cursor-pointer" />
            </Popper>
        </div>
    </div>
</template>


<script setup>

import ContentHeader from '../common/contentHeader.vue'
import Email from '../assets/svgs/email.svg'
import Copy from '../assets/svgs/copy.svg'
import Call from '../assets/svgs/call.svg'
import Popper from "vue3-popper";
import {ref} from 'vue'

let isCopied = ref(null)

const onCopy = (e) => {
    isCopied.value = e.trigger.id
    setTimeout(() => {
        isCopied.value = null
    }, 2000);
}

</script>
