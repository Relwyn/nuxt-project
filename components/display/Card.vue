<template>
  <section class="card" @click="$emit('click', id)">
    <div class="card-image">
      <img ref="cardImage" :src="computedImage" />
    </div>
    <div class="card-infos"></div>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData: Object,
    cardFaceUp: Boolean
  },
  data() {
    return {
      name: this.cardData.name,
      race: this.cardData.race,
      type: this.cardData.type,
      attribute: this.cardData.attribute,
      level: this.cardData.level,
      atk: this.cardData.atk,
      def: this.cardData.def,
      id: this.cardData.id,
      image: this.cardData.card_images[0].image_url_small,
      description: this.cardData.desc,
      cardChosen: false
    }
  },
  computed: {
    computedImage() {
      if (this.cardFaceUp) {
        return this.image
      } else {
        return `/images/card-facedown.png`
      }
    }
  },
  methods: {
    documentClick(e) {
      const el = this.$refs.cardImage
      const target = e.target
      // if ( el !== target && !el.contains(target)) {
      if (el !== target) {
        this.cardChosen = false
      }
    }
  }
}
</script>

<style scoped>
.card-image {
  width: 168px;
  height: 246px;
}
.card-image > img {
  max-width: 100%;
  max-height: 100%;
  /*transition: all 1s;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
  -o-transition: all 1s;*/
}
/* Hover */
.active-hover:hover .card-image > img {
  transform: scale(1.15);
  -ms-transform: scale(1.15);
  -webkit-transform: scale(1.15);
  -o-transform: scale(1.15);
  -moz-transform: scale(1.15);
}
</style>
