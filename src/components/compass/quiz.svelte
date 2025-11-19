<script lang="ts">
  import type { Tally } from "./data";
  import { questions } from "./data";
  import { fly, fade } from "svelte/transition";

  import Question from "./question.svelte";

  let tally: Tally = $state({});
  let quizStarted = $state(false);
  let index = $state(0);

  const nextQuestion = () => index++;
  const currentQuestion = $derived(questions[index]);
  const quizFinished = $derived(index >= questions.length);
  const result = $derived.by(() => {
    if (!quizFinished) return null;
    let max = Math.max(...Object.values(tally));
    return Object.entries(tally)
      .filter(([_, n]) => n == max)
      .map(([q, _]) => q);
  });
</script>

<div class="relative flex h-full flex-col items-center justify-center">
  {#if quizStarted}
    {#if !quizFinished}
      {#key currentQuestion}
        <div
          class="absolute"
          in:fly={{ y: 20, duration: 300, delay: 300 }}
          out:fly={{ y: -20, duration: 300 }}
        >
          <Question data={currentQuestion} bind:tally onAnswer={nextQuestion} />
        </div>
      {/key}
    {:else}
      <div class="flex flex-col items-center gap-4" in:fade>
        <h2 class="font-bold text-2xl sm:text-4xl">Your best fit is:</h2>
        {#if result}
          {#each result as host}
            <p class="font-light text-xl sm:text-2xl">{host}</p>
          {/each}
        {/if}
      </div>
    {/if}
  {:else}
    <div
      class="absolute flex w-full max-w-lg flex-col items-center gap-4 rounded-xl bg-offset p-4 text-center shadow-lg sm:p-8"
    >
      <h2 class="text-balance font-bold text-2xl sm:text-4xl">Host Compass</h2>
      <h3 class="mb-4">
        Unsure which host position to apply for? Fill out the compass!
      </h3>
      <button
        class="rounded-full border-4 border-white bg-teknikfokus-600 px-6 py-3 font-bold text-white text-base hover:bg-teknikfokus-500 sm:px-8 sm:py-4 sm:text-lg"
        aria-label="begin-quiz"
        onclick={() => (quizStarted = true)}>Start</button
      >
    </div>
  {/if}
</div>
