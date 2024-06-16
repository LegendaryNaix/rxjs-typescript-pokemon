# 什麼是 combineLatestWith？

在 RxJS 中，combineLatestWith 是一個運算子，用於將多個 Observable 的最新值組合成一個新的 Observable。當所有輸入 Observable 至少各自發出了一個值時，combineLatestWith 發出每個輸入 Observable 的最新值組合成的數組。只要任意一個輸入 Observable 發出新值，combineLatestWith 也會發出一個新值，這個新值是所有輸入 Observable 的最新值組成的數組。

以下是 combineLatestWith 的用法示例：
```javascript=
import { of, interval } from 'rxjs';
import { combineLatestWith, map } from 'rxjs/operators';

const obs1$ = interval(1000); // 每秒發出 0, 1, 2, 3, ...
const obs2$ = interval(1500); // 每1.5秒發出 0, 1, 2, 3, ...

const combined$ = obs1$.pipe(
  combineLatestWith(obs2$),
  map(([val1, val2]) => `obs1: ${val1}, obs2: ${val2}`)
);

combined$.subscribe(console.log);
```

在這個例子中，我們有兩個 Observable：obs1$ 和 obs2$，分別每秒和每1.5秒發出一個值。combineLatestWith 將這兩個 Observable 的最新值組合起來，並使用 map 運算子將其轉換為一個字符串，然後訂閱這個組合後的 Observable 並將結果輸出到控制台。

combineLatestWith 的特性是，只要其中一個 Observable 發出新值，輸出 Observable 就會發出一個新值，這個新值包含了所有輸入 Observable 的最新值。