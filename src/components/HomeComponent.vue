<template>
  <div id="show_text">
    <span id="test">

    </span>
  </div>
  <br>
  <div class="word-wrap">
    Input Text:
    <br>
    <span id="text-typed">{{ typedText }}</span><span id="text-remaining">{{ remainingText }}</span>
    <br>
    <textarea v-model="user_input" @keyup="onTextChange"/>
    <br>
    <button v-on:click="onClick">Clear Input</button>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      user_input: "",
      typedText: "",
      remainingText: "Mandela was only an infant at the time, and his father's loss of status forced his mother to move the family to Qunu, an even smaller village north of Mvezo. The village was nestled in a narrow grassy valley; there were no roads, only footpaths that linked the pastures where livestock grazed.\n" +
          "      The family lived in huts and ate a local harvest of maize, sorghum, pumpkin and beans, which was all they could afford. Water came from springs and streams and cooking was done outdoors."
    }
  },
  methods: {
    onClick() {
      this.user_input = ""
    },
    onTextChange() {
      if (this.remainingText[0] === this.user_input[this.user_input.length - 1]) {
        this.typedText += this.remainingText[0]
        this.remainingText = this.remainingText.substring(1)
      }
      console.log("changed")
    }
  },
  beforeMount() {

  }
}
</script>

<style scoped>
.word-wrap {
  width: 1000px;
  word-wrap: break-word;
}

#text-typed {
  color: blue;
  text-underline: blue;
}

#text-remaining {
  color: #2c3e50;
  text-underline: none;
}
</style>