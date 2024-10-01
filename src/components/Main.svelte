<script>
	import Step from "./Step.svelte";

	let steps = [
		{name: 'Calculator', icon: 'fa-solid fa-calculator', projectURL: 'https://calculator.dyrhave.com'},
		{name: 'Rock Paper Scissors', icon: 'fa-solid fa-hand-back-fist fa-solid fa-hand fa-solid fa-hand-scissors', projectURL: 'https://rpsgame.dyrhave.com'},
		{name: 'Pixel Palette', icon: 'fa-solid fa-palette', projectURL: 'https://pixelpalette.dyrhave.com'},
		{name: 'ComputeAgain', icon: 'fa-solid fa-warehouse', projectURL: 'https://github.com/dyrhave/Inventory-management---TCproject'},
	]
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg:justify-center gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold whitespace-nowrap text-4xl sm:text-5xl md:text-6xl">
				Hi! I'm <span class="poppins text-amber-600">Rasmus </span> Dyrhave <br/> Welcome To My <span class="poppins text-amber-600">Portfolio</span>
			</h2>
			<a
				class="orangeShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-neutral-900 cursor-pointer"
				href="mailto:rasmus@dyrhave.com"
				target="_blank"
				>
				<div class="absolute top-0 right-full w-full h-full bg-amber-600 opacity-20 group-hover:translate-x-full z-0 duration-200"/>

				<h4 class="relative z-9">Contact &rarr;</h4>
			</a>
		</div>
	</section>
	<section id="projects" class="py-20 lg:py32 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-lg sm:text-xl md:text-2xl"
					A few of my projects.>
			</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				See my <span class="poppins text-amber-600">work</span>
			</h3>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Step step={steps[0]}>
				<p>Calculator app created with
				<strong class="text-amber-500"> JavaScript HTML CSS.</strong></p>
			</Step>
			<Step step={steps[1]}>
				<p>Rock Paper Scissors game created with
					<strong class="text-amber-500"> JavaScript HTML CSS</strong> Play this classic game against the computer!</p>
			</Step>
			<Step step={steps[2]}>
				<p>Pixel Palette is a canvas for the creative minded generated with
					<strong class="text-amber-500">JavaScript.</strong></p>
			</Step>
			<Step step={steps[3]}>
				<p>ComputeAgain is a full stack management app created with
					<strong class="text-amber-500">Vue.js TailwindCSS Flask SQLite.</strong></p> The front end is Vuex modules with VueCLI and the CRUD operations is handled by Flask API.
			</Step>
		</div>
	</section>
	<!-- <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
		<div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-amber-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-amber-700 py-4">
			<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				<span class="poppins text-amber-500">Contact</span> me here.
			</h3>
		</div>
		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . . </p>
		<div class="flex flex-col gap-20 "></div>
	</section> -->

</main>