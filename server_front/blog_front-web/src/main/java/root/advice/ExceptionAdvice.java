package root.advice;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import root.beans.ParamExceptionResult;
import root.beans.TokenExceptionResult;
import root.exception.ActivationException;
import root.exception.CheckParamException;
import root.exception.TokenException;

@ControllerAdvice
public class ExceptionAdvice {
	
	// 检查参数出错的异常
	@ExceptionHandler(CheckParamException.class)
	public ResponseEntity<ParamExceptionResult> handlerParamException(CheckParamException e) {
		// TODO 记录异常日志
		return new ResponseEntity<ParamExceptionResult>(ParamExceptionResult.error(e.getFieldName(),e.getFieldValue()),HttpStatus.OK);
	}
	
	@ExceptionHandler(TokenException.class)
	public ResponseEntity<TokenExceptionResult> handlerTokenException(TokenException e) {
		return new ResponseEntity<TokenExceptionResult>(TokenExceptionResult.builder().code(e.getResultCode()).msg(e.getMsg()).build(),HttpStatus.OK);
	}
	
	@ExceptionHandler(ActivationException.class)
	public void handleActivationException(ActivationException e) {
		// TODO 记录异常日志
		System.out.println(e.getMessage());
	}
}
