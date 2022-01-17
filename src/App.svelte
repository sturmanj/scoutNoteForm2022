<script>
	//http://localhost:8080?scout=1a2b3c&event=BB2022

	import { data } from "./stores.js";

	var autoVal = location.search
		.slice(1)
		.split('&')
		.map(p => p.split('='))
		.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
	$data.scout = autoVal.scout
	$data.event = autoVal.event

	function submit() {
		console.log($data)
		//make the page unusable from here, probably put a close message and chicken animation.
	}
</script>

<div>
	<h1>notes</h1>
	<textarea placeholder = "Write your notes here..." bind:value={$data.notes} ></textarea>
	<p> </p>
	<button on:click={submit}>submit</button>
</div>

<style>
	textarea {
		width: 100%; height: 300px;
	}

	div {
  		text-align: center;
	}
</style>

