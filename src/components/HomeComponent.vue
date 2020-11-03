<template>
  <div id="show_text">
    <span id="test">

    </span>
  </div>
  <br>
  <div class="word-wrap">
    <br>
    <span id="permanent_green">{{ pGreen }}</span><span id="current_green">{{ cGreen }}</span>
    <span id="current_red">{{ cRed }}</span><span id="text-remaining">{{ remainingText }}</span>
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
      pGreen: "",
      cGreen: "",
      cRed: "",
      typedText: "",
      remainingText: "",
      fullText: "Mandela was only an infant at the time, and his father's loss of status forced his mother to move the family to Qunu, an even smaller village north of Mvezo. The village was nestled in a narrow grassy valley; there were no roads, only footpaths that linked the pastures where livestock grazed.\n" +
          "The family lived in huts and ate a local harvest of maize, sorghum, pumpkin and beans, which was all they could afford. Water came from springs and streams and cooking was done outdoors."
    }
  },
  methods: {
    onClick() {
      this.user_input = ""
    },
    onTextChange() {
      let whatsLeft = this.fullText.substring(this.pGreen.length)
      console.log(`whatsLeft = ${whatsLeft}`)
      let tempGreen = ""
      let tempRed = ""
      for (let i = 0; i < this.user_input.length; i++) {
        if (this.user_input[i] === whatsLeft[i]) {
          tempGreen += this.user_input[i]
        } else {
          tempRed = whatsLeft.substring(i, this.user_input.length)
          break
        }
      }
      this.cGreen = tempGreen
      this.cRed = tempRed
      this.remainingText = whatsLeft.substring(this.cGreen.length + this.cRed.length)
      console.log(`cGreen = ${this.cGreen}`)
      console.log(`cRed = ${this.cRed}`)
      console.log(`remainingText = ${this.remainingText}`)
    }
  },
  beforeMount() {
    this.remainingText = this.fullText;
  }
}
</script>

<style scoped>
.word-wrap {
  word-wrap: break-word;
}

textarea {
  margin-top: 30px;
  width: 500px;
  height: 100px;
}

#text-remaining {
  color: #2c3e50;
  text-underline: none;
}

#permanent_green {
  color: darkslateblue;
}

#current_green {
  color: darkslateblue;
  text-decoration-line: underline;
}

#current_red {
  background: cadetblue;
  text-decoration-line: underline;
}

</style>