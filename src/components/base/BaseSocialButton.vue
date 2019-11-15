<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick"
  :class=`[
    "dm-base-social-button",
    "dm-base-social-button--" + network,
    "dm-base-social-button--" + size,
    "dm-base-social-button--" + theme,
    {
      "dm-base-social-button--disabled": disabled || loading,
      "dm-base-social-button--full-width": fullWidth,
      "dm-base-social-button--loading": loading
    }
  ]`
  :disabled="disabled || loading"
  type="button"
)
  span.dm-base-social-button__inner
    base-spinner(
      v-if="loading"
      color="white"
      size="mini"
    )

    template(
      v-if="!loading"
    )
      span.dm-base-social-button__icon

      span.dm-base-social-button__label
        slot
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT: COMPONENTS
import BaseSpinner from "./BaseSpinner.vue"

export default {
  components: {
    BaseSpinner
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    network: {
      type: String,
      required: true,
      validator(x) {
        return ["facebook", "google", "messenger", "shopify", "twitter"].includes(x)
      }
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["nano", "micro", "mini", "small", "default", "medium", "large"].includes(x)
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      this.$emit("click", this.network, event)
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_maps.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".dm-base-social-button";
$networks: "facebook", "google", "messenger", "shopify", "twitter";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large";

#{$c} {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-position: center;
  box-shadow: inset -1px 1px 0 0 rgba(255, 255, 255, 0);
  color: mdg($dark, "colors", "white");
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
  transition: all 250ms linear;
  user-select: none;
  cursor: pointer;

  #{$c}__inner {
    display: flex;
    align-items: center;
    justify-content: center;

    #{$c}__icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
    }

    #{$c}__label {
      margin-left: 6px;
      font-weight: 500;
    }
  }

  // --> NETWORKS <--

  @each $network in $networks {
    &--#{$network} {
      background: map-get($socialColors, $network)
        radial-gradient(circle, transparent 1%, map-get($socialColors, $network) 1%)
        center/15000%;

      &:hover {
        &:not(#{$c}--disabled) {
          background-color: lighten(map-get($socialColors, $network), 10%);
        }
      }

      &:active {
        &:not(#{$c}--disabled) {
          background-color: lighten(map-get($socialColors, $network), 10%);
        }
      }

      &:focus {
        box-shadow: 0 0 0 2px mdg($dark, "backgrounds", "default", "primary"),
          0 0 0 3px lighten(map-get($socialColors, $network), 10%);
      }

      #{$c}__inner {
        #{$c}__icon {
          @if ($network == facebook) {
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5mYWNlYm9vazwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJXZWJzaXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRGFyay1Nb2RlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDQxLjAwMDAwMCwgLTMwMDkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJDb250ZW50LVs0MHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NS4wMDAwMDAsIDYwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNvY2lhbC1Db25uZWN0cy1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTUuMDAwMDAwLCAyODM2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDb250ZW50LVsyMHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJGYWNlYm9vay1bMjBoLW1dIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjEuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4Ljg5NjE5MSwwIEwxLjEwMzgwOSwwIEMwLjQ5NDEyODc1NSwwIDAsMC40OTQxMjY5MDQgMCwxLjEwMzgwNDg3IEwwLDE4Ljg5NjEyMDIgQzAsMTkuNTA1NzIzMiAwLjQ5NDEyODc1NSwyMCAxLjEwMzgwOSwyMCBMMTAuNjgyNjY4LDIwIEwxMC42ODI2NjgsMTIuMjU0OTMxNyBMOC4wNzYyNDAwMSwxMi4yNTQ5MzE3IEw4LjA3NjI0MDAxLDkuMjM2NTE2MjMgTDEwLjY4MjY2OCw5LjIzNjUxNjIzIEwxMC42ODI2NjgsNy4wMTA1NDcyMiBDMTAuNjgyNjY4LDQuNDI3MzU5MDcgMTIuMjYwMzczLDMuMDIwNzM4NDkgMTQuNTY0ODA4NSwzLjAyMDczODQ5IEMxNS42Njg2OTI0LDMuMDIwNzM4NDkgMTYuNjE3MzgzNywzLjEwMjg2ODE3IDE2Ljg5MzgyMywzLjEzOTU4NjczIEwxNi44OTM4MjMsNS44MzkyMjUxNiBMMTUuMjk1NTg1NSw1LjgzOTk3NDUyIEMxNC4wNDIzNTM5LDUuODM5OTc0NTIgMTMuNzk5NjM1OCw2LjQzNTQ4OTYxIDEzLjc5OTYzNTgsNy4zMDkzOTEzMyBMMTMuNzk5NjM1OCw5LjIzNjUxNjIzIEwxNi43ODg2MTI3LDkuMjM2NTE2MjMgTDE2LjM5OTQ2OTUsMTIuMjU0OTMxNyBMMTMuNzk5NjM1OCwxMi4yNTQ5MzE3IEwxMy43OTk2MzU4LDIwIEwxOC44OTYxOTEsMjAgQzE5LjUwNTc5NjMsMjAgMjAsMTkuNTA1NzIzMiAyMCwxOC44OTYxMjAyIEwyMCwxLjEwMzgwNDg3IEMyMCwwLjQ5NDEyNjkwNCAxOS41MDU3OTYzLDAgMTguODk2MTkxLDAiIGlkPSJmYWNlYm9vayI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
          } @else if ($network == google) {
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5nb29nbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iV2Vic2l0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRhcmstTW9kZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1MC4wMDAwMDAsIC0zMTg5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwtQ29ubmVjdHMtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU1LjAwMDAwMCwgMjgzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bMjB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR29vZ2xlLVsyMGgtbV0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxODAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGFyZ2UtW2MtbV0iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYWJlbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcwLjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS44MjE1MzY2LDguMDAzODY0OTkgTDEwLjIxMTI5ODMsOC4wMDM4NjQ5OSBDMTAuMjExMjk4Myw5LjAwMzMwMjM3IDEwLjIxMTI5ODMsMTEuMDAyMTc3MSAxMC4yMDUxNzE5LDEyLjAwMTYxNDUgTDE1Ljc3NDA0NTcsMTIuMDAxNjE0NSBDMTUuNTYwNjQzNiwxMy4wMDEwNTE5IDE0LjgwNDAzNjUsMTQuNDAwMjY0MyAxMy43MzQ5ODQzLDE1LjEwNDg2NzYgQzEzLjczMzk2MzIsMTUuMTAzODY4MiAxMy43MzI5NDIxLDE1LjExMDg2NDIgMTMuNzMwOSwxNS4xMDk4NjQ4IEMxMi4zMDk1ODEzLDE2LjA0ODMzNjUgMTAuNDMzODg5OSwxNi4yNjEyMTY3IDkuMDQxMTYwOTMsMTUuOTgxMzc0MiBDNi44NTgxMjk3NSwxNS41NDc2MTg0IDUuMTMwNDkyMzYsMTMuOTY0NTA5NiA0LjQyOTAyMjU3LDExLjk1MzY0MTUgQzQuNDMzMTA2ODIsMTEuOTUwNjQzMiA0LjQzNjE3LDExLjkyMjY1OSA0LjQzOTIzMzE5LDExLjkyMDY2MDEgQzQuMDAwMTc2NCwxMC42NzMzNjIyIDQuMDAwMTc2NCw5LjAwMzMwMjM3IDQuNDM5MjMzMTksOC4wMDM4NjQ5OSBMNC40MzgyMTIxMyw4LjAwMzg2NDk5IEM1LjAwMzg4MDY0LDYuMTY2ODk5MDggNi43ODM1OTIyMSw0LjQ5MDg0MjU4IDguOTY5Njg2NTcsNC4wMzIxMDA4MiBDMTAuNzI3OTU1OCwzLjY1OTMxMDY4IDEyLjcxMTg3OTksNC4wNjMwODMzOCAxNC4xNzA5Nzc5LDUuNDI4MzE0ODUgQzE0LjM2NDk3OTcsNS4yMzg0MjE3NCAxNi44NTYzNzE3LDIuODA1NzkxMTUgMTcuMDQzMjI2MSwyLjYwNzkwMjU1IEMxMi4wNTg0LC0xLjkwNjU1NjEyIDQuMDc2NzU2MDgsLTAuMzE4NDUwMTE2IDEuMDkwMTQ4ODgsNS41MTEyNjgxNSBMMS4wODkxMjc4Miw1LjUxMTI2ODE1IEMxLjA4OTEyNzgyLDUuNTExMjY4MTUgMS4wOTAxNDg4OCw1LjUxMTI2ODE1IDEuMDg0MDIyNTEsNS41MjIyNjE5NiBMMS4wODQwMjI1MSw1LjUyMjI2MTk2IEMtMC4zOTM0NTQ2MjcsOC4zODU2NTAwNyAtMC4zMzIxOTA4ODksMTEuNzU5NzUwNyAxLjA5NDIzMzEzLDE0LjQ4NjIxNTkgQzEuMDkwMTQ4ODgsMTQuNDg5MjE0MiAxLjA4NzA4NTY5LDE0LjQ5MTIxMzEgMS4wODQwMjI1MSwxNC40OTQyMTE0IEMyLjM3NjY4NzM2LDE3LjAwMjc5OTIgNC43MjkyMTQ4OCwxOC45MjY3MTYyIDcuNTYzNjgzOCwxOS42NTkzMDM4IEMxMC41NzQ3OTY1LDIwLjQ0ODg1OTMgMTQuNDA2ODQzMywxOS45MDkxNjMxIDE2Ljk3Mzc5MzksMTcuNTg3NDcwMSBDMTYuOTc0ODE0OSwxNy41ODg0Njk1IDE2Ljk3NTgzNiwxNy41ODk0Njg5IDE2Ljk3Njg1NywxNy41OTA0Njg0IEMxOS4xNTE3MTk3LDE1LjYzMTU3MTEgMjAuNTA1NjQ4MywxMi4yOTQ0NDk3IDE5LjgyMTUzNjYsOC4wMDM4NjQ5OSIgaWQ9Imdvb2dsZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
          } @else if ($network == messenger) {
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5tZXNzZW5nZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iV2Vic2l0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRhcmstTW9kZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyNi4wMDAwMDAsIC0zMDY5LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bNDB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzUuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwtQ29ubmVjdHMtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU1LjAwMDAwMCwgMjgzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29udGVudC1bMjB2LWNdIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTWVzc2VuZ2VyLVsyMGgtbV0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDYuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjk1NzQxNDQsMTIuNDEzIEw4LjM1NTUyMzk0LDkuNzUzIEwzLjM0MzgzNTc2LDEyLjQ4IEw4LjgzODI5NjU3LDYuNzQzIEwxMS40NDAxODcsOS40MDMgTDE2LjQ1MTg3NTIsNi42NzYgTDEwLjk1NzQxNDQsMTIuNDEzIFogTTkuODk3MzQ3MjksMCBDNC4zNDA4ODgzLDAgMCw0LjE0NCAwLDkuMjU3IEMwLDEyLjE2NSAwLjg1MjcyODkzNiwxNC43NiAzLjkwMTgxOTI5LDE2LjQ1NyBMMy45MDE4MTkyOSwyMCBMNy4xNzE0NjA1MSwxOC4xMjYgQzguMDg3MjAzOTgsMTguMzc4IDguOTc1NTA1NjQsMTguNTEzIDkuOTc5NjcyNzMsMTguNTEzIEMxNS41MzYxMzE3LDE4LjUxMyAyMCwxNC4zNjkgMjAsOS4yNTcgQzIwLDQuMTQ0IDE1LjQ1NDgyMjYsMCA5Ljg5NzM0NzI5LDAgTDkuODk3MzQ3MjksMCBaIiBpZD0ibWVzc2VuZ2VyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
          } @else if ($network == shopify) {
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMTggMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJzaG9waWZ5X21vbm90b25lX3doaXRlIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjk2OCwyLjM2OCBDMTIsMi4zNjggMTIuMDQ4LDIuMzUyIDEyLjE0NCwyLjM1MiBMMTIuMTQ0LDE5Ljg3MiBMMC4wNDgsMTcuNzc2IEMwLjA0OCwxNy43NzYgMS41Miw2LjUxMiAxLjU2OCw2LjExMiBDMS42MzIsNS41ODQgMS42NDgsNS41NjggMi4yMDgsNS4zOTIgQzIuMjI0LDUuMzc2IDIuOTkyLDUuMTM2IDQuMDk2LDQuOCBDNC4yMDgsMy45NTIgNC42MjQsMi44NjQgNS4xNjgsMiBDNS45MzYsMC43NjggNi44OTYsMC4wOCA3Ljg1NiwwLjA0OCBDOC4zNTIsMC4wMzIgOC43NjgsMC4xOTIgOS4wODgsMC41NDQgQzkuMTA0LDAuNTc2IDkuMTM2LDAuNTkyIDkuMTUyLDAuNjI0IEM5LjIxNiwwLjYwOCA5LjI2NCwwLjYwOCA5LjMxMiwwLjYwOCBDMTAuMDQ4LDAuNjA4IDEwLjY3MiwxLjA0IDExLjA4OCwxLjg0IEMxMS4yMTYsMi4wOTYgMTEuMzEyLDIuMzM2IDExLjM3NiwyLjU0NCBDMTEuNzQ0LDIuNDMyIDExLjk2OCwyLjM2OCAxMS45NjgsMi4zNjggWiBNOS4xNjgsMy4yMzIgQzkuMTg0LDIuNzA0IDkuMTIsMS45MiA4Ljg0OCwxLjM0NCBDOC41NzYsMS40NzIgOC4zMzYsMS42OCA4LjE2LDEuODU2IEM3LjcxMiwyLjM1MiA3LjMyOCwzLjEwNCA3LjEzNiwzLjg1NiBDNy44MjQsMy42NDggOC41MjgsMy40MjQgOS4xNjgsMy4yMzIgWiBNNy44NTYsMC43MDQgQzYuMzg0LDAuNzM2IDUuMDg4LDMuMDU2IDQuNzM2LDQuNTkyIEM1LjI2NCw0LjQzMiA1Ljg0LDQuMjU2IDYuNDE2LDQuMDggQzYuNjA4LDMuMTA0IDcuMDcyLDIuMDggNy42OCwxLjQyNCBDNy45MiwxLjE4NCA4LjE3NiwwLjk3NiA4LjQzMiwwLjg0OCBDOC4yNzIsMC43NTIgOC4wOCwwLjcwNCA3Ljg1NiwwLjcwNCBaIE02LDkuNTA0IEM1Ljk4NCw5LjMxMiA2LDguNTYgNy4xODQsOC40OCBDOCw4LjQxNiA4LjY4OCw4LjczNiA4LjY4OCw4LjczNiBMOS4yOTYsNi40MzIgQzkuMjk2LDYuNDMyIDguNzY4LDYuMTc2IDcuNzI4LDYuMjQgQzUuMDQsNi40MTYgMy44MjQsOC4yODggMy45NTIsMTAuMTQ0IEM0LjA5NiwxMi4zNTIgNi4zMDQsMTIuMjcyIDYuMzg0LDEzLjYxNiBDNi40LDEzLjkzNiA2LjE5MiwxNC40IDUuNjMyLDE0LjQzMiBDNC43NjgsMTQuNDk2IDMuNjk2LDEzLjY4IDMuNjk2LDEzLjY4IEwzLjI4LDE1LjQ0IEMzLjI4LDE1LjQ0IDQuMzUyLDE2LjU5MiA2LjMwNCwxNi40NjQgQzcuOTIsMTYuMzY4IDkuMDQsMTUuMDcyIDguOTI4LDEzLjE2OCBDOC43NjgsMTAuNzUyIDYuMDY0LDEwLjUyOCA2LDkuNTA0IFogTTkuODA4LDMuMDQgQzEwLjE2LDIuOTI4IDEwLjQ4LDIuODMyIDEwLjc2OCwyLjc1MiBDMTAuNjA4LDIuMjU2IDEwLjI1NiwxLjQ0IDkuNTIsMS4yOTYgQzkuNzQ0LDEuODcyIDkuODA4LDIuNTYgOS44MDgsMy4wNCBaIE0xMi41MTIsMTkuODQgTDEyLjUxMiwyLjU0NCBDMTIuODMyLDIuODY0IDEzLjY5NiwzLjY5NiAxMy42OTYsMy42OTYgQzEzLjY5NiwzLjY5NiAxNS4xMDQsMy43MjggMTUuMTg0LDMuNzI4IEMxNS4yNjQsMy43MjggMTUuMzQ0LDMuNzkyIDE1LjM2LDMuODg4IEMxNS4zNzYsMy45ODQgMTcuNTM2LDE4LjU5MiAxNy41MzYsMTguNTkyIEwxMi41MTIsMTkuODQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
          } @else if ($network == twitter) {
            height: 16px;
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMjAgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT50d2l0dGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IldlYnNpdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEYXJrLU1vZGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NTAuMDAwMDAwLCAtMzEzMS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IkNvbnRlbnQtWzQwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc1LjAwMDAwMCwgNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iU29jaWFsLUNvbm5lY3RzLVs0MHYtY10iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1NS4wMDAwMDAsIDI4MzYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNvbnRlbnQtWzIwdi1jXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlR3aXR0ZXItWzIwaC1tXSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXJnZS1bYy1tXSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxhYmVsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzAuMDAwMDAwLCAxMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYuMjksMTggQzEzLjgzNywxOCAxNy45NjUsMTEuODQzNjUzMSAxNy45NjUsNi41MDU0NjEzNiBDMTcuOTY1LDYuMzMwMjEyNzIgMTcuOTY1LDYuMTU1OTQ4NjIgMTcuOTUzLDUuOTgyNjY5MDYgQzE4Ljc1Niw1LjQxMTYzNDE3IDE5LjQ0OSw0LjcwMjc2MzI2IDIwLDMuODkxNDk5ODkgQzE5LjI1Miw0LjIxODM2ODE0IDE4LjQ1Nyw0LjQzMjk5ODUgMTcuNjQ0LDQuNTI3NTE0NjIgQzE4LjUsNC4wMjI0NDQxIDE5LjE0MSwzLjIyODkwMjUgMTkuNDQ4LDIuMjkyNjAyMTggQzE4LjY0MiwyLjc2MzIxMzcgMTcuNzYxLDMuMDk1MDA0NjcgMTYuODQyLDMuMjczMjA2OTQgQzE1LjI4OCwxLjY0Njc0MjAyIDEyLjY4OSwxLjU2Nzk3ODU5IDExLjAzNiwzLjA5Nzk1ODI5IEM5Ljk3MSw0LjA4NDQ3MDMxIDkuNTE4LDUuNTU1Mzc3NDMgOS44NDksNi45NTgzNTExIEM2LjU1LDYuNzk0OTE2OTggMy40NzYsNS4yNjA5OTkxIDEuMzkyLDIuNzM3NjE1NTggQzAuMzAzLDQuNTgzNjMzNTcgMC44Niw2Ljk0NDU2NzUgMi42NjMsOC4xMjk5NTcxOCBDMi4wMSw4LjExMTI1MDg3IDEuMzcxLDcuOTM3OTcxMzEgMC44LDcuNjI0ODg2NjYgTDAuOCw3LjY3NjA4Mjg5IEMwLjgwMSw5LjU5ODg5NTIzIDIuMTc4LDExLjI1NDg5NjQgNC4wOTIsMTEuNjM1OTE0NSBDMy40ODgsMTEuNzk4MzY0MSAyLjg1NCwxMS44MjE5OTMxIDIuMjQsMTEuNzA0ODMyNSBDMi43NzcsMTMuMzUwOTg4MyA0LjMxOCwxNC40NzgyOSA2LjA3MywxNC41MTA3Nzk5IEM0LjYyLDE1LjYzNTEyNzkgMi44MjUsMTYuMjQ1NTQ0NSAwLjk3NywxNi4yNDM1NzU0IEMwLjY1MSwxNi4yNDI1OTA5IDAuMzI1LDE2LjIyMzg4NDYgMCwxNi4xODU0ODc0IEMxLjg3NywxNy4zNzA4NzcxIDQuMDYsMTggNi4yOSwxNy45OTcwNDY0IiBpZD0idHdpdHRlciI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
          }
        }
      }
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: (3px + 2px * $i) (6px + 2px * $i);
      border-radius: 2px + (1px * $i);
      font-size: 10px + (1px * $i);
      line-height: 8px + (2px * $i);
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;
    cursor: not-allowed;

    #{$c}__inner {
      pointer-events: none;
    }
  }

  &--full-width {
    width: 100%;
  }

  // --> INTERACTIONS <--

  &:active {
    background-size: 100%;
    transition: background 0s;
  }

  &:focus {
    transition: box-shadow linear 250ms;
  }
}
</style>
