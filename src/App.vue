<template>
  <div>
    <!-- Header -->
    <header class="bg-gray-800 text-white py-4">
      <nav class="container mx-auto flex items-center justify-between">
        <!-- Logo or site title -->
        <div>
          <router-link to="/" class="text-xl font-bold">My Portfolio</router-link>
        </div>
        <!-- Navigation links -->
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:underline">Home</router-link></li>
          <li><router-link to="/about" class="hover:underline">About</router-link></li>
          <li><router-link to="/skills" class="hover:underline">Skills</router-link></li>
          <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Main content of your application -->
    <router-view/>
  </div>
</template>
