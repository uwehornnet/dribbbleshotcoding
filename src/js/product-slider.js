import gsap from "gsap";

export class ProductSlider {
	constructor(elem) {
		this.elem = elem;
		this.bounds = elem.getBoundingClientRect();
		this.inner = elem.querySelector(".container__inner");
		this.headline = elem.querySelector(".container__inner h2");
		this.prev = elem.querySelector(".container__controls--prev");
		this.next = elem.querySelector(".container__controls--next");
		this.pagination = elem.querySelector(".container__pagination .first");
		this.progress = elem.querySelector(".container__pagination--progress span");

		this.init();
	}

	init() {
		this.prev.addEventListener("click", () => this.animateBackward());
		this.next.addEventListener("click", () => this.animateForward());
	}

	animateForward() {
		gsap.to(this.inner, {
			x: -this.bounds.width,
			duration: 1,
			ease: "Power3.easeInOut",
		});

		gsap.to(this.headline, {
			x: this.bounds.width - 240,
			duration: 1,
			ease: "Power3.easeInOut",
		});

		gsap.to(this.progress, {
			x: "100%",
			duration: 1,
			ease: "Power3.easeInOut",
		});

		setTimeout(() => {
			this.pagination.textContent = "02";
			this.next.classList.remove("active");
			this.prev.classList.add("active");
		}, 800);
	}

	animateBackward() {
		gsap.to(this.inner, {
			x: 0,
			duration: 1,
			ease: "Power3.easeInOut",
		});

		gsap.to(this.headline, {
			x: 0,
			duration: 1,
			ease: "Power3.easeInOut",
		});
		gsap.to(this.progress, {
			x: "0%",
			duration: 1,
			ease: "Power3.easeInOut",
		});

		setTimeout(() => {
			this.pagination.textContent = "01";
			this.next.classList.add("active");
			this.prev.classList.remove("active");
		}, 800);
	}
}
