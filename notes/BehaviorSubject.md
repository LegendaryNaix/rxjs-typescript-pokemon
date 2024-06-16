## RxJS 中的 BehaviorSubject
**確保所有訂閱者無論何時訂閱都能接收到最新的值**

有以下特點
1. 初始值：建立 BehaviorSubject 必須提供初始值。
2. 最新值：無論何時訂閱 BehaviorSubject，都會收到當前最新值。
3. 狀態持有：BehaviorSubject 持有最新值，並儲存在內部。


### 1. 建立 BehaviorSubject
```javascript=
import { BehaviorSubject } from 'rxjs';

// 創建一個 BehaviorSubject，並設置初始值為 0
const subject = new BehaviorSubject(0);
```

### 2. 訂閱 BehaviorSubject
```javascript=
// 訂閱者 A 訂閱了 subject
subject.subscribe(value => {
  console.log('訂閱者 A:', value);
});

// 訂閱者 B 訂閱了 subject
subject.subscribe(value => {
  console.log('訂閱者 B:', value);
});
```

### 3. 發送新值
```javascript=
// 發送新值 1
subject.next(1);

// 發送新值 2
subject.next(2);
```

### 4. 新的訂閱者接收最新值
收到最新的值，即 2
```javascript=
// 訂閱者 C 在 BehaviorSubject 已經發送了新值後訂閱
subject.subscribe(value => {
  console.log('訂閱者 C:', value);
});
```