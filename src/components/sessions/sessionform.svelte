<script lang="ts">
  interface Company {
    name: string;
    logo: string;
    logoDark?: string;
    pitch?: string;
  }

  interface Props {
    companies: Company[];
  }

  interface SubmissionPayload {
    name: string;
    email: string;
    companies: string[];
    fileName: string;
    fileType: string;
    fileData: string; // Base64 string
    about: string;
  }

  interface ApiResponse {
    result: "success" | "error";
    file?: string;
    error?: string;
  }

  type SubmissionStatus = "idle" | "submitting" | "success" | "error";

  let { companies = [] }: Props = $props();

  let name = $state("");
  let email = $state("");
  let selectedCompanies = $state<string[]>([]);
  let submissionStatus = $state<SubmissionStatus>("idle");
  let about = $state("");
  let gdprAccepted = $state(false);

  // Ref for the file input
  let fileInput = $state<HTMLInputElement | null>(null);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwtGmALOdsgW5sbj9CgKr7SS6vMadYpS4ZyT66WZf5_mAJkI9FOfWGiAUCAelnwzKjJUA/exec";

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  function toggleCompany(companyName: string): void {
    if (selectedCompanies.includes(companyName)) {
      selectedCompanies = selectedCompanies.filter((c) => c !== companyName);
    } else {
      selectedCompanies = [...selectedCompanies, companyName];
    }
  }

  function isSelected(companyName: string): boolean {
    return selectedCompanies.includes(companyName);
  }

  async function handleSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    if (selectedCompanies.length === 0) {
      alert("Please select at least one company.");
      return;
    }

    const file = fileInput?.files?.[0];
    if (!file) {
      alert("Please upload your CV.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("Please upload a PDF smaller than 10MB.");
      return;
    }
    if (!gdprAccepted) {
      alert("Please accept the GDPR consent.");
      return;
    }

    submissionStatus = "submitting";

    try {
      const base64Data = await fileToBase64(file);

      const payload: SubmissionPayload = {
        name,
        email,
        companies: selectedCompanies,
        fileName: `${name.trim().replace(/\s+/g, "_")}_CV.pdf`,
        fileType: file.type,
        fileData: base64Data,
        about,
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          // Note: GAS often prefers text/plain to avoid CORS preflight issues
        },
      });

      const result: ApiResponse = await response.json();

      if (result.result === "success") {
        submissionStatus = "success";
        name = "";
        email = "";
        selectedCompanies = [];
        about = "";
        gdprAccepted = false;
        if (fileInput) fileInput.value = "";
      } else {
        throw new Error(result.error || "Server error");
      }
    } catch (e) {
      console.error("Submission error:", e);
      submissionStatus = "error";
    }
  }
</script>

<div
  class="rounded-xl border border-slate-200 bg-offset p-6 shadow-md dark:border-slate-800"
>
  {#if submissionStatus === "success"}
    <div
      class="rounded-xl border-2 border-green-500 bg-green-50 p-8 text-center dark:bg-green-950"
    >
      <h2 class="text-2xl font-bold">Thanks for your application!</h2>
      <p class="mt-2 text-slate-700 dark:text-slate-300">
        Your CV has been received and your selected companies have been
        notified.
      </p>
      <button
        class="mt-4 rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
        onclick={() => (submissionStatus = "idle")}
      >
        Send another application
      </button>
    </div>
  {:else}
    <form class="space-y-5" onsubmit={handleSubmit}>
      <div class="space-y-2">
        <label class="font-bold" for="name">
          Full name <span class="text-red-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          class="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          placeholder="Your name"
          bind:value={name}
          disabled={submissionStatus === "submitting"}
          required
        />
      </div>

      <div class="space-y-2">
        <label class="font-bold" for="email">
          University email <span class="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          class="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          placeholder="firstname.lastname@example.com"
          bind:value={email}
          disabled={submissionStatus === "submitting"}
          required
        />
      </div>

      <fieldset class="space-y-3">
        <legend class="font-bold">
          Which companies do you want to meet? <span class="text-red-600"
            >*</span
          >
        </legend>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
          {#each companies as company (company.name)}
            <button
              type="button"
              class="flex min-h-56 w-full flex-col items-center justify-between rounded-xl border border-slate-300 bg-slate-50 p-6 text-center transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-slate-900 {isSelected(
                company.name,
              )
                ? 'ring-2 ring-blue-500'
                : ''}"
              aria-pressed={isSelected(company.name)}
              onclick={() => toggleCompany(company.name)}
              disabled={submissionStatus === "submitting"}
            >
              {#if company.logoDark}
                <img
                  class="h-24 w-24 flex-shrink-0 object-contain dark:hidden"
                  src={company.logo}
                  alt={`${company.name} logo`}
                  loading="lazy"
                />
                <img
                  class="hidden h-24 w-24 flex-shrink-0 object-contain dark:block"
                  src={company.logoDark}
                  alt={`${company.name} logo`}
                  loading="lazy"
                />
              {:else}
                <img
                  class="h-24 w-24 flex-shrink-0 object-contain"
                  src={company.logo}
                  alt={`${company.name} logo`}
                  loading="lazy"
                />
              {/if}
              <div class="mt-3 space-y-1">
                <span
                  class="block font-bold text-slate-900 dark:text-slate-100"
                >
                  {company.name}
                </span>
                {#if company.pitch}
                  <span
                    class="block text-sm text-slate-600 dark:text-slate-300"
                  >
                    {company.pitch}
                  </span>
                {/if}
              </div>
            </button>
          {/each}
        </div>
      </fieldset>

      <div class="space-y-2">
        <label class="font-bold" for="cv">
          Upload CV (PDF) <span class="text-red-600">*</span>
        </label>
        <input
          id="cv"
          type="file"
          class="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-slate-700 hover:file:bg-slate-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:file:bg-slate-800 dark:file:text-slate-100"
          accept="application/pdf"
          bind:this={fileInput}
          disabled={submissionStatus === "submitting"}
          required
        />
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Max file size: 10MB.
        </p>
      </div>

      <div class="space-y-2">
        <label class="font-bold" for="about">
          Tell us about yourself and why these companies should meet you!
          <span class="text-red-600">*</span>
        </label>
        <textarea
          id="about"
          class="min-h-32 w-full rounded-lg border border-slate-300 bg-white p-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          placeholder="A short introduction and what you're looking for..."
          bind:value={about}
          disabled={submissionStatus === "submitting"}
          required
        ></textarea>
      </div>

      <div
        class="flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950"
      >
        <input
          id="gdpr"
          type="checkbox"
          class="mt-1 h-4 w-4 accent-blue-600"
          bind:checked={gdprAccepted}
          disabled={submissionStatus === "submitting"}
          required
        />
        <label class="text-sm text-slate-700 dark:text-slate-300" for="gdpr">
          I consent to the processing of my personal data for the purposes of
          Student Sessions matching in accorance with GDPR. The collected data
          will deleted no later than 28 February 2026. <span
            class="text-red-600">*</span
          >
        </label>
      </div>

      <button
        type="submit"
        class="w-full rounded-lg bg-blue-600 px-4 py-3 font-bold text-white hover:bg-blue-700 disabled:bg-slate-400"
        disabled={submissionStatus === "submitting"}
      >
        {submissionStatus === "submitting"
          ? "Submitting..."
          : "Submit application"}
      </button>

      {#if submissionStatus === "error"}
        <p class="text-center text-red-600 dark:text-red-400">
          Something went wrong. Please try again.
        </p>
      {/if}
    </form>
  {/if}
</div>
