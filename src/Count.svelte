<script>
  let count = 0;

  function handleClick() {
    count++;
  }
</script>

<button on:click={handleClick}>
  cool {count}
</button>
