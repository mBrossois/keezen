import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useGameStore = defineStore('game', () => {
    const boardLayout = ref({
        red: {},
        blue: {},
        green: {},
        yellow: {}
    })
    const pieces = ref({
        red: {},
        blue: {},
        green: {},
        yellow: {}
    })
    function getNextPosition(piece) {

    }
    function setBoard(board) {
      boardLayout.value = board
    }
  
    return { getNextPosition, setBoard }
  })