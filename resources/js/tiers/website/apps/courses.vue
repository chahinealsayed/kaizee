<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import { api } from "@/lib/api";
import { ref } from "vue";
import $ from "jquery";

// Define your variables
const projects = ref<any>([]);
const categoriesExcerpt = ref();
const categoriesSubtitle = ref();
const categoriesImage = ref();

const loadProjects = (cid = '') => {
    api().get(`/courses?expand=local,categories,categories.local&sort=position,local.title&cid=${cid}`)
        .then((response: any) => {
            const data = response.data;

            $('.project-item').fadeOut(200, function () {
                projects.value = data;
                categoriesExcerpt.value = data[0]?.categories.at(0).local.excerpt;
                categoriesImage.value = data[0]?.categories.at(0).attrs.image.url;
                categoriesSubtitle.value = data[0]?.categories.at(0).local.attrs.subtitle;
                nextTick(() => {
                    $('.project-item').fadeIn(200);
                });
            });
        })
        .catch((error: any) => {
            console.error('API call failed:', error);
        });
};
const init = () => {
    const items = document.querySelectorAll('.category-link');
    items.forEach((item: any) => {
        item.addEventListener('click', (e: any) => {
            e.preventDefault();
            const currentlyActive = document.querySelector('.category-link.active');
            if (currentlyActive) {
                currentlyActive.classList.remove('active');
            }
            item.classList.add('active');
            const cid = item.dataset.cid;
            loadProjects(cid); // Use data-cid from the clicked element

            // Modify the URL to /course-page without cid parameter
            history.pushState({}, document.title, '/course-page');
        });
    });

    // Check if the URL is '/course-page' and load courses for the first cid if no cid parameter is present
    const urlParams = new URLSearchParams(window.location.search);
    const urlCid = urlParams.get('cid');
    if (window.location.pathname === '/course-page' && urlCid === null) {
        const coursesLink = document.querySelector('.category-link');
        if (coursesLink) {
            coursesLink.classList.add('active');
            const firstCid = coursesLink.dataset.cid;
            loadProjects(firstCid); // Load projects for the first cid found
        }
    }
};

onMounted(() => {
    init();
    const urlParams = new URLSearchParams(window.location.search);
    const urlCid = urlParams.get('cid');
    if (urlCid) {
        const elementWithUrlCid = document.querySelector(`[data-cid="${urlCid}"]`);
        if (elementWithUrlCid) {
            elementWithUrlCid.classList.add('active');
            loadProjects(urlCid);
        }
    }
});

</script>
<template>
    <section class="project-item">
        <div class="tab-content py-3" id="myTabContent">
            <div class="taxonomy-content contentfront-line" id="taxonomy-content-id12" data-slug="front-line"
                style="display: block;">
                <div class="row">
                    <div class="col-md-7 pt-md-5">
                        <span class="title">
                            <p>{{ categoriesSubtitle }}</p>
                        </span>
                        <p class="pt-2 description">{{ categoriesExcerpt }}</p>
                        <p class="  "></p>
                        <p></p>
                    </div>
                    <div class="col-md-5">
                        <div class="img">
                            <img :src="categoriesImage">
                            <span class="span1"></span>
                            <span class="span2"></span>
                            <span class="span3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="course-card">
        <section class="project-item">
            <div class="row">
                <div class="col-md-6" v-for="content in projects" :key="content.id">
                    <div class="course-book">
                        <div class="course-book-img">
                            <img class="project-image" :src="content.attrs?.image1?.url" alt="" />
                        </div>
                        <div class="course-details">
                            <div class="course-name">
                                <p>{{ content.local.title }}</p>
                            </div>
                            <div class="course-description">
                                <p>description:{{ content.attrs.description }}
                                </p>
                            </div>
                            <div class="course-duration inf">
                                <div class="dur-value value">
                                    <p>
                                        <span class="title">Duration:
                                        </span>{{ content.attrs.duration }}
                                    </p>
                                </div>
                            </div>
                            <div class="course-price inf">
                                <div class="price-title title">
                                    <p>Price:</p>
                                </div>
                                <div class="price-value value">
                                    <p>{{ content.attrs.price }}</p>
                                </div>
                            </div>
                            <div class="site-button">
                                <a :href="'default/content?id=' + content.id">View Course</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
