<template>
  <section class="user-deck">
    <table>
      <tr v-for="(group, groupIndex) in cardGroups" :key="groupIndex">
        <td v-for="(card, index) in group" :key="index">
          <div>{{ card.name }}</div>
          <img :src="card.card_images[0].image_url_small" />
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import { getCardInfo } from '@/api/api.js'

export default {
  name: 'UserDeck',
  data() {
    return {
      id: [
        91152256,
        46986414,
        38033121,
        12580477,
        70781052,
        28279543,
        41392891,
        32452818
      ],
      cards: []
    }
  },
  computed: {
    cardGroups() {
      const res = []
      let count = 0
      while (count < this.cards.length) {
        res.push(this.cards.slice(count, 5 + count))
        count += 5
      }
      return res
    }
  },
  async mounted() {
    for (let i = 0; i < this.id.length; i++) {
      const params = { name: this.id[i] }
      const data = await getCardInfo(params)
      console.log(data)
      if (data) {
        this.cards.push(data[0])
      } else {
        console.log('probleme récupération données  ' + i)
      }
    }
  }
}
</script>
<style></style>
