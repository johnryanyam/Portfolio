<template>
  <div>
   
    <!-- Main content - Skills Section -->
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="flex flex-col items-center justify-between mb-4 md:mb-8 lg:flex-row lg:mb-0">
        <h2 class="text-2xl font-bold text-gray-800 mb-2 text-center lg:text-3xl lg:mb-0">
          Skills
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
        <!-- Skill Cards -->
        <div v-for="skill in skills" :key="skill.name" class="flex items-center justify-center">
          <div class="flex items-center justify-center h-16 bg-gray-100 rounded-lg p-4 text-gray-400 sm:h-32 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img :src="skill.logo" :alt="skill.name" class="w-18 lg:w-24 h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    name: "JavaScript",
    logo: "https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png",
  },
  {
    name: "HTML",
    logo: "https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png",
  },
  {
    name: "C++",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
  },
  {
    name: "C#",
    logo: "https://miro.medium.com/v2/resize:fit:1400/1*_NVBTVdmjt3Qvq3CZOySXg.png",
  },
  {
    name: "Vue",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
  },
  {
    name: "MySQL",
    logo: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
  },
];
</script>

<style>
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
