<script>
	export let y;
	let tabs = [

	]

</script>

<header>
	<h1>
		<b>Rasmus</b> Dyrhave
	</h1>
	<div class="">
		{#each tabs as tab, index}
			<a>
				<p>{tab.name}</p>
			</a>
			{/each}
	</div>
</header>