<template>
    <div id="about" class="bg-gray-50 dark:bg-[#111827] w-full pb-24">
        <ContentHeader label="About me" />
        <div class="sm:grid sm:grid-cols-2">
            <div class="flex justify-center mt-14 sm:mt-20">
                <div class="relative bg-gray-200 dark:bg-[#374051] w-[320px] h-[360px]">
                    <div
                        class="absolute border-8 border-white dark:border-[#111827] bottom-5 left-5 right-5 sm:-right-7">
                        <img :src="ProfileImage" alt="Profile Image" height="360px"
                            class="object-cover h-[360px] w-[320px]" />
                    </div>
                </div>
            </div>
            <div class="px-4 mt-12">
                <p class="font-semibold text-2xl text-gray-900 dark:text-[#F9FAFB]">Curious about me? Here you have it:
                </p>
                <p class="font-normal text-base text-gray-600 dark:text-[#D1D5DB] mt-3">I'm a passionate,
                    self-proclaimed
                    designer who specializes in frontend development (React.js & Vue.js). I am very enthusiastic about
                    bringing the technical and visual aspects of digital products to
                    life. User experience, pixel perfect design, and writing clear, readable, highly performant code
                    matters
                    to me.<br><br>I began my journey as a web developer in 2022, and since then, I've continued to grow
                    and
                    evolve as a developer, taking on new challenges and learning the latest technologies along the way.
                    I'm
                    building cutting-edge web
                    applications using modern technologies such as Next.js, TypeScript, Tailwindcss, Bootstrap and
                    much more.<br><br>I am very much a progressive thinker and enjoy working on products end to end,
                    from
                    ideation all the way to development.<br><br>When I'm not in full-on developer mode, you can find me
                    hovering
                    around on twitter, facebook or on instagram, witnessing the journey of early startups or enjoying
                    some
                    free
                    time. You can also follow me on Github</p>
                <p class="font-normal text-base text-gray-600 dark:text-[#D1D5DB] mt-3">Finally, some quick bits about
                    me.
                </p>
                <ul
                    class="grid grid-cols-2 list-disc mt-3 px-4 gap-x-10 gap-y-2 font-normal text-base text-gray-600 dark:text-[#D1D5DB]">
                    <li>BS in Computer Science</li>
                    <li>Avid Learner</li>
                    <li>Professional Web Developer</li>
                    <li>Passionate about Technology</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProfileImage from '../assets/images/about-image.jpg'
import ContentHeader from '../common/contentHeader.vue'

</script>