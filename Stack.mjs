import { LinkedList } from "./LinkedList.mjs";

class Stack{
    constructor(){//생성자로  스택이 초기화 할 때 빈 리스트를 생성하도록 한다.
        this.list = new LinkedList();
    }

    push(data){//데이터를 삽입하는 push()함수
        this.list.insertAt(0,data); //연결리스트의 head에 삽입하는데, 연결리스트의 insertAt() 함수로 index 0에 데이터를 삽입하면 된다.
    }

    pop(){//데이터를 꺼내는 pop()함수
            try{ //예외 발생시 null을 리턴
                return this.list.deleteAt(0);//연결리스트의 head에서 꺼내면 되기 때문에 연결리스트의 deleteAt() 함수로 index 0에 데이터를 삭제하면 된다.
            } catch(e){
                return null;
            }
    }
    
    peek(){ //스택의 TOP에 있는 데이터를 참조만 하고  데이터를 제거하진 않음
        return this.list.getNodeAt(0);//연결리스트의 getNodeAt()함수로 첫 번째 데이터를 읽어오고 리턴 
    }

    isEmpty(){ //스택이 비어있으면 true, 비어있지 않으면 false를 리턴
        return(this.list.count == 0);//연결리스트의 count를 0과 비교
    }
}

export {Stack}