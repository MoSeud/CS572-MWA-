var university = /** @class */ (function () {
    function university(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    university.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    return university;
}());
var mum = new university("MUM", "CS");
mum.graduation(2019);
