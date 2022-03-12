/**
 * 两个树的完全 diff 算法的时间复杂度为 O(n^3) ，但是在前端中，我们很少会跨层级的移动元素，
 * 所以我们只需要比较同一层级的元素进行比较，这样就可以将算法的时间复杂度降低为 O(n)。
 * 算法首先会对新旧两棵树进行一个深度优先的遍历，这样每个节点都会有一个序号。
 * 在深度遍历的时候，每遍历到一个节点，我们就将这个节点和新的树中的节点进行比较，
 * 如果有差异，则将这个差异记录到一个对象中。
 * 在对列表元素进行对比的时候，由于 TagName 是重复的，所以我们不能使用这个来对比。
 * 我们需要给每一个子节点加上一个 key，列表对比的时候使用 key 来进行比较，这样我们才能够复用老的 DOM 树上的节点。
 */
/**
 * patch
 * 找到对应的真实dom，称为el
 * 判断Vnode和oldVnode是否指向同一个对象，如果是，那么直接return
 * 如果他们都有文本节点并且不相等，那么将el的文本节点设置为Vnode的文本节点。
 * 如果oldVnode有子节点而Vnode没有，则删除el的子节点
 * 如果oldVnode没有子节点而Vnode有，则将Vnode的子节点真实化之后添加到el
 * 如果两者都有子节点，则执行updateChildren函数比较子节点
 */
function patch(oldVnode, vnode) {
  // some code
  if (sameVnode(oldVnode, vnode)) {
    patchVnode(oldVnode, vnode);
  } else {
    const oEl = oldVnode.el; // 当前oldVnode对应的真实元素节点
    let parentEle = api.parentNode(oEl); // 父元素
    createEle(vnode); // 根据Vnode生成新元素
    if (parentEle !== null) {
      api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl)); // 将新元素添加进父元素
      api.removeChild(parentEle, oldVnode.el); // 移除以前的旧元素节点
      oldVnode = null;
    }
  }
  // some code
  return vnode;
}

function patchVnode(oldVnode, vnode) {
  const el = (vnode.el = oldVnode.el);
  let i,
    oldCh = oldVnode.children,
    ch = vnode.children;
  if (oldVnode === vnode) return;
  if (
    oldVnode.text !== null &&
    vnode.text !== null &&
    oldVnode.text !== vnode.text
  ) {
    api.setTextContent(el, vnode.text);
  } else {
    updateEle(el, vnode, oldVnode);
    if (oldCh && ch && oldCh !== ch) {
      updateChildren(el, oldCh, ch);
    } else if (ch) {
      createEle(vnode); //create el's children dom
    } else if (oldCh) {
      api.removeChildren(el);
    }
  }
}

function updateChildren(
  parentElm,
  oldCh,
  newCh,
  insertedVnodeQueue,
  removeOnly
) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVnode = oldCh[0];
  var oldEndVnode = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVnode = newCh[0];
  var newEndVnode = newCh[newEndIdx];
  var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

  var canMove = !removeOnly;
  {
    checkDuplicateKeys(newCh);
  }
  // oldVnode起始位置小于结束位置并且newVnode起始位置小于结束位置
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // isUndef 用来判断对象是否等于undefined或者为空，是的话返回true
    if (isUndef(oldStartVnode)) {
      // oldVnode 起始位置oldS++
      oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
    } else if (isUndef(oldEndVnode)) {
      // oldVnode 结束位置oldE--
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      // oldS和newS相同，不变化，进行patch，oldS++，newS++
      patchVnode(
        oldStartVnode,
        newStartVnode,
        insertedVnodeQueue,
        newCh,
        newStartIdx
      );
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      // oldE和newE相同，不变化，进行patch，oldE--，newE--
      patchVnode(
        oldEndVnode,
        newEndVnode,
        insertedVnodeQueue,
        newCh,
        newEndIdx
      );
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      // Vnode moved right
      // oldS和newE相同，oldS移动到oldE之后，进行patch，oldS++，newE--
      patchVnode(
        oldStartVnode,
        newEndVnode,
        insertedVnodeQueue,
        newCh,
        newEndIdx
      );
      canMove &&
        nodeOps.insertBefore(
          parentElm,
          oldStartVnode.elm,
          nodeOps.nextSibling(oldEndVnode.elm)
        );
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      // Vnode moved left
      // oldE和newS相同，oldE移动到oldS之前，进行patch，oldE--，newS++
      patchVnode(
        oldEndVnode,
        newStartVnode,
        insertedVnodeQueue,
        newCh,
        newStartIdx
      );
      canMove &&
        nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      // 全都不相同情况下
      // 获取oldVnode->index的key
      if (isUndef(oldKeyToIdx)) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      }
      idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
      if (isUndef(idxInOld)) {
        // New element
        // oldVnode->index为undefined或null，说明没有该元素，创建新的元素
        createElm(
          newStartVnode,
          insertedVnodeQueue,
          parentElm,
          oldStartVnode.elm,
          false,
          newCh,
          newStartIdx
        );
      } else {
        // 获取oldVnode
        vnodeToMove = oldCh[idxInOld];
        if (sameVnode(vnodeToMove, newStartVnode)) {
          // 创建的Vnode和newS相同，插入到oldS之前，进行patch
          patchVnode(
            vnodeToMove,
            newStartVnode,
            insertedVnodeQueue,
            newCh,
            newStartIdx
          );
          oldCh[idxInOld] = undefined;
          canMove &&
            nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
        } else {
          // 相同的key但是不一样的element. 被视为新的element
          createElm(
            newStartVnode,
            insertedVnodeQueue,
            parentElm,
            oldStartVnode.elm,
            false,
            newCh,
            newStartIdx
          );
        }
      }
      newStartVnode = newCh[++newStartIdx];
    }
  }
  // 当oldS>oldE时，将newS至newE间的全部插入
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
    addVnodes(
      parentElm,
      refElm,
      newCh,
      newStartIdx,
      newEndIdx,
      insertedVnodeQueue
    );
  } else if (newStartIdx > newEndIdx) {
    // 当newS>newE，将oldS至oldE间的全部删除
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
  }
}
