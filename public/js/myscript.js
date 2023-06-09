function trip(obj, trip) {
    document.getElementById(obj).innerHTML = "<b>" + trip + "</b>";
}

function checkSex() {
    var sexNum = document.getElementsByName("sex");
    var sex = "";
    for (let i = 0; i < sexNum.length; ++i) {
        if (sexNum[i].checked) {
            sex = sexNum[i];
            //console.log(sexNum[i].value);
        }

    }
    if (sex == "") {
        trip("sex_trip", "请选择!!");
        return false;
    } else {
        trip("sex_trip", "OK!!");
    }
}

function checkHobby() {
    var hobbyNum = document.getElementsByName("hobby");
    var hobby = "";
    for (let i = 0; i < hobbyNum.length; ++i) {
        if (hobbyNum[i].checked) {
            hobby = hobbyNum[i];
        }
    }
    if (hobby == "") {
        trip("hobby_trip", "请选择!!");
        return false;
    } else {
        trip("hobby_trip", "OK!!");

    }
}

function checkSelect() {
    var myselect = document.getElementById("userType");
    var index = myselect.selectedIndex;
    var checkValue = myselect.options[index].value;
    if (checkValue == 0) {
        trip("type_trip", "请选择!!");
        return false;
    } else {
        trip("type_trip", "OK!!");
    }
}

function checkForm() {
    checkSelect();
    checkHobby();
    checkSex();

    //获取用户名输入项
    var userNname = document.getElementById("userNname");
    var uName = userNname.value;
    if (uName.length < 1 || uName.length > 10) {
        trip("name_trip", "账号长度为1-10位!!");
        return false;
    } else {
        trip("name_trip", "OK!!");

    }

    //密码长度大于6 和确认必须一致
    var password = document.getElementById("password");
    var userPass = password.value;
    if (userPass.length < 6) {
        trip("password_trip", "密码要>6位!!");
        return false;
    } else {
        trip("password_trip", "OK!!");
    }

    //获取确认密码框的值 var
    var surePassword = document.getElementById("surePassword");
    var surePass = surePassword.value;
    if (userPass != surePass) {
        trip("surePassword_trip", "两次密码不一致!!");
        return false;
    } else {
        trip("surePassword_trip", "OK!!");
    }

    // 校验自我介绍
    var introduceText = document.getElementById("introduceText");
    var introduce = introduceText.value;
    if (introduce.length < 3 || introduce.length > 60) {
        trip("introduce_trip", "长度为3-50字!!");
        return false;
    } else {
        trip("introduce_trip", "OK!!");
    }

    return true;
}

function submitT() {
    if (checkForm()) {
        return true;
    } else {
        return false;
    }
}