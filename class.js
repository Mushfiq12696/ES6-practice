class Students {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.schoolName = 'Kolimunnes School'
    }
}

const student1 = new Students(1001, "Ashiuqur Rahman");
const student2 = new Students(1002, "Sumaiya");
console.log(student1, student2);