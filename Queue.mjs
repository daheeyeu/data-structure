import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
    constructor(){
        this.list =  new DoublyLinkedList
    }

    enqueue(data){ //데이터 삽입 함수
        this. list.insertAt(0,data);//이중연결리스트의 insertAt()함수로 인덱스 0에 data를 넣어준다
    }

    dequeue(){//데이터 제거 함수
        try{
            return this.list.deleteLast();//이중연결리스트의 deleteLast()함수를 호출해서 그 노드를 반환해줌
        } catch(e){
            return null;
        }
    }  

    front(){
        return this.list.tail //데이터를 제거하지 않고 참조만 되기 때문에  tail에 있는 값을 리턴만 해주면 됨
    }

    isEmpty(){
        return (this.list.count == 0);
    }
}
export{Queue};