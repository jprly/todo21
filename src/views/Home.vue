<template>

<div style="display: flex;">
  <div style="margin: 10px; flex-grow: 2;"><span class="p-input-icon-left" style="    width: 100%;">
            <i class="pi pi-search" />
            <InputText type="text"  placeholder="Search" style=" width: 100%;  background-color: #cecece;"/>
        </span></div>
</div>

<Folders />

<AddFolder />
</template>

<script setup>
import {inject} from 'vue'
import Folders from '../components/Folders.vue'
import AddFolder from '../components/AddFolder.vue'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
// console.log(format(new Date(), "'Today is a' eeee"))
// console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }))
// console.log(formatRelative(subDays(new Date(), 3), new Date()))

const state = inject('store').state.value
const methods = inject('store').methods
state.activeFolder = null;
</script>

<style>

</style>