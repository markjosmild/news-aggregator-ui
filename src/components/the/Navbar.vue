<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const routes = [
    {
        text: 'Home',
        route: {
            name: 'home'
        }
    },
    {
        text: 'Results',
        route: {
            name: 'results'
        }
    },
    {
        text: 'How To Play',
        route: {
            name: 'how-to-play'
        }
    },
    {
        text: 'Prizes',
        route: {
            name: 'prizes'
        }
    },
    {
        text: 'FAQs',
        route: {
            name: 'faqs'
        }
    },
    {
        text: 'News',
        route: {
            name: 'news'
        }
    },
]

</script>

<template>
    <div class="py-7 uppercase text-xl font-bold" >
        <RouterLink
            :class="`flex-1 px-14 py-5 ${ route.name == r.route.name  && 'border-b'}`"
            v-for="r in routes"
            :to="r.route || {}">
            <span :class="``">{{ r.text }}</span>
        </RouterLink>
    </div>
</template>