package root.beans;

import java.util.List;


import lombok.Data;
import root.model.Articale;
import root.model.Articale.ArticaleBuilder;

@Data
public class PageModel {
	
	// 当前页数
	private Integer currentPage;
	// 每页显示
	private Integer pageSize;
	// 所有的总数
	private Long total;
	// 当前总数
	private Integer currentTotal;
	// 最大页码
	private Integer maxPageCode;
	
	
	public PageModel(Integer pageSize,Integer currentPage,Long total,Integer currentTotal) {
		this.total = total;
		this.pageSize = pageSize;
		this.currentPage = currentPage;
		this.currentTotal = currentTotal;
		this.maxPageCode = getMaxPageCode();
	}
	
	public int getMaxPageCode() {
		if(this.pageSize == 0) {
			this.pageSize = 1;
		}
		return (int) Math.ceil((double) this.total / (double) this.pageSize);
	}

}
