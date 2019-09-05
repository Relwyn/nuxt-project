<template>
  <section class="duel">
    <div class="field-container">
      <div class="field-monster flex">
        <div class="field col-1 card-zone">Field</div>
        <div class="monster-zone col-2 flex">
          <div class="monster-1 card-zone">Monster Zone</div>
          <div class="monster-2 card-zone">
            <!-- <card :cardFaceUp="false"></card> -->
          </div>
          <div class="monster-3 card-zone">Monster Zone</div>
        </div>
        <div class="graveyard col-3 card-zone">Graveyard</div>
      </div>
      <div class="field-spell flex">
        <div class="extra-zone col-1 card-zone">Extra Deck</div>
        <div class="spell-zone col-2 flex">
          <div class="spell-1 card-zone">Spell/Trap Zone</div>
          <div class="spell-2 card-zone">Spell/Trap Zone</div>
          <div class="spell-3 card-zone">Spell/Trap Zone</div>
        </div>
        <div class="main-deck col-3 card-zone">Main Deck</div>
      </div>
    </div>
  </section>
</template>

<script>
// import Card from '@/components/display/Card.vue'

export default {
  name: 'Field',
  components: {
    // Card
  }
}
</script>

<style scoped>
.field-container {
  position: relative;
  border: 1px solid black;
  min-width: 840px;
  min-height: 492px;
  width: 75%;
  height: 60%;
}

.field-monster,
.field-spell {
  position: absolute;
  width: 100%;
  height: 50%;
}
.field-monster {
  top: 0;
  border: 1px solid red;
}
.field-spell {
  bottom: 0;
  border: 1px solid blue;
}

.col-1,
.col-2,
.col-3 {
  height: 100%;
  border: 1px solid green;
}
.col-1,
.col-3 {
  width: 20%;
}
.col-2 {
  width: 60%;
}
.card-zone {
  min-width: 168px;
  height: 100%;
  font-weight: 600;
  text-align: center;
  margin: auto;
}
</style>
