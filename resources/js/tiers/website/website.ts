/**
 * website.ts Common Script File
 *
 * @project yii2
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, July 10, 2023 at 11:49 AM GMT+3
 *
 */

import "@scss/tiers/website/website.scss";
import "@/native";
import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

(() => {

	function main() {
		navScroll();
		swiper();
		showModal();
	}

	document.addEventListener("readystatechange", async (event: any) => {
		if (event.target.readyState === 'complete') {
			// (await import("@/modules/theme"))?.initTheme?.()
			main()
		}
	})

	function navScroll() {
		var headerWrapper = document.querySelector(".header-section");

		window.addEventListener("scroll", function () {
			headerWrapper.display = "none";
			if (window.scrollY > 1) {
				headerWrapper.classList.add("fixed");

			} else {
				headerWrapper.classList.remove("fixed");

			}
		});
	}

	function swiper() {
		const swiper = new Swiper('.swiper', {
			modules: [Navigation, Autoplay, Pagination],
			direction: 'horizontal',
			loop: true,
			breakpoints: {
				640: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				},
				768: {
					slidesPerView: 1,
				},
				1024: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				},
				1366: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				},
			},

			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			},

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			scrollbar: {
				el: '.swiper-scrollbar',
			},
		});
	}


	function showModal() {
		var btn = document.querySelector('.btn-read');
		var modal = document.querySelector('#exampleModalCenter');
		var closeBtn = document.querySelector('.btn-close');
		var modalBody = document.querySelector('.modal-body p');
		var closeButton = document.querySelector('.button-close');

		// Event listener for the button
		btn.addEventListener('click', function () {
			modal.style.display = "block";
			modalBody.textContent = this.dataset.excerpt; // Access data-excerpt attribute
		});

		// Event listener for the close button
		closeBtn.addEventListener('click', function () {
			modal.style.display = "none";
		});
		closeButton.addEventListener('click', function () {
			modal.style.display = "none";
		});
	}

})()
