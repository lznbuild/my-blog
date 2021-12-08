var Status;
(function (Status) {
    Status[Status["Success"] = 0] = "Success";
    Status[Status["Error"] = 1] = "Error";
})(Status || (Status = {}));

var user = {
    name: 'user1',
    age: 18,
    status: Status.Success
};
console.log(user, 'user');
