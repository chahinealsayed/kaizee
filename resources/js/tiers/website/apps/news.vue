<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import { api } from "@/lib/api";
import { ref } from "vue";
import $ from "jquery";

const projects = ref<any>([]);
const currentPage = ref(1);
const totalPages = ref(0);
const currentCid = ref('');

const init = () => {
    const items = document.querySelectorAll('.category-link');
    items.forEach((item: any) => {
        item.addEventListener('click', (e: any) => {
            e.preventDefault();
            const loadMoreButton = document.getElementById('load-more');
            if (loadMoreButton) {
                loadMoreButton.innerText = 'load more...';
                loadMoreButton.style.backgroundColor = '#13a041';
                loadMoreButton.style.color = 'white';
            }
            items.forEach((ele: any) => {
                if (ele.classList.contains('active')) {
                    ele.classList.remove('active')
                }
            })
            item.classList.add('active')
            currentCid.value = item.dataset.cid;
            currentPage.value = 1; // Reset current page when changing category
            loadProjects(currentCid.value, currentPage.value);
        })
    })
    items.item(0)?.click()
}

const loadProjects = (cid = '', page = 1) => {
    api().get(`/news?expand=local,categories,categories.local&sort=position,local.title&cid=${cid}&per-page=2&page=${page}`).then(({ data }: any) => {
        $('.project-item').fadeOut(200, function () {
            if (page === 1) {
                projects.value = data.slice(0, 2); // Load only 2 projects initially
            } else {
                const startIndex = (page - 1) * 2;
                const endIndex = startIndex + 2;
                projects.value = [...projects.value, ...data.slice(startIndex, endIndex)]; // Load the next 2 projects
            }
            totalPages.value = Math.ceil(data.length / 2);
            nextTick(() => {
                $('.project-item').fadeIn(200);
            })
        })
    })
}

const loadMore = () => {
    currentPage.value++;
    loadProjects(currentCid.value, currentPage.value);
    if (currentPage.value >= totalPages.value) {
        const loadMoreButton = document.getElementById('load-more');
        if (loadMoreButton) {
            loadMoreButton.innerText = 'No more posts available';
            loadMoreButton.style.backgroundColor = 'transparent';
            loadMoreButton.style.color = 'black';
            loadMoreButton.disabled = true;
        }
    }
}

const getNextId = (currentIndex: number) => {
    if (currentIndex < projects.value.length - 1) {
        return projects.value[currentIndex + 1].id;
    } else if (currentIndex === projects.value.length - 1 && currentPage.value < totalPages.value) {
        return projects.value[0].id;
    }
    return '';
}


onMounted(() => {
    init();
})
</script>

<template>
    <section class="project-item">
        <div class="items">
            <div class="row itemContainer" id="itemContainer">
                <div class="col-md-6 item news pb-5 bg-transparent" v-for="(content, index) in projects" :key="content.id">
                    <div class="card rounded-0 border-0 card bg-transparent">
                        <a :href="'default/content?id=' + content.id + '&cid=' + content.categories.at(0).id">
                            <img :src="content.attrs?.image?.url">
                        </a>
                        <div class="deadline">
                            <div class="date d-flex justify-content-start">{{ content.local.attrs.date }}</div>
                            <div class="type text-capitalize d-flex justify-content-end">
                                <div class="dots">
                                    <span class="dot dot-sm dot-success"></span>
                                </div>
                                <span>{{ content.categories.at(0).local.title }}</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-capitalize">{{ content.local.title }}</h5>
                            <p class="card-text text-muted">{{ content.local.excerpt }}</p>
                            <a :href="'default/content?id=' + content.id + '&cid=' + content.categories.at(0).id"
                                class="btn btn-discover">Read More</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row text-center pb-5">
            <div class="col-sm-12">
                <div class="btn__wrapper">
                    <button @click="loadMore" :disabled="currentPage >= totalPages" class="btn btn-load-more"
                        id="load-more">Load more...</button>
                </div>
            </div>
        </div>
    </section>
</template>