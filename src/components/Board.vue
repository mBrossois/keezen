<script setup lang="ts">
import { ref } from 'vue';
import { useAnimations, useGLTF } from '@tresjs/cientos';
import { useGameStore } from '../store';

const gameStore = useGameStore() 

const { scene, nodes, animations, materials } = await useGLTF(
  '/Board/keezen.gltf'
);

//const { actions } = useAnimations(animations, model);

//const currentAction = ref(actions.Greeting);

//currentAction.value.play();
const nodeKeys = Object.keys(nodes);
const cylindersKeys = nodeKeys.filter((value) => value.includes('Cylinder')).sort();

function cylinderList(types: string) {
  return cylindersKeys
            .filter(val => val.includes(types))
            .map(value => {
              return { name: value, position: nodes[value].position }
            })
}

const cylBlue = {
  graveyard: cylinderList('blue_graveyard'),
  finish: cylinderList('blue_finish'),
  field: cylinderList('blue_field')
}

const cylRed = {
  graveyard: cylinderList('red_graveyard'),
  finish: cylinderList('red_finish'),
  field: cylinderList('red_field')
}

const cylGreen = {
  graveyard: cylinderList('green_graveyard'),
  finish: cylinderList('green_finish'),
  field: cylinderList('green_field')
}

const cylYellow = {
  graveyard: cylinderList('yellow_graveyard'),
  finish: cylinderList('yellow_finish'),
  field: cylinderList('yellow_field')
}

gameStore.setBoard({
  red: cylRed,
  green: cylGreen,
  blue: cylBlue,
  yellow: cylYellow,
})

</script>

<template>
  <primitive :object="scene" />
  <TresMesh :position="cylBlue.field[5].position" :scale="0.28">
    <TresCylinderGeometry />
    <TresMeshStandardMaterial color="#FBB03B" :opacity="0.75" transparent  />
  </TresMesh>
</template>
