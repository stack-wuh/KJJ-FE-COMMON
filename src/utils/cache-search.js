/* eslint-disable @typescript-eslint/no-invalid-this */
/* eslint-disable @typescript-eslint/no-this-alias */
function memoQuery(fn, ops = {}) {
  const { initialValues = {} } = ops;

  const cache = new Map();

  // 设置预置的属性
  cache.set('version', 'v1.0.0');

  // 设置初始值
  cache.set('initialValues', initialValues);

  const update = (key, value) => {
    const hasKey = cache.has(key);
    if (hasKey) {
      const current = cache.get(key);
      const next = { ...current, ...value };

      cache.set(key, next);

      return true;
    }

    cache.set(key, value);
    return true;
  };

  function call(params = {}) {
    update('value', params);
    const context = this;

    const query = call.get();

    setTimeout(() => {
      fn.apply(context, [query]);
    }, 100);
  }

  const deleteOne = key => cache.delete(key);

  const has = key => cache.has(key);

  const apply = cb => {
    cb(call.get());
  };

  call.get = key => {
    if (key) {
      return cache.get(key);
    }

    return [...cache.entries()].reduce((acc, [k, v]) => {
      const rows = { ...(typeof v === 'object' ? v : { [k]: v }), ...acc };

      return rows;
    }, {});
  };

  call.update = update;

  call.delete = deleteOne;

  call.has = has;

  call.apply = apply;

  call.clear = () => {
    cache.clear();
  };

  call.unmounted = cb => {
    // eslint-disable-next-line no-func-assign
    call = {};
    cache.clear();
    cb?.();
  };

  return call;
}

export default memoQuery;
