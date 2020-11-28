import {darken} from 'polished'

// Original colors defined for tech test.
const primary = "#215184"
const dark = "#545454"
const light = '#ffffff'

// Generate additional darkened shades for hover/focus states etc.
export const colors = {
    "primary": {
        "100": primary,
        "200": darken(0.8, primary),
        "300": darken(0.6, primary)
    },
    "neutral": {
        "100": dark,
        "200": darken(0.8, dark),
        "300": darken(0.6, dark),
        "400": light
    }
}