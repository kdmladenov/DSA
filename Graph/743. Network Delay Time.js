// https://leetcode.com/problems/network-delay-time/description/

const networkDelayTime = (times, N, K) => {
  const time = Array(N + 1).fill(Infinity);
  time[K] = 0;

  for (let i = 0; i < N; i++) {
    for (const [source, target, t] of times) {
      if (time[source] === Infinity) continue;

      if (time[target] > time[source] + t) time[target] = time[source] + t;
    }
  }

  let res = 0;

  for (let i = 1; i <= N; i++) {
    res = Math.max(res, time[i]);
  }

  return res === Infinity ? -1 : res;
};
