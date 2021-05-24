import gsap from "gsap";

export class App {
	constructor() {
		this.header = document.querySelector(".header");
		this.sidebar = document.querySelector(".sidebar");
		this.headline = Array.from(document.querySelectorAll(".container__inner h2 span.hidden"));
		this.items = Array.from(document.querySelectorAll(".container__inner--item"));
		this.pagination = document.querySelector(".container__pagination");
		this.controls = document.querySelector(".container__controls");

		this.init();
	}

	init() {
		document.body.addEventListener("mousemove", (ev) => this.handleMouseMove(ev));

		gsap.from(this.header, {
			y: -100,
			opacity: 0,
			duration: 1,
			delay: 0.75,
			ease: "Power3.easeInOut",
		});

		gsap.from(
			[
				this.sidebar.querySelector(".sidebar__body--inner h1"),
				this.sidebar.querySelector(".sidebar__body--inner p"),
				this.sidebar.querySelector(".sidebar__body--inner ul"),
				this.sidebar.querySelector(".sidebar__body--inner strong"),
				this.sidebar.querySelector(".sidebar__body--button"),
			],
			{
				y: 100,
				opacity: 0,
				stagger: 0.1,
				duration: 1,
				delay: 0.5,
				ease: "Power3.easeInOut",
			}
		);

		gsap.from(this.sidebar.querySelector(".sidebar__breadcrumbs"), {
			x: -100,
			opacity: 0,
			duration: 1,
			delay: 0.75,
			ease: "Power3.easeInOut",
		});

		gsap.from([...this.headline.map((line) => line.querySelector("span"))], {
			y: 120,
			stagger: 0.1,
			duration: 1,
			delay: 0.25,
			ease: "Power3.easeInOut",
		});

		gsap.from([...this.items], {
			y: 100,
			opacity: 0,
			duration: 1,
			delay: 0.8,
			stagger: 0.1,
			ease: "Power3.easeInOut",
		});

		gsap.from([this.pagination, this.controls], {
			y: 100,
			opacity: 0,
			duration: 1,
			delay: 0.6,
			stagger: 0,
			ease: "Power3.easeInOut",
		});
	}

	handleMouseMove(event) {
		const { clientX, clientY } = event;
		const customCursor = document.querySelector(".custom-cursor");

		customCursor.style.opacity = 1;
		customCursor.style.top = `${clientY}px`;
		customCursor.style.left = `${clientX}px`;
	}
}
