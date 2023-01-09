class Node{
    constructor(data, next = null){
            this.data = data;
            this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.count = 0; // 총 저장된 노드의 수를 저장하는 프로퍼티
    }

    printAll(){
        let currentNode = this.head; //currentNode변수가 head를 가리키게 함
        let text = "[";
        while(currentNode != null){ //List순회 -> currentNode가 null이 됳 때까지 계속 next노드를 참조해주면 됨
          text += currentNode.data; //nextNode로 이동 전에 cuerrentNode 출력
            currentNode = currentNode.next;//currentNode를 currentNode의 next노드로 가리켜준다.
        
            if(currentNode != null){ //currentNode가 마지막이 아니라면 콤마로 구분
            text +=", "; 
            }
        }
        text += "]";
        console.log(text);
    }

    clear(){
        this.head =  null; //head가 null을 가리키게 해서 참조하는 것이 없게 만들어주기 
        this.count = 0; // 카운트를 0으로 만들어주면 리스트가 비워짐
    }

    insertAt(index,data){
        if(index > this.count || index < 0){ //연결리스트의 크기보다 큰 곳에 삽입하거나 음수위치에 삽입하는 경우 에러발생
            throw new Error("범위를 넘어갔습니다.")
        }
        let newNode = new Node(data); //새로 삽입할 노드 생성, 매개변수 data를 Node의 생성자로 넘겨줘서 Node의 data를 설정해줌
        
        if(index == 0){ //리스트의 가장 앞부분에 삽입하는 경우, 즉 인덱스가 0인 경우를 처리
            newNode.next = this.head; //새로 생성한 노드의 next가 head를 가리킨다
            this.head = newNode; //새로 생성한 노드를 head로 변경해주면 됨
        }else{//가장 앞부분 삽입을 제외한 경우를 처리, 원하는 인덱스까지 노드를 타고 들어가서 새로 삽입하는 경우
            let currentNode = this.head; // 삽입하려는 노드 바로 전까지 가기 위한 변수 -> head에서 시작하기 때문에 head로 초기화
            
            for(let i = 0; i < index - 1; i++){//목표 인덱스 바로 전까지(-1) next를 이용해 currentNode 이동시키기
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;//새로운 노드가 currentNode의 next노드를 가리키고
            currentNode.next = newNode; //currentNode가 새로운 노드를 가리킨다
        }
        this.count++; //if문(가장 앞에 삽입할 때)과 else문(그 외 나머지 위치에 삽입할 때) 다음에 count++를 해줘서 이 연결리스트에 데이터의 수(count)가 하나 늘어났다고 기록
}
    insertLast(data){
        this.insertAt(this.count,data);//insertAt를 호출해서 index에 리스트의 크기인 count를 넣어 가장 뒤에 데이터를 삽입
    }
}
export {Node, LinkedList};