<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
.c-index
  the-logo(
    class="c-index__logo"
  )
  base-divider

  base-heading(
    type="h1"
  ) A MINIMALIST DARK DESIGN SYSTEM FOR VUE.JS

  base-heading(
    type="h2"
    color="grey"
    fontWeight="regular"
  ) Based components designed for the night people who enjoy dark interfaces as much as we do.

  the-github-buttons(
    class="c-index__github-buttons"
    repo="awesome-cheatsheets"
    user="lecoupa"
  )
  section(
    v-for="section in sections"
    :id="section.id"
    :key="section.id"
    class="c-index__section"
  )
    base-divider(
      color="black"
      size="large"
    )
    knowledge-headlines(
      :title="section.headlines.title"
      :hasDocumentation="section.headlines.hasDocumentation"
      :description="section.headlines.description"
    )
    div(
      v-if="section.colors"
      class="c-index__elements c-index__elements--colors"
    )
      knowledge-color(
        v-for="color in section.colors"
        :hex="color.hex"
        :key="color.hex"
        :name="color.name"
      )

    knowledge-headings(
      v-if="section.headings"
    )
    div(
      v-if="section.buttons"
      v-for="circular in [false, true]"
      :class=`[
        "c-index__elements c-index__elements--buttons",
        {
          "c-index__elements--horizontal": circular
        }
      ]`
    )
      div(
        v-for="(color, i) in section.buttons.colors"
        :key="'button' + color + i"
        class="c-index__category"
      )
        div(
          v-for="(size, j) in section.buttons.sizes"
          :key="'button' + color + j + size"
          class="c-index__item"
        )
          base-button(
            :circular="circular"
            :color="color"
            :leftIcon="section.buttons.icons[i]"
            :size="size"
            class="c-index__button"
          ) {{ size }} {{ color }}

    div(
      v-if="section.badges"
      class="c-index__elements c-index__elements--badges c-index__elements--horizontal c-index__elements--vertical-on-mobile"
    )
      div(
        v-for="(color, i) in section.badges.colors"
        :key="'badge' + color + i"
        class="c-index__category"
      )
        div(
          v-for="(size, j) in section.badges.sizes"
          :key="'badge' + color + j + size"
          class="c-index__item"
        )
          base-badge(
            :color="color"
            :size="size"
            class="c-index__badge"
          ) {{ size }}

    div(
      v-if="section.socialAuths"
      class="c-index__elements c-index__elements--social-auths c-index__elements--horizontal c-index__elements--vertical-on-mobile"
    )
      div(
        v-for="(network, i) in section.socialAuths.networks"
        :key="'socialAuth' + network + i"
        class="c-index__category"
      )
        div(
          v-for="(size, j) in section.socialAuths.sizes"
          :key="'socialAuth' + network + j + size"
          class="c-index__item"
        )
          base-social-auth(
            :network="network"
            :size="size"
            class="c-index__social-auth"
          )

    div(
      v-if="section.inputs"
      class="c-index__elements c-index__elements--form c-index__elements--inputs"
    )
      div(
        v-for="(statuses, i) in section.inputs.statuses"
        :key="'inputs ' + i"
        class="c-index__category"
      )
        div(
          v-if="statuses[j]"
          v-for="(size, j) in section.inputs.sizes"
          :key="'inputs ' + i + ' ' + j"
          class="c-index__item"
        )
          field-input(
            :label="size + ' input (' + statuses[j] + ')'"
            :name="'input_' + size + '_'  + statuses[j] + i + j"
            :placeholder="statuses[j] + ' ' + size + ' input'"
            :size="size"
            :status="statuses[j]"
            class="c-index__input"
            description="This is a customizable description for inputs."
            value="Dark Mode FTW"
          )

    div(
      v-if="section.selects"
      class="c-index__elements c-index__elements--form c-index__elements--selects"
    )
      div(
        v-for="(statuses, i) in section.selects.statuses"
        :key="'selects ' + i"
        class="c-index__category"
      )
        div(
          v-if="statuses[j]"
          v-for="(size, j) in section.selects.sizes"
          :key="'selects ' + i + ' ' + j"
          class="c-index__item"
        )
          field-select(
            :label="size + ' select (' + statuses[j] + ')'"
            :name="'select_' + size + '_'  + statuses[j] + i + j"
            :options=`[
              { label: 'Dark Mode FTW 1', value: 'Dark Mode FTW 1' },
              { label: 'Dark Mode FTW 2', value: 'Dark Mode FTW 2' },
              { label: 'Dark Mode FTW 3', value: 'Dark Mode FTW 3' },
              { label: 'Dark Mode FTW 4', value: 'Dark Mode FTW 4' }
            ]`
            :size="size"
            :status="statuses[j]"
            class="c-index__input"
            description="This is a customizable description for selects."
          )

    div(
      v-if="section.textareas"
      class="c-index__elements c-index__elements--form c-index__elements--textareas"
    )
      div(
        v-for="(statuses, i) in section.textareas.statuses"
        :key="'textareas ' + i"
        class="c-index__category"
      )
        div(
          v-if="statuses[j]"
          v-for="(size, j) in section.textareas.sizes"
          :key="'textareas ' + i + ' ' + j"
          class="c-index__item"
        )
          field-textarea(
            :label="size + ' textarea (' + statuses[j] + ')'"
            :name="'textarea_' + size + '_'  + statuses[j] + i + j"
            :placeholder="statuses[j] + ' ' + size + ' textarea'"
            :size="size"
            :status="statuses[j]"
            class="c-index__textarea"
            description="This is a customizable description for textareas."
            value="Dark Mode FTW"
          )

    div(
      v-if="section.checkboxes"
      class="c-index__elements c-index__elements--form c-index__elements--checkboxes"
    )
      div(
        v-for="(statuses, i) in section.checkboxes.statuses"
        :key="'checkboxes ' + i"
        class="c-index__category"
      )
        div(
          v-if="statuses[j]"
          v-for="(size, j) in section.checkboxes.sizes"
          :key="'checkboxes ' + i + ' ' + j"
          class="c-index__item"
        )
          field-checkbox(
            :block="false"
            :checked="i === 1"
            :label="size.charAt(0).toUpperCase() + size.slice(1) + ' checkbox (' + statuses[j] + ')'"
            :name="'checkbox_' + size + '_'  + statuses[j] + i + j"
            :size="size"
            :status="statuses[j]"
            class="c-index__checkbox"
            description="This is a customizable description for checkboxes."
          )
    div(
      v-if="section.radios"
      class="c-index__elements c-index__elements--form c-index__elements--radios"
    )
      div(
        v-for="(statuses, i) in section.radios.statuses"
        :key="'radios ' + i"
        class="c-index__category"
      )
        div(
          v-if="statuses[j]"
          v-for="(size, j) in section.radios.sizes"
          :key="'radios ' + i + ' ' + j"
          class="c-index__item"
        )
          field-radio(
            :block="false"
            :checked="j === 0"
            :label="size.charAt(0).toUpperCase() + size.slice(1) + ' radio (' + statuses[j] + ')'"
            :name="'radios_' + i"
            :size="size"
            :status="statuses[j]"
            class="c-index__radio"
            description="This is a customizable description for radios."
          )

    div(
      v-if="section.toggles"
      class="c-index__elements c-index__elements--form c-index__elements--toggles"
    )
      div(
        v-for="(statuses, i) in section.toggles.statuses"
        :key="'toggles ' + i"
        class="c-index__category"
      )
        div(
          v-if="statuses[j]"
          v-for="(size, j) in section.toggles.sizes"
          :key="'toggles ' + i + ' ' + j"
          class="c-index__item"
        )
          field-toggle(
            :block="false"
            :checked="i === 1"
            :label="size.charAt(0).toUpperCase() + size.slice(1) + ' toggle (' + statuses[j] + ')'"
            :name="'toggle_' + size + '_'  + statuses[j] + i + j"
            :size="size"
            :status="statuses[j]"
            class="c-index__toggle"
            description="This is a customizable description for toggles."
          )

    div(
      v-if="section.dividers"
      class="c-index__elements c-index__elements--dividers"
    )
      div(
        v-for="(color, i) in section.dividers.colors"
        :key="'divider' + color + i"
        class="c-index__category"
      )
        div(
          v-for="(size, j) in section.dividers.sizes"
          :key="'divider' + color + j + size"
          class="c-index__item"
        )
          base-divider(
            :color="color"
            :size="size"
            class="c-index__divider"
          )

    div(
      v-if="section.loaders"
      class="c-index__elements c-index__elements--loaders"
    )
      div(
        v-for="(loader, i) in section.loaders"
        :key="'loader' + i"
        class="c-index__category"
      )
        base-loader(
          :color="loader.color"
          :labelMain="loader.labelMain"
          :labelSecondary="loader.labelSecondary"
          :progress="(i + 1) * 10"
          class="c-index__loader"
        )

    div(
      v-if="section.avatars"
      v-for="type in ['avatars', 'thumbnails']"
      :class=`[
        "c-index__elements",
        "c-index__elements--" + type,
        "c-index__elements--horizontal",
        "c-index__elements--vertical-on-mobile"
      ]`
    )
      .c-index__category
        div(
          v-for="(size, i) in section.avatars.sizes"
          :key="'avatar' + size + i"
          class="c-index__item"
        )
          base-avatar(
            v-if="type === 'avatars'"
            :size="size"
            src="/images/medley/nada.jpg"
            class="c-index__avatar"
          )
          base-avatar(
            v-else-if="type === 'thumbnails'"
            :bordered="true"
            :circular="false"
            :complementaries="section.avatars.complementaries[size]"
            :description="size"
            :size="size"
            src="/images/medley/tesla.jpg"
            class="c-index__thumbnail"
          )

    div(
      v-if="section.icons"
      class="c-index__icons"
    )
      .c-index__elements.c-index__elements--icons
        base-icon(
          v-for="(icon, i) in section.icons"
          v-if="i < maxIcons"
          :aria-label="icon"
          :key="icon"
          :name="icon"
          class="c-index__icon hint--top hint--no-animate"
          color="white"
        )

      base-button(
        v-if="maxIcons !== 1000"
        @click="showIcons"
        :reverse="true"
        color="white"
        size="small"
      ) Show all icons
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// PROJECT
import KnowledgeColor from "@/components/knowledge/KnowledgeColor";
import KnowledgeHeadings from "@/components/knowledge/KnowledgeHeadings";
import KnowledgeHeadlines from "@/components/knowledge/KnowledgeHeadlines";
import TheGithubButtons from "@/components/layouts/TheGithubButtons";
import TheLogo from "@/components/layouts/TheLogo";

import FieldCheckbox from "@/components/form/FieldCheckbox";
import FieldInput from "@/components/form/FieldInput";
import FieldRadio from "@/components/form/FieldRadio";
import FieldSelect from "@/components/form/FieldSelect";
import FieldTextarea from "@/components/form/FieldTextarea";
import FieldToggle from "@/components/form/FieldToggle";

import colors from "@/schemas/colors";
import icons from "@/schemas/icons";

export default {
  components: {
    FieldCheckbox,
    FieldInput,
    FieldRadio,
    FieldSelect,
    FieldTextarea,
    FieldToggle,
    KnowledgeColor,
    KnowledgeHeadings,
    KnowledgeHeadlines,
    TheGithubButtons,
    TheLogo
  },

  data() {
    return {
      // --> DATA <--
      maxIcons: 207,

      // --> COMPONENTS <--
      sections: [
        {
          id: "colors",
          headlines: {
            title: "COLORS",
            description: "With a great description",
            hasDocumentation: false
          },
          colors: colors
        },
        {
          id: "headings",
          headlines: {
            title: "HEADINGS",
            description: "With a great description",
            hasDocumentation: true
          },
          headings: []
        },
        {
          id: "buttons",
          headlines: {
            title: "BUTTONS",
            description: "With a great description",
            hasDocumentation: true
          },
          buttons: {
            colors: ["blue", "green", "red", "orange", "black", "white"],
            icons: [
              "add_circle",
              "check_circle",
              "favorite_border",
              "star",
              "get_app",
              "camera_alt"
            ],
            sizes: ["large", "medium", "default", "small", "mini"]
          }
        },
        {
          id: "badges",
          headlines: {
            title: "BADGES",
            description: "With a great description",
            hasDocumentation: true
          },
          badges: {
            colors: [
              "blue",
              "green",
              "red",
              "orange",
              "turquoise",
              "purple",
              "black",
              "white"
            ],
            sizes: ["large", "medium", "default", "small", "mini"]
          }
        },
        {
          id: "socialLogins",
          headlines: {
            title: "SOCIAL LOGINS",
            description: "With a great description",
            hasDocumentation: true
          },
          socialAuths: {
            networks: ["facebook", "messenger", "twitter", "google"],
            sizes: ["large", "small", "mini"]
          }
        },
        {
          id: "inputs",
          headlines: {
            title: "INPUTS",
            description: "With a great description",
            hasDocumentation: true
          },
          inputs: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["success", "error", "warning"]
            ]
          }
        },
        {
          id: "selects",
          headlines: {
            title: "SELECTS",
            description: "With a great description",
            hasDocumentation: true
          },
          selects: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["success", "error", "warning"]
            ]
          }
        },
        {
          id: "textareas",
          headlines: {
            title: "TEXTAREAS",
            description: "With a great description",
            hasDocumentation: true
          },
          textareas: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["success", "error", "warning"]
            ]
          }
        },
        {
          id: "checkboxes",
          headlines: {
            title: "CHECKBOXES",
            description: "With a great description",
            hasDocumentation: true
          },
          checkboxes: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["normal", "success", "error", "warning"]
            ]
          }
        },
        {
          id: "radios",
          headlines: {
            title: "RADIOS",
            description: "With a great description",
            hasDocumentation: true
          },
          radios: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["normal", "success", "error", "warning"]
            ]
          }
        },
        {
          id: "toggles",
          headlines: {
            title: "TOGGLES",
            description: "With a great description",
            hasDocumentation: true
          },
          toggles: {
            sizes: ["large", "medium", "default", "small", "mini"],
            statuses: [
              ["normal", "normal", "normal", "normal", "normal"],
              ["normal", "success", "error", "warning"]
            ]
          }
        },
        {
          id: "dividers",
          headlines: {
            title: "DIVIDERS",
            description: "With a great description",
            hasDocumentation: true
          },
          dividers: {
            colors: [
              "blue",
              "green",
              "red",
              "orange",
              "turquoise",
              "purple",
              "black",
              "white"
            ],
            sizes: ["large", "small"]
          }
        },
        {
          id: "loaders",
          headlines: {
            title: "LOADERS",
            description: "With a great description",
            hasDocumentation: true
          },
          loaders: [
            {
              color: "blue",
              labelMain: "Loading",
              labelSecondary: "10%"
            },
            {
              color: "green",
              labelMain: "Progression",
              labelSecondary: "20%"
            },
            {
              color: "red",
              labelMain: "Experience",
              labelSecondary: "30%"
            },
            {
              color: "orange",
              labelMain: "XPs until next level",
              labelSecondary: "2/5"
            },
            {
              color: "turquoise",
              labelMain: "XPs until next level",
              labelSecondary: "5/10"
            },
            {
              color: "purple",
              labelMain: "XPs until next level",
              labelSecondary: "6/10"
            },
            {
              color: "black",
              labelMain: "Remaining Steps",
              labelSecondary: "7/10"
            },
            {
              color: "white",
              labelMain: "Completed Steps",
              labelSecondary: "8/10"
            }
          ]
        },
        {
          id: "avatars",
          headlines: {
            title: "AVATARS",
            description: "With a great description",
            hasDocumentation: true
          },
          avatars: {
            sizes: ["huge", "large", "medium", "default", "small", "mini"],
            complementaries: {
              huge: [
                {
                  src: "/images/medley/mastercard.jpg"
                },
                {
                  src: "/images/medley/visa.jpg"
                }
              ],
              large: [
                {
                  src: "/images/medley/paypal.jpg"
                }
              ]
            }
          }
        },
        {
          id: "icons",
          headlines: {
            title: "ICONS",
            description: "With a great description",
            hasDocumentation: true
          },
          icons: icons
        }
      ]
    };
  },

  methods: {
    showIcons() {
      this.maxIcons = 1000;
    }
  }
};
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: ".c-index";

#{$c} {
  #{$c}__github-buttons {
    margin-top: 20px;
  }

  #{$c}__elements {
    display: grid;
    justify-content: center;
    grid-gap: 40px;
    margin-bottom: 40px;

    #{$c}__category {
      #{$c}__item {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    // --> ORIENTATIONS

    &--horizontal {
      #{$c}__category {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: center;

        #{$c}__item {
          display: block;
          margin-right: 10px;
          margin-bottom: 0;

          &:first-of-type {
            margin-right: 0;
          }
        }
      }
    }

    &--vertical-on-mobile {
      @include mq($from: mobile, $until: tablet) {
        #{$c}__category {
          display: block;

          #{$c}__item {
            margin-right: 0;
            margin-bottom: 20px;

            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
      }
    }

    // --> SECTIONS <--

    &--avatars {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 100%);
      margin-bottom: 20px;
    }

    &--colors {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 100px);
      margin-bottom: 0;
    }

    &--buttons {
      grid-template-columns: repeat(auto-fill, 250px);
    }

    &--badges {
      grid-template-columns: repeat(auto-fill, 400px);
      margin-bottom: 0;
    }

    &--dividers {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 100%);
      margin-bottom: 0;

      #{$c}__divider {
        margin: 0 auto;
      }
    }

    &--form {
      text-align: left;
      grid-template-columns: repeat(auto-fill, 360px);

      input::placeholder,
      textarea::placeholder {
        text-transform: capitalize;
      }
    }

    &--icons {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 24px);

      #{$c}__icon {
        cursor: pointer;

        // Update tooltip color
        &::before {
          border-top-color: $black;
        }
        &::after {
          background: $black;
        }
      }
    }

    &--loaders {
      grid-gap: 30px;
      grid-template-columns: repeat(auto-fill, 80%);
      margin-bottom: 0;
    }

    &--social-auths {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 100%);
      margin-bottom: 0;
    }
  }
}
</style>
