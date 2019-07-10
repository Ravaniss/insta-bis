<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    background-color: #F7F7F7;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

  .form-group {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    padding: 25px;

    input {
      width: 100%;
      height: 30px;
      border: 1px solid #DDD;
      margin-bottom: 15px;
      text-indent: 5px;
      background-color: #EEE;
      outline: none;

      &.err {
        background-color: rgba(255, 0, 0, 0.2);
        border: 1px solid #AF1E2D;
      }

      &:hover {
        cursor: pointer;
      }

      &:focus {
        border: 1px solid #AAA;
      }
    }

    button {
      width: 100%;
      height: 30px;
      background: #FFCE00;
      appearance: none;
      border: none;
      outline: none;
      border-radius: 8px;
      color: #171717;
      font-size: 18px;
      font-weight: 700;
    }

    .errorMsg {
      margin: 15px 0;
      padding: 10px;
      background-color: rgba(200, 0, 0, 0.2);
      color: #171717;
      font-size: 14px;
      font-weight: 700;
      border-radius: 8px;
    }
  }
</style>
