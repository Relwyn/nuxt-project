<template>
  <section class="hand">
    <div class="flex">
      <div v-for="(card, index) in cards" :key="index">
        <card
          :cardFaceUp="true"
          :cardChosen="cardChosen"
          :cardData="card || {}"
          class="active-hover"
          :class="cardChosen ? 'card-chosen' : ''"
          @click="handleSelectCard($event, index)"
        >
        </card>
      </div>
    </div>
    <modal class="modal" name="card-selected" @before-open="beforeOpen">
      <card :cardFaceUp="true" :cardData="selectedCard"></card>
      <button @click="handlePlaceCard">Jouer</button>
    </modal>
  </section>
</template>

<script>
import Card from '@/components/display/Card.vue'

export default {
  name: 'Hand',
  props: {
    cards: Array
  },
  data() {
    return {
      handCards: this.cards,
      cardId: null, // YuGiOh! card id
      cardIndex: null, // Index of card in hand
      cardChosen: false
    }
  },
  components: {
    Card
  },
  computed: {
    computedCards() {
      return this.handCards
    },
    selectedCard() {
      return this.cards.filter((e) => e.id === this.cardId)[0]
    }
  },
  methods: {
    beforeOpen(e) {
      this.cardId = e.params.id
      this.cardIndex = e.params.index
    },
    handleSelectCard(e, ind) {
      this.$modal.show('card-selected', { id: e, index: ind })
    },
    handlePlaceCard() {
      this.$store.dispatch('users/removeCard', this.cardIndex)
      this.$emit('placeCard', this.cardId)
    }
  }
}
</script>

<style>
.card-chosen img {
  opacity: 0.25;
}
</style>
