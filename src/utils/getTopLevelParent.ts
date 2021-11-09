export default function getTopLevelParent(node: BaseNode, condition?: (node: SceneNode) => boolean): BaseNode | null {
  if (typeof condition === "function") {
    if (node.parent && condition(node.parent as SceneNode)) {
      return node.parent;
    } else {
      return null;
    }
  }
  if (node && node.parent && node.parent.type !== "PAGE") {
    return getTopLevelParent(node.parent)
  } else {
    return node
  }
}