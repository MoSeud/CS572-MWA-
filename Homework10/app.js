var university = /** @class */ (function () {
    function university(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    university.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    university.prototype.getName = function () {
        return this.name;
    };
    university.prototype.setName = function (name) {
        this.name = name;
    };
    university.prototype.getDept = function () {
        return this.dept;
    };
    university.prototype.setDept = function (dept) {
        this.dept = dept;
    };
    return university;
}());
var mum = new university("MUM", "CS");
mum.setDept("MUMcompro");
mum.graduation(2019);
