<script lang="ts">
  import api from "~/services/api";
  let name = "";
  let pass = "";

  const create = async () => {
    const res = await api
      .collection("users")
      .create({ username: name, password: pass, passwordConfirm: pass });
  };
</script>

<div class="flex flex-col gap-6 m-auto">
  <div>
    name:
    <input bind:value={name} />
  </div>
  <div>
    pass:
    <input bind:value={pass} />
  </div>

  <div class="flex flex-row gap-6">
    <button
      class="bg-gray-800 rounded-lg border-black p-2 w-auto"
      on:click={create}>create account</button
    >
    <button
      class="bg-gray-800 rounded-lg border-black p-2 w-auto"
      on:click={async () => {
        console.log("hi")
        const authData = await api
          .collection("users")
          .authWithPassword(name, pass);

        if (authData) {
          document.cookie = `token=${authData.token};`;
          location.reload();
        }
      }}>log in</button
    >
    <button class="bg-gray-800 rounded-lg border-black p-2 w-auto"
      >log out</button
    >
  </div>
</div>
