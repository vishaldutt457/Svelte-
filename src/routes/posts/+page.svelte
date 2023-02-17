<script>
	export let data;
    console.log("data",data)
</script>

<div>
	{#each data.posts as post}
		<h1>{post.title}</h1>
		<p>{post.body}</p>
	{/each}
</div>