<script setup>
import MainLayout from '@/components/MainLayout.vue'; // Assuming '@' is configured to point to the 'src' directory
import HeroBanner from '@/components/HeroBanner.vue';
import TechStacks from '@/components/TechStacks.vue';

// Page Title of Views
const pageTitle = 'Home'
</script>

<template>
  <MainLayout :pageTitle="pageTitle">
    
    <!-- Hero Banner Section -->
    <HeroBanner />

    <!-- Project Gallery -->
    <SkillsView />

    <!-- Tech Stacks -->
    <TechStacks />
  </MainLayout>
</template>