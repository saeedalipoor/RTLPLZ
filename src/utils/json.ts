export const isObjectEmpty = (obj: any) => {
  return Object.entries(obj).length === 0 && obj.constructor === Object
}