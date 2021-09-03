import { emit as cfpEmit, on as cfpOn, once as cfpOnce } from "@create-figma-plugin/utilities"

export const emit = (name: ActionType, args?: any) => {
  cfpEmit(name, args)
}
export const on = (name: ActionType, handler: (args: any) => void) => {
  cfpOn(name, handler)
}
export const once = (name: ActionType, handler: (args: any) => void) => {
  cfpOnce(name, handler)
}