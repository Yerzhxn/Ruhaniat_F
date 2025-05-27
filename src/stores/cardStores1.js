import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardStore', {
    state: () => ({
        selectedCard: null
    }),
    actions: {
        setCard(card) {
        this.selectedCard = card
        }
    }
})