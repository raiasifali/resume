<template>
    <div id="intro" class="mx-auto grid grid-cols-1 sm:grid-cols-2 p-5 sm:px-28 sm:py-14">
        <div class="flex flex-col gap-2 sm:order-1 order-2 mt-10 sm:mt-0">
            <p class="font-bold sm:text-4xl text-2xl text-gray-900 dark:text-[#f9fafb]">Hi, I'm Asif 👋
            </p>
            <p class="font-normal text-sm text-gray-600 dark:text-[#D1D5DB]">
                I’m a Full Stack Engineer with a passion for building dynamic, user-centric applications. Proficient in Ruby on Rails for backend development and experienced with React and Vue for crafting engaging front-end experiences. I thrive in collaborative environments, leveraging my technical skills and problem-solving abilities to deliver robust solutions and drive innovation. Let's connect and explore how we can create impactful software together!</p>
            <div class="flex flex-col">
                <div class="flex items-center gap-3 mt-12 ">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                                stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p class="font-normal text-base text-gray-600 dark:text-[#D1D5DB]">Lahore, Pakistan</p>
                </div>
                <div class="flex items-center gap-3 m-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="8" rx="4" fill="#10B981" />
                    </svg>
                    <p class="font-normal text-base text-gray-600 dark:text-[#D1D5DB] ml-1">Available for new projects
                    </p>
                </div>
            </div>
        </div>
        <div class="flex justify-center sm:order-2 order-1 sm:ml-80 m-10 sm:m-0 mt-14 sm:mt-0">
            <div class="relative bg-gray-200 dark:bg-[#374051] w-[280px] h-[300px]">
                <div
                    class="absolute border-8 border-white dark:border-[#111827] bottom-5 left-5 right-5 sm:right-8 sm:-left-12">
                    <img :src="ProfileImage" alt="Profile Image" class="object-cover h-[300px]" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProfileImage from '/public/For_DP_1.png'
</script>
