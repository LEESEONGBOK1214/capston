'use strict';
// 비밀번호 수정하기 버튼
$('#updatePassword').click(function () {
    var data = {
        password : $('#password').val()
    };

    $.ajax({
        data : data,
        url : '/rest/updatePassword',
        type : 'post'
    }).done(function (data) {

    }).fail(function (error) {
        JSON.stringify(alert(error));
    });
});

$('select[name=select]').on('click', function () {
    var text = $('select[name=select] option[value="충전소"]').text();
    alert(text);
});
$('#parking').on('click', function () {
    var text = $('#parking').text();
    alert(text);
});

// 회원정보 수정 - 회원 구분에 따라 추가 양식 제공(memberEdit)
$('input[type=radio][name=mem_role]').on('click', function() {
    var chkValue = $('input[type=radio][name=mem_role]:checked').val();

    if (chkValue == 'no') {
        $('#mp_form').css('display', 'none');
        $('#reg_form').css('display', 'none');
        $('#no_edit').show();
        // return false;
    } else if (chkValue == 'mp') {
        $('#mp_form').css('display', 'block');
        $('#reg_form').css('display', 'none');
        $('#no_edit').hide();
        // return false;
    } else if (chkValue == 'reg') {
        $('#mp_form').css('display', 'none');
        $('#reg_form').css('display', 'block');
        $('#no_edit').hide();
        // return false;
    }
});

// 회원 정보 수정 버튼
$('#no_edit').on('click', function (event) {
    event.preventDefault();
    if($('#phone').val()==null || $('#phone').val()==''){
        let html = "";
        html += '<p style="font-size: 80%; color: red; margin-top: -25px;' +
            'text-indent: 8em;"><strong>폰번호를 입력해주세요.</strong></p>';
        $('#phone').focus();
        $('#errPhone').empty();
        $('#errPhone').append(html);
        return;
    }

    var form = $('#edit_form')[0];
    var formData = new FormData(form);

    $.ajax({
        type : 'POST',
        url : '/rest/edit',
        data : formData,
        success : function (data) {
            if(data==3){
                alert('회원 정보 수정 완료했습니다.');
                window.location.href = "/";
            }else{
                event.preventDefault();
                alert('다시 입력');
            }
        },
        error : function (error) {
            alert(JSON.stringify(error));
        }
    });
});

// 회원 정보 경비 요청 버튼
$('#mp_edit').on('click', function (event) {
    event.preventDefault();
    var form = $('#edit_form')[0];
    var formData = new FormData(form);

    $.ajax({
        type : 'POST',
        url : '/rest/edit',
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        data : formData,
        success : function (data) {
            if(data==1){
                alert('경비 요청 완료했습니다.');
                window.location.href = "/";
            }else{
                event.preventDefault();
                alert('다시 입력');
            }
        },
        error : function (error) {
            alert(JSON.stringify(error));
        }
    });
});

// 회원 정보 등록자 요청 버튼
$('#reg_edit').on('click', function (event) {
    event.preventDefault();
    var form = $('#edit_form')[0];
    var formData = new FormData(form);

    $.ajax({
        type : 'POST',
        url : '/rest/edit',
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        data : formData,
        success : function (data) {
            if(data==2){
                alert('등록자 요청 완료했습니다.');
                window.location.href = "/";
            }else{
                event.preventDefault();
                alert('다시 입력');
            }
        },
        error : function (error) {
            alert(JSON.stringify(error));
        }
    });
});

// 즐겨찾기의 예약 버튼
$('#moveHpBook').on('click', function () {
    let parkingName = $('#parkingName').text();
    let email = $('#email').val()
    window.location.href = '/happyParking/happyParkingBook/'+parkingName+'+'+email;
})

// 차량 등록
$('#regCar').on('click', function (event) {
    event.preventDefault();
    if($('#car_id').val()==null || $('#car_id').val()==''){
        let html = "";
        html += '<p style="font-size: 80%; color: red; margin-top: -15px;' +
            'text-indent: 3em;"><strong>차량번호를 입력해주세요.</strong></p>';
        $('#car_id').focus();
        $('#errCar_id').empty();
        $('#errCar_id').append(html);
        return;
    } else if($('#car_id').val().length!=8){
        alert($('#car_id').val().length);
        let html = "";
        html += '<p style="font-size: 80%; color: red; margin-top: -15px;' +
            'text-indent: 3em;"><strong>차량번호를 확인해주세요.</strong></p>';
        $('#car_id').focus();
        $('#errCar_id').empty();
        $('#errCar_id').append(html);
        return;
    }else {
        let main = $('#car_id').val().toString();
        let q = parseInt(main.substr(0,1)); // 1
        let w = parseInt(main.substr(1,1)); // 2
        let e = parseInt(main.substr(2,1)); // 3
        let r = main.substr(3,1); // 가
        let a = parseInt(main.substr(4,1)); // 1
        let s = parseInt(main.substr(5,1)); // 2
        let d = parseInt(main.substr(6,1)); // 3
        let f = parseInt(main.substr(7,1)); // 4

        if(isNaN(q)==true || isNaN(w)==true || isNaN(e)==true || isNaN(r)==false
            || isNaN(a)==true || isNaN(s)==true || isNaN(d)==true || isNaN(f)==true){
            let html = "";
            html += '<p style="font-size: 80%; color: red; margin-top: -15px;' +
                'text-indent: 3em;"><strong>차량번호를 다시 확인해주세요.</strong></p>';
            $('#car_id').focus();
            $('#errCar_id').empty();
            $('#errCar_id').append(html);
            return;
        }
        let form = $('#carForm')[0];
        let formData = new FormData(form);

        $.ajax({
            type : 'post',
            url : '/rest/regCar',
            data : formData,
            processData: false,
            contentType: false,
            success : function () {
                alert('차량 등록이 완료되었습니다.');
                let html = "";
                html += '<button class="btn-primary" style="margin-right: 10px; margin-top: 10px;" disabled>'
                    +$('#car_id').val()+'</button>';
                $('#addedCar').focus();
                $('#addedCar').append(html);
            }
        });
        $('#modalClose').click();
    }
});

$('#addCarModalBtn').on('click', function () {
    $('#carForm').resetForm();
    $('#errCar_id').empty();
});

$(document).ready(function () {

});