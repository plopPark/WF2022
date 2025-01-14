export class Room {
    constructor() {
        //숙소의 ID
        this.id = 0
        //숙소에 대한 설명
        this.name = ""
        this.description = ""
        this.detail = null
        this.facility = null
        this.images = null

    }
}


// Obj를 Room객체로 변환
export const ConvertJsonToRoom = (obj) => {
    let room = new Room();
    room.id = obj.id
    room.name= obj.name
    room.description = obj.description
    room.detail = obj.detail
    room.facility = obj.facility
    room.images = obj.images
    return room

}

// Firebase에 있는 개별 문서에 있는 숙소에 대한 정보와 객체 사이의 양방향 변환을 담당
export const RoomConverter = {
    toFirestore: (room) => {
        return {
            id: room.id,
            name: room.name,
            description: room.description,
            detail: room.detail,
            facility: room.facility,
            images: room.images
        }
    }, fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options)
        let room = new Room();
        room.id = data.id
        room.description = data.description
        room.detail = data.detail
        room.facility = data.facility
        room.images = data.images
    }
};
