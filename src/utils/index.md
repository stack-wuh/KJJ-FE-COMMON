## Utils

### isEmptyObj

用于判定一个对象是否是一个空对象.

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const obj = {};

  const user = {
    name: 'shadow',
  };

  return (
    <>
      <p>current is obj value: {JSON.stringify(obj)}</p>
      <p>current isEmptyObj: {JSON.stringify(utils.isEmptyObj(obj))}</p>
      <p>======================================</p>
      <p>current is user value: {JSON.stringify(user)}</p>
      <p>current isEmptyObj: {JSON.stringify(utils.isEmptyObj(user))}</p>
    </>
  );
};
```

### checkFileSize

用于检查上传文件的大小, 默认大小为 1M

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const handleUploadFile = e => {
    const allowUpload = utils.checkFileSize(e.target.value);

    window.alert(allowUpload);
  };

  return (
    <>
      <p>checkFileSize: </p>
      <input type="file" onChange={handleUploadFile} />
    </>
  );
};
```

### filterEmptyObj

过滤对象的空属性

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const obj = {
    name: 'shadow',
    age: 25,
    sex: 1,
    content: '',
    email: null,
    avator: undefined,
  };

  const filterObj = utils.filterEmptyObj(obj);

  return (
    <>
      <p>current is origin object: {JSON.stringify(obj, null, 2)}</p>

      <p>after filter object: {JSON.stringify(filterObj, null, 2)}</p>
    </>
  );
};
```

### downloadFileByType

下载二进制文件

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const handleDownload = () => {
    utils.downloadFileByType();
  };
  return (
    <>
      <button onClick={handleDownload}>download</button>
    </>
  );
};
```

### downloadFileByTypeBase64

文件 Base64 转换

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const handleDownload = () => {
    utils.downloadFileByTypeBase64();
  };

  return (
    <>
      <button onClick={handleDownload}>download</button>
    </>
  );
};
```

### muitlDownloadFiles

多文件下载

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const handleDownload = () => {
    const urls = [
      'http://speedship-prod.oss-cn-shenzhen.aliyuncs.com/settleBill/%E8%B4%A6%E5%8D%95KJJ2101AJ2196%20%E6%B7%B1%E5%9C%B3%E5%B8%82%E8%89%BE%E9%87%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20MQJ1%208CTNS%20%E6%9E%81%E9%80%9F%E8%BE%BE.pdf?Expires=1611749742&OSSAccessKeyId=LTAIVq0PWt08JE7A&Signature=BlOIYJs5Wj9SO1SiLJvh3VvLB94%3D',
      'http://speedship-prod.oss-cn-shenzhen.aliyuncs.com/settleBill/%E8%B4%A6%E5%8D%95KJJ2101AJ2196%20%E6%B7%B1%E5%9C%B3%E5%B8%82%E8%89%BE%E9%87%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20MQJ1%208CTNS%20%E6%9E%81%E9%80%9F%E8%BE%BE.pdf?Expires=1611749742&OSSAccessKeyId=LTAIVq0PWt08JE7A&Signature=BlOIYJs5Wj9SO1SiLJvh3VvLB94%3D',
    ];
    utils.muitlDownloadFiles(urls);
  };

  return (
    <>
      <button onClick={handleDownload}>download muitls</button>
    </>
  );
};
```

### checkFileType

检查上传文件类型, 默认检查文件类型是不是图片

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const handleChange = e => {
    const allowUpload = utils.checkFileType(e.target.value);

    window.alert(`检查是否是图片吗? : ${allowUpload}`);
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
    </>
  );
};
```

### differenceObj

对比两个对象的差异, 现在只能对比简单类型的差异

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const obj1 = {
    name: 'shadow',
    avator: 'https://src.wuh.site/img/avator.png',
    keys: [1, 2, 3],
  };

  const obj2 = {
    name: 'jhon',
    avator: 'https://src.wuh.site/img/avator.png',
    key: [1, 2],
  };

  const diffObj = utils.differenceObj(obj1, obj2);

  return (
    <>
      <p>obj1: {JSON.stringify(obj1)}</p>
      <p>obj2: {JSON.stringify(obj2)}</p>
      <hr />
      <p>after diff: {JSON.stringify(diffObj)}</p>
    </>
  );
};
```

### compose

组合函数, 详情对照 Redux 的 Compose 组合 Api

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const logger = () => {
    window.alert('Hello Logger');
  };

  const pormat = () => {
    window.alert('Hello pormat');
  };

  const composeLogger = utils.compose(logger, pormat);

  return (
    <>
      <button onClick={logger}>logger</button>
      <button onClick={pormat}>pormat</button>
      <button onClick={composeLogger}>compose</button>
    </>
  );
};
```

### filterPropertyObj

过滤对象的空值

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const obj = {
    a: '',
    b: 'asd',
    c: null,
    d: undefined,
  };

  const filterPropertyObj = utils.filterPropertyObj(obj);

  return (
    <>
      <p>current is filterPropertyObj: {JSON.stringify(filterPropertyObj)}</p>
    </>
  );
};
```

### copyToClip

复制文本至剪切板

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const obj = {
    a: '',
    b: 'asd',
    c: null,
    d: undefined,
  };

  const handleCopyToClip = () => {
    utils.copyToClip(JSON.stringify(obj), () => {
      window.alert(`${JSON.stringify(obj)} 已复制到剪切板`);
    });
  };

  return (
    <>
      <p>string: {JSON.stringify(obj)}</p>
      <button onClick={handleCopyToClip}>copyToClip</button>
    </>
  );
};
```

### oilSpace

去除字符串两端空格

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

export default () => {
  const str = '   message    ';
  const oilStr = utils.oilSpace(str);
  return (
    <>
      <p>
        Current is str:{' '}
        <pre
          style={{ backgroundColor: '#f2f2f2' }}
          dangerouslySetInnerHTML={{
            __html: str,
          }}
        />
      </p>
      <hr />
      <p>
        Current is oilStr:{' '}
        <pre
          style={{ backgroundColor: '#f2f2f2' }}
          dangerouslySetInnerHTML={{
            __html: oilStr,
          }}
        />
      </p>
    </>
  );
};
```

### toFixed

保留小数点

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';

const { toFixed } = utils;
export default () => {
  const money = 9.1233123;

  return (
    <>
      <p>origin Number: {money}</p>
      <hr />
      <p>after Number, tofixed 3: {toFixed(money, 3)}</p>
    </>
  );
};
```

### noop

特意给出了一个空函数, 别紧张, 它就是一个占位函数

```javascript
import React from 'react';
import { utils } from 'kjj-fe-common';

const { noop } = utils;
export default (onFetch = noop) => {
  return <></>;
};
```

### CacheSearch

用于缓存请求函数的请求参数, 简化操作步骤:

#### 1. 使用一个 initialValues 值, 作为初始值

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';
const { cacheSearch } = utils;

const Demo = () => {
  const logger = (...props) => {
    console.group('============ Logger  ===========');
    console.log('========== props: ', props);
    console.groupEnd();
  };

  const initialValues = {
    name: 'shadow',
    age: 10,
  };

  const memo = cacheSearch(logger, { initialValues });
  console.log('current is memo', memo.get());

  return (
    <>
      <p>打开控制台, 查看打印日志</p>
      <p>initialValues: {JSON.stringify(initialValues)}</p>
      <div>{JSON.stringify(memo.get())}</div>
    </>
  );
};
export default Demo;
```

#### 2. update: 用内置的 update 方法更新参数

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';
const { cacheSearch } = utils;

const Demo = () => {
  const logger = (...props) => {
    console.group('============ Logger  ===========');
    console.log('========== props: ', props);
    console.groupEnd();
  };

  const initialValues = {
    name: 'shadow',
    age: 10,
  };

  const memo = cacheSearch(logger, { initialValues });

  memo.update('initialValues', { age: 22, limit: 10 });

  return (
    <>
      <p>打开控制台, 查看打印日志</p>
      <p>initialValues: {JSON.stringify(initialValues)}</p>
      <div>{JSON.stringify(memo.get())}</div>
    </>
  );
};
export default Demo;
```

#### 3. delete: 用内置的 delete 方法删除参数

```jsx
import React from 'react';
import { utils } from 'kjj-fe-common';
const { cacheSearch } = utils;

const Demo = () => {
  const logger = (...props) => {
    console.group('============ Logger  ===========');
    console.log('========== props: ', props);
    console.groupEnd();
  };

  const initialValues = {
    name: 'shadow',
    age: 10,
  };

  const search = {
    key1: 'key1',
    key2: 'key2',
  };

  const memo = cacheSearch(logger, { initialValues });
  memo(search);
  memo.delete('initialValues', initialValues);

  return (
    <>
      <p>打开控制台, 查看打印日志</p>
      <p>initialValues: {JSON.stringify(initialValues)}</p>
      <p>searchValues: {JSON.stringify(search)}</p>

      <div>{JSON.stringify(memo.get())}</div>
    </>
  );
};
export default Demo;
```
