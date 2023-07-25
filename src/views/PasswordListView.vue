<script lang="ts" setup>
// import PasswordCard from '@/components/PasswordCard.vue';

// const

</script>

<template>
    <h1>Password Manager</h1>
    <div class="passwords-container">
        <!-- <PasswordCard v-for="event in events" :key="event.id" :event="event" /> -->

        <!-- <div class="pagination">
            <router-link id="page-prev" :to="{ name: 'events', query: { page: page - 1 } }" rel="prev"
                v-if="page != 1">&#60;
                Prev</router-link>

            <router-link id="page-next" :to="{ name: 'events', query: { page: page + 1 } }" rel="next"
                v-if="hasNextPage">Next
                &#62;</router-link>
        </div> -->
    </div>
</template>

<style scope>
.passwords-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.pagination {
    display: flex;
    width: 290px;
}

.pagination a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
}

#page-prev {
    text-align: left;
}

#page-next {
    text-align: right;
}
</style>