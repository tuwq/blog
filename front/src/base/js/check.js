export function checkRegistForm(state) {
	if (state.username.trim() == '' || state.username == null ) {
		return '账户不能为空'
	}
	if (state.password.trim() == '' || state.password == null ) {
		return '密码不能为空'
	}
	if (!checkmail(state.email)) {
		return '邮箱格式错误'
	}
	if (state.usercode.toLowerCase() != state.truecode) {
		return '验证码错误'
	}
	return true
}

export function checkmail(mail) {
	// 邮箱验证规则  
	var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	return reg.test(mail)
}

export function isNumber(str) {
	return (/^\d+$/.test(str))
}

export function checkLoginForm(state) {
	if (state.loginname.trim() == '' || state.loginname == null) {
		return '账户不能为空'
	}
	if (state.password.trim() == '' || state.password == null) {
		return '密码不能为空'
	}
	return true
}

export function checkUserBasisSettingForm(state) {
	if (state.nickname.trim() == '' || state.nickname == null) {
		return '昵称不能为空'
	}
	if (state.nickname.length < 1 || state.nickname.length > 10) {
		return '昵称长度保持在1-10之间'
	}
	return true
}

export function checkUserSecuritySettingForm(state) {
	if (!checkmail(state.email)) {
		return '邮箱格式错误'
	}
	if (state.password.trim() == '' || state.password == null) {
		return '密码不能为空'
	}
	if (state.repassword.trim() == '' || state.repassword == null) {
		return '密码不能为空'
	}
	if (state.password.trim() != state.repassword.trim()) {
		return '两次密码输入不一致'
	}
	return true
}

export function checkCommentForm(content) {
	if (content.trim() == '' || content == null) {
		return '内容信息不能为空'
	}
	if (content.length < 5 || content.length > 200) {
		return '长度应该在5-200之间'
	}
	return true
}

export function checkSecretLetterForm(state) {
	if (state.contact.trim() == '' || state.contact == null) {
		return '联系方式不能为空'
	}
	if (!checkmail(state.contact) && !checkQQNumber(state.contact)) {
		return '联系方式必须为qq或邮箱'
	}
	if (state.content.trim() == '' || state.content == null) {
		return '私信内容不能为空'
	}
	if (state.content.trim().length < 10 || state.content.length > 200) {
		return '私信内容长度保持在10-200之间'
	}
	return true
}

export function checkQQNumber(number) {
	// qq号验证规则  
	var reg = /^[1-9][0-9]{4,}$/;
	return reg.test(number)
}