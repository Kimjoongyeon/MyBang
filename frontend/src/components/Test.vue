<template>
	<div>
		<form name="frmLogin" method="post" action="/login" encType="UTF-8">
			아이디 :<input type="text" name="user_id"><br>
			비밀번호:<input type="password" name="user_pw"><br>
			<input type="submit" value="로그인"> <input type="reset" value="다시입력">
		</form>
	</div>
</template>

<script>
  export default {}
</script>
