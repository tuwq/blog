package root.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ThreadUtil {

private static final ThreadLocal<HttpServletRequest> requestHolder = new ThreadLocal<HttpServletRequest>();
	
	private static final ThreadLocal<HttpServletResponse> responseHolder = new ThreadLocal<HttpServletResponse>();
	
	public static void add(HttpServletRequest request) {
		requestHolder.set(request);
	}
	
	public static void add(HttpServletResponse response) {
		responseHolder.set(response);
	}
	
	public static HttpServletRequest getCurrentRequest() {
		return requestHolder.get();
	}
	
	public static HttpServletResponse getCurrentResponse() {
		return responseHolder.get();
	}
	
	public static void remove() {
		requestHolder.remove();
		responseHolder.remove();
	}
	
}
