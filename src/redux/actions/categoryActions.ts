import * as actionTypes from './actionTypes'

export function changeCategory(category: String) {
  return {type:actionTypes.CHANGE_CATEGORY, payload:category}
}

