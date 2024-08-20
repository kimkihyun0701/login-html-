document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('test-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // 폼 필드 가져오기
        const genderField = document.getElementById('gender');
        const ageField = document.getElementById('age');
        const genderErrorMessage = document.getElementById('gender-error');
        const ageErrorMessage = document.getElementById('age-error');

        let valid = true;

        // 성별 필드 검사
        if (genderField.value === '') {
            genderErrorMessage.textContent = '성별을 선택해주세요.';
            genderErrorMessage.style.display = 'block';
            genderField.classList.add('invalid');
            valid = false;
        } else {
            genderErrorMessage.textContent = '';
            genderErrorMessage.style.display = 'none';
            genderField.classList.remove('invalid');
        }

        // 나이 필드 검사
        if (ageField.value === '' || isNaN(ageField.value) || ageField.value <= 0) {
            ageErrorMessage.textContent = '올바르지 않은 나이입니다.';
            ageField.classList.add('invalid');
            ageErrorMessage.style.display = 'block';
            valid = false;
        } else {
            ageErrorMessage.textContent = '';
            ageField.classList.remove('invalid');
            ageErrorMessage.style.display = 'none';
        }

        // 폼이 유효한 경우 제출 처리
        if (valid) {
            alert('테스트를 시작합니다!');
            // 실제 폼 제출 처리 추가 가능
        }
    });
});
