package root.controller;


import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import root.beans.ImgURIResult;
import root.beans.JsonResult;
import root.beans.PageResult;
import root.dto.ArticleDto;
import root.exception.CheckParamException;
import root.model.Article;
import root.param.ArticleParam;
import root.param.PageParam;
import root.service.ArticleService;

@RestController
@RequestMapping("/sys/article")
public class ArticleController {
	
	@Resource
	private ArticleService articleService;

	@PostMapping("/add")
	public JsonResult<Void> add(@RequestBody ArticleParam param) {
		articleService.add(param);
		return JsonResult.<Void>success();
	}
	
	@PostMapping(value="/getImgURI", headers="content-type=multipart/form-data")
	public ImgURIResult getimgURI(@RequestParam(value = "fileArray") List<MultipartFile> formdata) {
		return articleService.getImgSrc(formdata);
	}
	
	@GetMapping("/list")
	public PageResult<ArticleDto> list(PageParam param) {
		return articleService.list(param);
	}
	
	@DeleteMapping("/delBatch/{ids}")
	public JsonResult<Void> delBatch(@PathVariable("ids") String ids) {
		// articleService.delBatch(ids);
		return JsonResult.<Void>success();
	}
	
	@PutMapping("/updateBatch/{ids}")
	public JsonResult<Void> updateBatch(@PathVariable("ids") String ids) {
		articleService.updateBatch(ids);
		return JsonResult.<Void>success();
	}
	
	@PostMapping("/search")
	public PageResult<ArticleDto> listBySearch(@RequestBody PageParam param) {
		return articleService.listByKeyWord(param.getKeyword(),param);
	} 
	
	@GetMapping("/{id}")
	public JsonResult<ArticleDto> detail(@PathVariable("id") String id) {
		if(!StringUtils.isNumeric(id)) {
			throw new CheckParamException("文章","不存在");
		}
		return articleService.detail(Integer.parseInt(id));
	}
	
	@PutMapping("/{id}")
	public JsonResult<Void> update(@PathVariable("id") String id,@RequestBody ArticleParam param) {
		if(!StringUtils.isNumeric(id)) {
			throw new CheckParamException("文章","不存在");
		}
		return articleService.update(Integer.parseInt(id),param);
	}
	
	@PostMapping(value="/faceCover", headers="content-type=multipart/form-data")
	public ImgURIResult faceCover(@RequestParam(value = "faceCover") List<MultipartFile> files,@RequestParam(value = "coverImg")String coverImg) {
		return articleService.getCoverSrc(files,coverImg);
	}
}
