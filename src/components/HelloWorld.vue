<template>
  <div class="wrapper">
    <header>
      Autoritratto_0
    </header>
    <div id="chat-cnt">
      <div class="messages">
        <p id="text"></p>
      </div>
      <div class="textbox">
        <input v-model="message" placeholder="  A(m) I Marco?" v-on:keyup.enter="send(message)">
        <button v-on:click="send(message)">   send   </button>
      </div>
    </div>
  </div>
  
</template>


<script>
  import content from '../assets/tf_chat.txt'

  export default {
    data: function() {
      return {
        message: null,
        lines: []
      }
    },
    methods: {
      send(message) {
        if(this.message != null) {
          var textDiv = document.getElementById("text")
          textDiv.innerHTML += "    <br /> > " + message

          let lines = this.lines

          setTimeout(function() {
            textDiv.innerHTML += "<br /> ..."
          }, 500)

          setTimeout(function() {
            let textBefore = textDiv.innerHTML.split(' ...')[0]
            let chosenLine = lines[Math.floor(Math.random() * lines.length)].split(' - ')[1]
            if(chosenLine && chosenLine != "") {
              textDiv.innerHTML = textBefore + chosenLine
            } else {
              textDiv.innerHTML = textBefore + "Marco: I don't know"
            }
          }, 2500)
          
          this.message = null
        }
      }
    },

    mounted() {
       let lines = content.split(/\r\n|\r|\n/)
       this.lines = lines
    }
    

  }
</script>

<style>
.wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  top: 0;
  bottom: 0;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  color: deeppink;
  padding: 30px;
  width: 100vw;
  z-index: 999;
}

#chat-cnt {
  color: white;
  display: flex;
  flex-direction: column;
}

.messages {
  position: relative;
  bottom: 0;
  display: block;
  width: 100vw;
  height: 100%;
  min-height: calc(100vh - 100px);
  color: greenyellow;
}

.textbox {
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100vw;
}

p {
  position: absolute;
  display: block;
  bottom: 0;
}

input {
  width: 100%;
  background: none;
  -webkit-appearance: none;
  outline: none;
  color: white;
  border: 1px solid grey;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
}

input::placeholder {
  color: grey !important;
}

button {
  width: 75px;
  outline: none;
  border: 1px solid grey;
  -webkit-appearance: none;
  background: black;
  color: white
}
</style>
