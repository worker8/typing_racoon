<template>
  <div id="show_text">
    <span id="test">

    </span>
  </div>
  <br>
  <div class="word-wrap">
    <span>  wpm: </span><span id="wpm">{{ wpm }}</span>
    <br>
    <br>
    <span id="permanent_green">{{ pGreen }}</span><span id="current_green">{{ cGreen }}</span>
    <span id="current_red">{{ cRed }}</span><span id="text-remaining">{{ remainingText }}</span>
    <br>
    <textarea v-model="userInput" @keyup="onTextChange"/>
    <br>
  </div>
</template>


<script src="./HomeComponent.ts"/>
<style src="./HomeComponent.css"/>
