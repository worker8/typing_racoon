<template>
  <div id="show_text">
    <span id="test">
    </span>
  </div>
  <br>
  <div class="md:max-w-sm lg:max-w-2xl xl:max-w-2xl mx-auto">
    <img class="mx-auto"
         src="https://user-images.githubusercontent.com/1988156/104120379-be130d80-5379-11eb-8b71-86dbaa5a71ab.png"
         width="300"/>
    <span>  wpm: </span><span id="wpm">{{ wpm }}</span>
    <br>
    <br>
    <div class="flex flex-col">
      <div id="text_area">
        <span id="permanent_green"/>
        <span id="current_green"/>
        <span id="cursor"/>
        <span id="current_red"/><span id="text-remaining"/>
      </div>
      <br>
      <textarea class="border-2" v-model="userInput" @keyup="onTextChange" autofocus/>
      <br>
    </div>
  </div>
</template>


<script src="./HomeComponent.ts"/>
<style src="./HomeComponent.css"/>
