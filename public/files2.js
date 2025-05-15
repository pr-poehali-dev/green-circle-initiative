/* react-file-list.js — кидайте в DevTools → Sources → Snippets */
(function () {
  const MAX = 10;                 // сколько файлов максимум
  const DELAY = 200;              // мс между попытками, пока дерево не готово

  /** Собираем ≤MAX путей к файлам (DFS) */
  function collectFiles() {
    const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hook || !hook._fiberRoots?.size) return null;        // хука ещё нет

    const roots = hook._fiberRoots.values().next().value;     // Map<rootId, Set>
    const root  = roots?.values().next().value;               // FiberRoot
    if (!root) return null;                                   // React не смонтировался

    const seen = new Set(), list = [];
    (function walk(f) {
      const src = f._debugSource?.fileName;
      if (src && !seen.has(src)) {
        list.push(src);
        seen.add(src);
        if (list.length >= MAX) return;
      }
      for (let c = f.child; c && list.length < MAX; c = c.sibling) walk(c);
    })(root.current || root);

    return list;
  }

  /** Публикуем результат (если уже есть) либо ждём появления */
  function send() {
    const files = collectFiles();
    if (files && files.length) {
      console.log("file_list", files);
      if (parent && parent !== window) {
        parent.postMessage({type: "file_list", files}, "*");
      }
    } else {
      setTimeout(send, DELAY);                          // пробуем позднее
    }
  }

  /* ------ триггеры ------ */
  send();                                               // первая попытка
  addEventListener("popstate",   () => setTimeout(send, 0));
  addEventListener("hashchange", () => setTimeout(send, 0));
  ["pushState", "replaceState"].forEach(k => {
    const orig = history[k];
    history[k] = function () {
      const r = orig.apply(this, arguments);
      setTimeout(send, 0);
      return r;
    };
  });
})();
