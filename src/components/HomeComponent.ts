import {defineComponent} from 'vue'
import axios from 'axios';
import $ from 'jquery';

export default defineComponent({
    name: "HomeComponent",
    data() {
        return {
            seconds: 0,
            wpm: 0,
            charCount: 0,
            wordCount: 0, /* TODO: this can be removed... */
            startFlags: false,
            endFlag: false,
            userInput: "",
            pGreen: "",
            cGreen: "",
            cRed: "",
            typedText: "",
            remainingText: "",
            fullText: "Mandela was only an infant at the time,"
                + " and his father's loss of status forced his mother to move the family to Qunu, an even smaller village north of Mvezo."
                + " The village was nestled in a narrow grassy valley; there were no roads, only footpaths that linked the pastures where livestock grazed."
                + " The family lived in huts and ate a local harvest of maize, sorghum, pumpkin and beans, which was all they could afford."
        }
    },
    methods: {
        onTextChange() {
            this.startFlags = true
            let remainingText = this.fullText.substring(this.pGreen.length)
            let userInput = this.userInput
            // 1. if userInput ends with a whitespace, check if it matches
            let newUserInput = undefined
            let newRemainingText = undefined
            let containWhiteSpace = hasWhiteSpace(userInput)
            let shift = 0
            if (containWhiteSpace) {
                shift = 1
            }
            if (containWhiteSpace ||
                /* is this the last word */
                remainingText.length === this.userInput.length) {
                let userInputList = userInput.split(" ")
                // let remainingTextList = remainingText.split(/[ ]+/)
                let remainingTextList = remainingText.split(" ")
                if (userInputList.length > 0 && remainingTextList.length > 0) {
                    if (userInputList[0] === remainingTextList[0]) { // 1 correct word typed
                        this.pGreen += remainingText.substring(0, userInputList[0].length + shift)
                        $("#permanent_green").text(this.pGreen)
                        newRemainingText = remainingText.substring(userInputList[0].length + shift)
                        newUserInput = userInput.substring(userInputList[0].length + shift)
                        if (newRemainingText.length == 0) {
                            this.endFlag = true
                        }
                        this.wordCount += 1
                        this.charCount += userInputList[0].length + 1 // +1 is for the whitespace
                        // check on if remaining text has anything left
                    }
                }
            }
            let tempGreen = ""
            let tempRed = ""
            if (newUserInput === undefined) {
                newUserInput = this.userInput
            }
            if (newRemainingText === undefined) {
                newRemainingText = remainingText
            }
            for (let i = 0; i < newUserInput.length; i++) {
                if (newUserInput[i] === newRemainingText[i]) {
                    tempGreen += newUserInput[i]
                } else {
                    tempRed = newRemainingText.substring(i, newUserInput.length)
                    break
                }
            }
            this.userInput = newUserInput

            this.cGreen = tempGreen
            this.cRed = tempRed
            this.remainingText = newRemainingText.substring(this.cGreen.length + this.cRed.length)
            $("#current_green").text(this.cGreen)
            $("#current_red").text(this.cRed)
            $("#text-remaining").text(this.remainingText)
        }
    },
    beforeMount() {
        let intervalId = setInterval(() => {
            if (this.startFlags) {
                this.seconds = this.seconds + 1;
                this.wpm = Math.round((this.charCount / 5) * (60 / this.seconds))
            }
            if (this.endFlag) clearInterval(intervalId)
        }, 1000)
        axios.defaults.headers.get["Access-Control-Allow-Origin"] = '*';
        axios.defaults.headers.get["Content-Type"] = "application/json";
        // axios.get("http://localhost:4500/").then((response) => {
            axios.get("https://typing-racoon-backend.herokuapp.com/").then((response) => {
            console.log(response.status)
            console.log(response.data)
            // this.fullText = "My mother had to abandon her quest, but managed to extract from the restriction itself a further delicate thought, like good poets whom the tyranny of rhyme forces into the discovery of their finest lines."
            this.fullText = response.data.quote
            this.remainingText = this.fullText;
            $("#text-remaining").text(this.remainingText)
        });
        this.remainingText = this.fullText;
        $("#text-remaining").text(this.remainingText)
    }

})

function hasWhiteSpace(s: string) {
    return (s != null && s.length > 0 && s.includes(' '));
}
