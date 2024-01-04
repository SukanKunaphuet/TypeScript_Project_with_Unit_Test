ขั้นแรก สร้างโปรเจ็กต์ TypeScript ใหม่และเริ่มต้นด้วย npm

### ขั้นตอนที่ 1: ตั้งค่า Project

เปิดเทอร์มินัลแล้วรันคำสั่งต่อไปนี้:

```bash
mkdir mergeFunctionProject
cd mergeFunctionProject
npm init -y
npm install --save-dev typescript mocha chai @types/mocha @types/chai ts-node
```

สิ่งนี้จะสร้างไดเร็กทอรีใหม่ เริ่มต้นเป็นโปรเจ็กต์ npm และติดตั้ง TypeScript, Mocha (กรอบการทดสอบ), Chai (ไลบรารีการยืนยัน) และนิยาม Type ที่เกี่ยวข้อง

### ขั้นตอนที่ 2: สร้างไฟล์ TypeScript

สร้างไฟล์ TypeScript สำหรับฟังก์ชัน `merge` ของคุณและอีกไฟล์สำหรับ Test cases

#### mergeFunction.ts

```typescript
export function merge(collection1: number[], collection2: number[]): number[] {
  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] <= collection2[j]) {
      merged.push(collection1[i]);
      i++;
    } else {
      merged.push(collection2[j]);
      j++;
    }
  }

  // Add remaining elements from collection1 (if any)
  while (i < collection1.length) {
    merged.push(collection1[i]);
    i++;
  }

  // Add remaining elements from collection2 (if any)
  while (j < collection2.length) {
    merged.push(collection2[j]);
    j++;
  }

  return merged;
}
```

#### mergeFunction.test.ts

```typescript
import { merge } from './mergeFunction';
import { expect } from 'chai';

describe('merge function', () => {
  it('should merge two sorted arrays', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6, 8];
    const result = merge(arr1, arr2);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should merge arrays with different lengths', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6];
    const result = merge(arr1, arr2);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
  });

  // Add more test cases as needed
});
```

### ขั้นตอนที่ 3: อัปเดต package.json

อัปเดตไฟล์ `package.json` เพื่อรวมสคริปต์สำหรับการรันการทดสอบและคอมไพเลอร์ TypeScript

```json
"scripts": {
  "test": "mocha -r ts-node/register 'mergeFunction.test.ts'",
  "build": "tsc"
},
```

### ขั้นตอนที่ 4: รันการทดสอบและ Build โปรเจ็กต์

รันการทดสอบและ Build ไฟล์ TypeScript:

```bash
npm test
npm run build
```