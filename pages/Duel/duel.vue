<template>
  <section class="duel">
    <field></field>
    <div class="hand flex">
      <hand :cards="cards" @placeCard="placeCard($event)"></hand>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Field from '@/components/display/Field.vue'
import Hand from '@/components/display/Hand.vue'

export default {
  name: 'Duel',
  components: {
    Field,
    Hand
  },
  data() {
    return {
      deck: [91152256, 46986414, 38033121, 28279543, 41392891]
    }
  },
  computed: {
    ...mapState({
      cards: (state) => state.users.cards
    })
  },
  async mounted() {
    for (let i = 0; i < this.deck.length; i++) {
      await this.$store.dispatch('users/setCards', { name: this.deck[i] })
    }
  },
  methods: {
    placeCard(event) {
      console.log(event)
      console.log(this.cards.filter((e) => e.id === event)[0])
    }
  }
}
</script>
