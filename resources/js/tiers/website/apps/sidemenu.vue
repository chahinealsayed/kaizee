<script setup lang="ts">
import { language, translate } from '@/lib/metadata';
import Offcanvas from '@/modules/bootstrap/components/Offcanvas.vue';
import ToggleButton from '@/modules/bootstrap/components/ToggleButton.vue';
import { defineProps, ref } from 'vue';
import { Icon } from '@iconify/vue';

interface Item {
    label: string,
    url: string,
    options: {
        class?: string;
    };
}

type Props = {
    list: Item[]
    externals: Item[],
    // donationLink: string,
};
const handleLinkClick = () => {
    offcanvasElt.value.close();
}

const isCurrentPage = (url) => {
    return window.location.pathname === url;
}

const { list, externals } = defineProps<Props>();
const offcanvasElt = ref<any>(null)
const scrollTo = (id) => {
    const section = document.getElementById(id);
    console.log('id', id);

    console.log('target', section);

    offcanvasElt.value.close()
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }
}

// const offcanvas = ref<any>(null)
const canvasEl = (el: any, element: any) => {
    element(el)
    offcanvasElt.value = el;
}

</script>
<template>
    <ToggleButton class="btn-side">
        <web-icon path="mdiMenu" id="menu-icon" class="menu-hamburger"
            style="height: 100%;width: 30px; color: #3e3e3e;"></web-icon>
        <template #content="{ element, closed }">
            <Offcanvas backdrop :ref="(el) => { canvasEl(el, element) }" :placement="'end'" @closed="closed">
                <ul class="nav-menu">
                    <li v-for="(item, i) in list" :key="i">
                        <a :href="item.url" :class="{ 'active1': isCurrentPage(item.url) }" @click="handleLinkClick">{{
                            item.label }}</a>
                    </li>
                    <div class="d-flex gap-3">
                        <a target="_blank" :href="externals[0].url">
                            <icon icon="simple-icons:youtube" color="#2c3e50" style="font-size: 25px;"
                                class="icon d-flex" />
                        </a>
                        <a target="_blank" :href="externals[1].url">
                            <icon icon="line-md:linkedin" color="#2c3e50" style="font-size: 25px;" class="icon d-flex" />
                        </a>
                        <a target="_blank" :href="externals[2].url">
                            <icon icon="line-md:facebook" color="#2c3e50" style="font-size: 25px;" class="icon d-flex" />
                        </a>
                        <a target="_blank" :href="externals[3].url">
                            <icon icon="line-md:instagram" color="#2c3e50" style="font-size: 25px;" class="icon d-flex" />
                        </a>
                    </div>
                    <div class="code-rights">
                        <p class="text-primary rights pb-4">&copy;All rights reserved kaizee 2023</p>
                        <a target='_blank' href="https://codendot.com/">Powered by<b> Codendot</b></a>
                    </div>
                </ul>
            </Offcanvas>
        </template>
    </ToggleButton>
</template>

<style lang="scss">
.active1 {
    color: #13a041;
}

.code-rights {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
    }
}
</style>