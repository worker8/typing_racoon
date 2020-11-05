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
            fullText: "Mandela was only an infant at the time,"
                + " and his father's loss of status forced his mother to move the family to Qunu, an even smaller village north of Mvezo."
                + " The village was nestled in a narrow grassy valley; there were no roads, only footpaths that linked the pastures where livestock grazed."
                + " The family lived in huts and ate a local harvest of maize, sorghum, pumpkin and beans, which was all they could afford. Water came from springs and streams and cooking was done outdoors."
        }
    },
    methods: {
        onClick() {
            this.user_input = ""
        },
        onTextChange() {
            let remainingText = this.fullText.substring(this.pGreen.length)
            let userInput = this.user_input
            if (isEndWithWhiteSpace(userInput) ||
                /* is this the last word */
                remainingText.length === this.user_input.length) {
                // find the index of the whitespace
                let word = ""
                for (let i = 0; i < remainingText.length; i++) {
                    if (remainingText[i] === ' ') {
                        break
                    } else {
                        word += remainingText[i]
                    }
                }
                if (remainingText.length !== this.user_input.length) {
                    word += ' '
                }
                if (this.user_input === word) {
                    this.pGreen += remainingText.substring(0, this.user_input.length)
                    this.remainingText = remainingText.substring(this.user_input.length)
                    // flush the user input textarea, and other highlights
                    this.user_input = ""
                    this.cGreen = ""
                    this.cRed = ""
                    return
                }
            } else {// if it's the last word
                if (remainingText.length === this.user_input.length) {
                    // TODO: handle
                }
                console.log(`whatsLeft = ${remainingText}`)
                let tempGreen = ""
                let tempRed = ""
                for (let i = 0; i < this.user_input.length; i++) {
                    if (this.user_input[i] === remainingText[i]) {
                        tempGreen += this.user_input[i]
                    } else {
                        tempRed = remainingText.substring(i, this.user_input.length)
                        break
                    }
                }
                this.cGreen = tempGreen
                this.cRed = tempRed
                this.remainingText = remainingText.substring(this.cGreen.length + this.cRed.length)
            }
        }
    },
    beforeMount() {
        this.remainingText = this.fullText;
    }
}

function isEndWithWhiteSpace(s) {
    if (s != null && s.length > 0 && s.charAt(s.length - 1) === ' ') {
        return true
    }
    return false
}

function indexOfWhiteSpace(s) {

}
