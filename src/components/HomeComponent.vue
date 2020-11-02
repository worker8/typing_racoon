<template>
  <div id="show_text">
    <span id="test">Note that there may be variations e.g., a company may contact you, or you
    may submit via your college's career placement center. The screening may involve
    a homework assignment to be done before or after the conversation. The on-site
    interview may be conducted over a video chat session. Most on-sites are half a day,
    but others may last the entire day. For anything involving interaction over a network,
    be absolutely sure to work out logistics (a quiet place to talk with a landline rather
    than a mobile, familiarity with the coding website and chat software, etc.) well in
    advance.
    </span>
  </div>
  <br>
  <div>
    Input Text:
    {{ user_input }}
  </div>
  <br>
  <input v-model="user_input"/>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {user_input: ""}
  },
}
</script>

<style scoped>

</style>