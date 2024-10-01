<script>
	export let y;
	let tabs = [
		{name: 'Projects', link:'#projects'},
		{name: 'About me', link:'#about'},
	];

	function scrollToSection(event, id) {
		event.preventDefault();
		const element = document.querySelector(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth'});
		}
	}

</script>

<header class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid  ' + (
	y > 0 ? "py-4 bg-neutral-900 border-amber-800>" : "py-6 bg-transparent border-transparent"
)}>
	<h1 class="font-medium">
		<b class="font-bold poppins">Rasmus</b> Dyrhave
	</h1>
	<div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
		{#each tabs as tab, index}
			<a href={tab.name} on:click={(e) => scrollToSection(e, tab.link)} class="duration-200 hover:text-amber-600">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
		<a
			href="mailto:rasmus@dyrhave.com"
			target="_blank"
			class="orangeShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-neutral-900">
			<div class="absolute top-0 right-full w-full h-full bg-amber-400 opacity-20 group-hover:translate-x-full z-0 duration-200"/>
			<h4 class="relative z-9">Contact</h4>
		</a>
</header>