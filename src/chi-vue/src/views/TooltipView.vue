<template>
  <div id="tooltipview">
    <h2>Tooltip</h2>
    <h3>Base</h3>
    <div class="-p--3">
      <div class="chi-grid">
        <div class="chi-col -w--12">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip message="Top Tooltip message">
              <button class="chi-button">Top</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--6">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Left Tooltip message" position="left">
              <button class="chi-button">Left</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--6">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Right Tooltip message" position="right">
              <button class="chi-button">Right</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--12">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Bottom Tooltip message" position="bottom">
              <button class="chi-button">Bottom</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
    <h3 class="-mt--10">Light</h3>
    <div class="-p--3 -bg--black">
      <div class="chi-grid">
        <div class="chi-col -w--12">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip message="Top Tooltip message" color="light">
              <button class="chi-button -outline -light">Top</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--6">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Left Tooltip message" position="left" color="light">
              <button class="chi-button -outline -light">Left</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--6">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Right Tooltip message" position="right" color="light">
              <button class="chi-button -outline -light">Right</button>
            </Tooltip>
          </div>
        </div>
        <div class="chi-col -w--12">
          <div class="-d--flex -w--100 -justify-content--center">
            <Tooltip class="-mt--3" message="Bottom Tooltip message" position="bottom" :color="color">
              <button class="chi-button -outline -light">Bottom</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>

    <div class="tooltip-update -py--5">
      <button class="chi-button" @click="() => toggleColor()">Toggle Color</button>
      <select class="chi-button -ml--1" @change="e => changePosition(e.target.value)">
        <option value="top">Top</option>
        <option value="right">Right</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
      </select>
      <Tooltip class="-mt--3" message="Bottom Tooltip message" :position="position" :color="color">
        <button class="chi-button" selected>Dynamic tooltip</button>
      </Tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import Tooltip from '../components/tooltip/tooltip';

@Component({
  components: {
    Tooltip,
  },
  data: () => {
    return {
      color: 'light',
      position: 'top',
    };
  },
})
export default class TooltipView extends Vue {
  toggleColor() {
    if (this.$data.color === 'light') {
      this.$data.color = '';
    } else {
      this.$data.color = 'light';
    }
  }

  changePosition(e: string) {
    this.$data.position = e;
  }
}
</script>

<style lang="scss"></style>
