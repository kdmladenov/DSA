// https://www.lintcode.com/problem/380/
// locked

// https://www.youtube.com/watch?v=c7dOI-hDa2Q
// https://www.youtube.com/watch?v=tKFCkGPvc_U    - Python


const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  var nowA = headA;
  var nowB = headB;

  while (nowA !== nowB) {
    // moves each pointer to the beginning of the other LL , so basically they should be aligned on the second pass. See the video
    nowA = nowA ? nowA.next : headB;
    nowB = nowB ? nowB.next : headA;
  }

  return nowA;
};
