<template>
    <section
      class="flex flex-col lg:flex-row gap-10 py-16 items-center justify-center"
    >
      <!-- Text Content -->
      <div class="flex-1 max-w-md text-center lg:text-left">
        <h1 class="text-3xl font-semibold text-cyan-700 mb-4">
          Welcome to my portfolio!
        </h1>
        <p class="font-medium text-gray-500 mb-6">
          I'm a BSIT student passionate about building intuitive and impactful web
          applications. Join me in exploring my projects and journey in tech.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <router-link
            to="/about"
            class="inline-block rounded-lg bg-cyan-700 px-6 py-2.5 text-center text-sm font-medium text-white transition duration-100 hover:bg-cyan-600"
          >
            About Me
          </router-link>
          <router-link
            to="/contact"
            class="inline-block rounded-lg bg-gray-200 px-6 py-2.5 text-center text-sm font-medium text-gray-500 transition duration-100 hover:bg-gray-300"
          >
            Contact Me
          </router-link>
        </div>
      </div>
  
      <!-- Image Section -->
      <div class="flex-1 flex justify-center lg:justify-end">
        <img
          src="https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/431727177_1514566939103217_1592962094114108539_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEhVLlfoCNZb6hz766_IzuRYfIDZElCuXdh8gNkSUK5d3iWQCHX6fHzFV6QAgRPG1bnrRqW15qPjmVj7qF2CTr1&_nc_ohc=n662tArUslEAX-pEVZk&_nc_ht=scontent-mnl1-1.xx&oh=00_AfAT8EPatXAH63anxqW-2gGSl6RBfO7frdbYB1atMaCDgQ&oe=660D9DED"
          loading="lazy"
          alt="Photo by Fakurian Design"
          class="rounded-full border-4 border-white shadow-lg w-96 h-96 object-cover"
        />
      </div>
    </section>
  </template>