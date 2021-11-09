export default function isVisible(node: BaseNode | SceneNode, iteratee?: (elem?: BaseNode) => boolean): boolean {
  if (iteratee?.(node)) return true;
  if ((node as SceneNode).visible) {
    if (node.parent) {
      if (node.parent.type === "PAGE") return true;
      return (isVisible(node.parent, iteratee));
    }
    return true;
  }
  return false;
}