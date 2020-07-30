
    // 아이디 중복 체크
    $('#checkId').click(function () {
        var data = {
            email : $('#email').val()
        };
        $.ajax({
            type: 'post',
            url: '/rest/checkId',
            data: data
        }).done(function(data){
            errEmail(data);
        }).fail(function (error) {
            alert(error);
        });
        function errEmail(data) {
            var html = '';
            if(data==0){
                html += '<p style="font-size: 80%; ' +
                    'color: green; text-indent: 3em;">' +
                    '<strong>사용 가능한 이메일입니다.</strong></p>';
                $('#errEmail').empty();
                return $('#errEmail').append(html);
            }else{
                html += '<p style="font-size: 80%; ' +
                    'color: red; text-indent: 3em;">' +
                    '<strong>이미 사용중인 아이디입니다.</strong></p>';
                $('#errEmail').empty();
                return $('#errEmail').append(html);
            }

        }
    });

// 회원가입
    $('#join').click(function (evt) {
        evt.preventDefault();
        if(valid($('#email').val())){
            errEmail();
            return;
        }
        if(valid($('#password').val())){
            errPassword();
            return;
        }
        if(valid($('#name').val())){
            errName();
            return;
        }
        if(valid($('#phone').val())){
            errPhone();
            return;
        }
        if(valid($('#memEditId').val())){
            errMemEditId();
            return;
        }
        if(valid($('#emailAuthText').val())){
            errEmailAuthBtn();
            return;
        }
        var formData = new FormData($('#joinForm')[0]);

        $.ajax({
            type : 'POST',
            url : '/rest/join',
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            data : formData,
            success : function () {
                window.location.href = "/index/login";
            }
        });

        function errEmail() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>이메일을 입력 하신지 다시 확인해주세요.</strong></p>';
            $('#errEmail').empty();
            $('#errEmail').append(html);
        }
        function errPassword() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>비밀번호를 입력 하신지 다시 확인해주세요.</strong></p>';
            $('#errPassword').empty();
            $('#errPassword').append(html);
        }
        function errName() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>이름을 입력 하신지 다시 확인해주세요.</strong></p>';
            $('#errName').empty();
            $('#errName').append(html);
        }
        function errMemEditId() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>이메일 인증을 해주세요.</strong></p>';
            $('#errEmailAuth').empty();
            $('#errEmailAuth').append(html);
        }
        function errPhone() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>폰번호를 입력해 주세요.</strong></p>';
            $('#errPhone').empty();
            $('#errPhone').append(html);
        }
        function errEmailAuthBtn() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>인증번호가 없습니다.</strong></p>';
            $('#errEmailAuthBtn').empty();
            $('#errEmailAuthBtn').append(html);
        }
        function valid(val) {
            if(val === null) return true;
            if(typeof val === 'string' && val === '') return true;
            if(typeof val === 'undefined') return true;

            return false;
        }
    });

//아이디 찾기
    $('#searchId').click(function () {
        if(valid($('#name').val())){
            errName();
            return;
        }

        if(valid($('#phone').val())){
            errPhone();
            return;
        }

        var data = {
            name : $('#name').val(),
            phone : $('#phone').val(),
        };

        $.ajax({
            type : 'post',
            url : '/rest/searchId',
            data : data
        }).done(function () {
            alert('아이디 찾기완료');
            window.location.href='/index/searchId';
        }).fail(function (error) {
            alert(error);
        });

        function errName() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>이름 입력하세요.</strong></p>';
            $('#errName').empty();
            $('#errName').append(html);
        }
        function errPhone() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>폰번호 입력하세요..</strong></p>';
            $('#errPhone').empty();
            $('#errPhone').append(html);
        }

        function valid(val) {
            if(val === null) return true;
            if(typeof val === 'string' && val === '') return true;
            if(typeof val === 'undefined') return true;

            return false;
        }
    });

//비밀번호 찾기
    $('#searchPassword').click(function () {
        if (valid($('#email').val())) {
            errEmail();
            return;
        }

        if (valid($('#phone').val())) {
            errPhone();
            return;
        }

        var data = {
            email: $('#email').val(),
            phone: $('#phone').val(),
        };

        $.ajax({
            type: 'post',
            url: '/rest/searchPassword',
            data: data
        }).done(function () {
            alert('비밀번호 찾기완료');
            window.location.href = '/index/searchPassword';
        }).fail(function (error) {
            alert(error);
        });

        function errEmail() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>이메일을 입력하세요.</strong></p>';
            $('#errEmail').empty();
            $('#errEmail').append(html);
        }

        function errPhone() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>폰번호 입력하세요..</strong></p>';
            $('#errPhone').empty();
            $('#errPhone').append(html);
        }

        function valid(val) {
            if(val === null) return true;
            if(typeof val === 'string' && val === '') return true;
            if(typeof val === 'undefined') return true;

            return false;
        }
    });

// 로그인
    $('#login').click(function () {
        if(valid($('#email').val())){
            errEmail();
            return;
        }
        if(valid($('#password').val())){
            errPassword();
            return;
        }
        var data = {
            email : $('#email').val(),
            password : $('#password').val()
        };

        $.ajax({
            type: 'post',
            url: '/rest/login',
            data: data
        }).done(function(){
            window.location.href="/";
        }).fail(function (error) {
            alert(error);
        });

        function valid(val) {
            if(val === null) return true;
            if(typeof val === 'string' && val === '') return true;
            if(typeof val === 'undefined') return true;

            return false;
        }
        function errEmail() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>아이디를 다시 확인해주세요.</strong></p>';
            $('#errEmail').empty();
            $('#errEmail').append(html);
        }
        function errPassword() {
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>비밀번호를 다시 확인해주세요.</strong></p>';
            $('#errPassword').empty();
            $('#errPassword').append(html);
        }
    });

// 이메일 인증 전송 버튼
    $('#emailAuth').click(function () {
        if(valid($('#memEditId').val())){
            var html = "";
            html += '<p style="font-size: 80%; color: red; ' +
                'text-indent: 3em;"><strong>이메일을 입력해주세요.</strong></p>';
            $('#errEmailAuth').empty();
            $('#errEmailAuth').append(html);
        }

        var userId =  $('#memEditId').val();
        var data = {
            userId : $('#memEditId').val()
        };

        $.ajax({
            data : data,
            type : 'post',
            url : '/service/mail/'+userId
        }).done(function () {
            var html = "";
            html += '<p style="font-size: 80%; color: green; ' +
                'text-indent: 3em;"><strong>이메일 인증 전송 완료했습니다.</strong></p>';
            $('#errEmailAuth').empty();
            $('#errEmailAuth').append(html);
        }).fail(function (error) {
            JSON.stringify(error);
        });

        function valid(val) {
            if(val === null) return true;
            if(typeof val === 'string' && val === '') return true;
            if(typeof val === 'undefined') return true;

            return false;
        }
    });

// 이메일 인증 버튼
    $('#EmailAuthBtn').click(function () {
        var data = {
            emailAuthText : $('#emailAuthText').val()
        }

        $.ajax({
            data : data,
            type : 'post',
            url : '/verifyCode'
        }).done(function (data) {
            if(data==0){
                var html = "";
                html += '<p class="asdf" style="font-size: 80%; color: red; ' +
                    'text-indent: 3em;"><strong>인증코드와 맞지 않습니다.</strong></p>';
                $('#errEmailAuthBtn').empty();
                $('#errEmailAuthBtn').append(html);
            }else{
                var html = "";
                html += '<p style="font-size: 80%; color: green; ' +
                    'text-indent: 3em;"><strong>인증 완료했습니다.</strong></p>';
                $('#errEmailAuthBtn').empty();
                $('#errEmailAuthBtn').append(html);
            }
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    });

    // 비밀번호 업데이트 버튼
    $('#updatePassword').on('click', function (event) {
        event.preventDefault();
        var data = {
            email : $('#editEmail').val(),
            password : $('#editPassword').val()
        }
        $.ajax({
           data : data,
           type : 'post',
           url : '/rest/updatePassword',
           success : function (data) {
                var html = "";
                html += '<p class="asdf" style="font-size: 80%; color: green; ' +
                    'text-indent: 7em;"><strong>비밀번호 변경 완료되었습니다.</strong></p>';
                $('#comUpdatePass').empty();
               $('#comUpdatePass').append(html);
           },
           error : function (error) {
                alert(JSON.stringify(error));
           }
        });
    });

    // 회원 정보 수정 버튼
    $('#normalEdit').on('click', function (event) {
        event.preventDefault();

        var formData = new FormData();
        formData.append(`email`, $('#editEmail').val());
        formData.append(`name`, $('#name').val());
        formData.append(`phone`, $('#phone').val());
        
        $.ajax({
            type : 'POST',
            url : '/rest/edit',
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
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
    $('#guardEdit').on('click', function (event) {
        event.preventDefault();
        var form = $('#editForm')[0];
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
    $('#registerEdit').on('click', function (event) {
        event.preventDefault();
        var form = $('#editForm')[0];
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

