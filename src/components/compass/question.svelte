<script lang="ts">
  import type { QuestionData, Tally } from "./data";

  interface Props {
    tally: Tally;
    data: QuestionData;
    onAnswer: () => void;
  }

  let { data, onAnswer, tally = $bindable() }: Props = $props();

  function click(positive: boolean) {
    const hosts = positive ? data.answers.yes : data.answers.no;
    for (const host of hosts) {
      tally[host] = (tally[host] ?? 0) + 1;
    }
    onAnswer();
  }
</script>

<div
  class="flex w-full max-w-lg flex-col items-center gap-8 rounded-xl bg-offset p-4 shadow-lg sm:p-8"
>
  <h2 class="text-balance text-center font-bold text-2xl sm:text-4xl">
    {data.question}
  </h2>
  <div class="flex flex-col gap-4 sm:flex-row">
    <button
      class="rounded-full border-4 border-white bg-teknikfokus-600 px-6 py-3 font-bold text-white text-base hover:bg-teknikfokus-500 sm:px-8 sm:py-4 sm:text-lg"
      aria-label="yes"
      onclick={() => click(true)}>Yes</button
    >
    <button
      class="rounded-full border-4 border-white bg-teknikfokus-950 px-6 py-3 font-bold text-white text-base hover:bg-teknikfokus-900 sm:px-8 sm:py-4 sm:text-lg"
      aria-label="no"
      onclick={() => click(false)}>No</button
    >
  </div>
</div>
