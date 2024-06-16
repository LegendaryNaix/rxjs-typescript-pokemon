# 什麼是 RxJS ?
是一個用於處理非同步事件與數據流的 library，基於「觀察者 (Observable) 模式」，有以下幾個特點：

1. Observable：Observable 是 RxJS 的核心概念，用於表示一個數據流。它可以是事件、HTTP 請求、計時器等各種異步數據來源。

2. Operators：Operators 是 RxJS 中用來操作和轉換 Observable 的函數。例如，map、filter、mergeMap 等等。這些運算子允許以一種簡潔的方式來處理數據流。

3. Subscription：Subscription 用於表示對 Observable 的訂閱。當你訂閱一個 Observable 時，它會開始發送數據。你可以通過 Subscription 來取消訂閱以停止接收數據。

4. Subject：Subject 是一種特殊的 Observable，它允許多個訂閱者共享同一個數據流，並且可以主動發送數據。它同時具備 Observable 和 Observer 的特性。

5. Schedulers：Schedulers 是 RxJS 中用來控制異步操作執行時機的機制。它允許你精確控制操作的執行順序和時間。