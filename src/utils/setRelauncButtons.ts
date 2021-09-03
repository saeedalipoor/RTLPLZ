export function setRelaunchButtons(
  node: BaseNode,
  buttonIds: Array<string>,
  descriptions?: Array<string>
): void {
  node.setRelaunchData(
    buttonIds.reduce(
      (acc, id, i) => ({ ...acc, [id]: (descriptions || [])[i] || "" }),
      {}
    )
  );
}