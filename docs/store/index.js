/**************************************************************************
 * IMPORTS
 ***************************************************************************/

import Vuex from "vuex";

/**************************************************************************
 * CREATE STORE
 * @docs https://nuxtjs.org/guide/vuex-store/#classic-mode
 ***************************************************************************/

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      categories: [
        {
          id: "installation",
          title: "💻 Installation"
        },
        {
          id: "packageOptions",
          title: "📦 Package Options"
        },
        {
          id: "colors",
          title: "🎨 Colors"
        },
        {
          id: "base",
          title: "🤖 Base Components",
          items: [
            {
              label: "Alerts",
              id: "baseAlert",
              active: false
            },
            {
              label: "Avatars",
              id: "baseAvatar",
              active: false
            },
            {
              label: "Badges",
              id: "baseBadge",
              active: false
            },
            {
              label: "Buttons",
              id: "baseButton",
              active: false
            },
            {
              label: "Dividers",
              id: "baseDivider",
              active: false
            },
            {
              label: "Headings",
              id: "baseHeading",
              active: false
            },
            {
              label: "Icons",
              id: "baseIcon",
              active: false
            },
            {
              label: "Progress Bars",
              id: "baseProgressBar",
              active: false
            },
            {
              label: "Social Buttons",
              id: "baseSocialButton",
              active: false
            },
            {
              label: "Spinners",
              id: "baseSpinner",
              active: false
            },
            {
              label: "Toasts",
              id: "baseToast",
              active: false
            }
          ]
        },
        {
          id: "form",
          title: "📃 Form Components",
          items: [
            {
              label: "Checkboxes",
              id: "fieldCheckbox",
              active: false
            },
            {
              label: "Files",
              id: "fieldFile",
              active: false
            },
            {
              label: "Inputs",
              id: "fieldInput",
              active: false
            },
            {
              label: "Radios",
              id: "fieldRadio",
              active: false
            },
            {
              label: "Selects",
              id: "fieldSelect",
              active: false
            },
            {
              label: "Tabs",
              id: "fieldTabs",
              active: false
            },
            {
              label: "Textareas",
              id: "fieldTextarea",
              active: false
            },
            {
              label: "Toggles",
              id: "fieldToggle",
              active: false
            }
          ]
        }
      ]
    }),

    mutations: {
      updateCategoryItems(state, params) {
        state.categories.map(category => {
          if (category.items) {
            category.items.map(item => {
              item.active = item.id === params.id;
            });
          }
        });
      }
    }
  });
};

export default createStore;
