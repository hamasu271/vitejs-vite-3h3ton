// 1. 타입 단언
let someValue: any = 'Hello, ozcodingschool';

// 'as' 구문 사용
let strLength: number = (someValue as string).length;
console.log('Length(as 구문):', strLength); // 출력: 21

// '<>' 구문 사용 (JSX 환경이 아닌 경우 사용 가능)
let strLength2: number = (<string>someValue).length;
console.log('Length(<> 구문):', strLength2); // 출력: 21

console.log('-----------');

// 2. 제네릭

// 제네릭 DataItem 인터페이스
interface DataItem<T> {
  id: number; // 고유 식별자
  value: T; // 제네릭 타입 T를 가지는 값
}

// 제네릭 DataManager 클래스
class DataManager<T> {
  private items: DataItem<T>[] = []; // DataItem<T> 타입의 배열

  // 아이템 추가 메서드
  addItem(item: DataItem<T>): void {
    this.items.push(item);
  }

  // 아이템 제거 메서드
  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  // 모든 아이템 반환 메서드
  getItems(): DataItem<T>[] {
    return this.items;
  }
}

// 문자열 DataManager 생성 및 사용
const stringManager = new DataManager<string>();
stringManager.addItem({ id: 1, value: 'First' });
stringManager.addItem({ id: 2, value: 'Second' });
console.log('String items:', stringManager.getItems()); // 출력: [ { id: 1, value: 'First' }, { id: 2, value: 'Second' } ]

stringManager.removeItem(1);
console.log('String items after removal:', stringManager.getItems()); // 출력: [ { id: 2, value: 'Second' } ]

// 숫자 DataManager 생성 및 사용
const numberManager = new DataManager<number>();
numberManager.addItem({ id: 1, value: 100 });
numberManager.addItem({ id: 2, value: 200 });
console.log('Number items:', numberManager.getItems()); // 출력: [ { id: 1, value: 100 }, { id: 2, value: 200 } ]

numberManager.removeItem(2);
console.log('Number items after removal:', numberManager.getItems()); // 출력: [ { id: 1, value: 100 } ]
