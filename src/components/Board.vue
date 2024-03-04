<script setup lang="ts">
import { ref } from 'vue';
import { useAnimations, useGLTF } from '@tresjs/cientos';

const { scene, nodes, animations, materials } = await useGLTF(
  '/Board/keezen-board.gltf'
);

//const { actions } = useAnimations(animations, model);

//const currentAction = ref(actions.Greeting);

//currentAction.value.play();
console.log(nodes);
const nodeKeys = Object.keys(nodes);
const cylindersKeys = nodeKeys.filter((value) => value.includes('Cylinder'));

const cylinders = cylindersKeys.map((cy) => {
  return { name: cy, values: nodes[cy] };
});

console.log('cy', cylinders);
const position = cylinders[0].values.position;
console.log('pos', position);
</script>

<template>
  <primitive :object="scene" />
  <TresMesh :position="[position.x, position.y, position.z]" :scale="0.3">
    <TresCylinderGeometry />
    <TresMeshToonMaterial color="#FBB03B" />
  </TresMesh>
</template>
