function CanDrive(ifDrivingLiscence, ifTired, ifSober) {
    // Write you code here
    if (ifDrivingLiscence === false) {
        return ("You cannot drive");
    }
    if (ifTired === true || ifSober === false) {
        return ("You shouldn't drive")
    } else {
        return ("You can drive")
    }

}

module.exports = CanDrive;
