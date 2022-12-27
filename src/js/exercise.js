// 주소록 만들기
// object 타입으로 주소록 정보를 담기
const addressBook = [
    {name: '표호근', address: '남양주', phone: '010-5554-7484', sex: '남'},
    {name: '서정아', address: '덕소', phone: '010-7175-7339', sex:'여'},
    {name: '서형원', address: '강동', phone: '010-1111-2222', sex: '남'},
    {name: '홍길동', address: '강남', phone: '010-2222-4444', sex: '남'},
    {name: '홍길순', address: '강북', phone: '010-6666-7777', sex: null},
    {name: '정우성', address: null, phone: '010-7777-1111', sex: '남'}
];
window.onload = function(){
    let person = '';
    for(let i = 0; i < addressBook.length; i++){
        // if(addressBook[i].name == null){
        //     addressBook[i].name = ''
        // }else if(addressBook[i].address == null){
        //     addressBook[i].address = ''
        // }else if(addressBook[i].phone == null){
        //     addressBook[i].phone = ''
        // }else if(addressBook[i].sex == null){
        //     addressBook[i].sex = ''
        // }
        person += 
        `<li>
            <dl>
                <dt>이름</dt>
                <dd class="name">${addressBook[i].name === null ? '-' : addressBook[i].name}</dd>
                <dt>주소</dt>
                <dd class="address">${addressBook[i].address === null? '-': addressBook[i].address}</dd>
                <dt>연락처</dt>
                <dd class="phone">${addressBook[i].phone === null? '-': addressBook[i].phone}</dd>
                <dt>성별</dt>
                <dd class="sex">${addressBook[i].sex === null? '-': addressBook[i].sex}</dd>
            </dl>
        </li>`
    }
    document.getElementById('addressList').innerHTML = person
}


