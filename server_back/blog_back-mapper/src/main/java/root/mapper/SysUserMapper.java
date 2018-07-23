package root.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.SysUser;

@Mapper
public interface SysUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SysUser record);

    int insertSelective(SysUser record);

    SysUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SysUser record);

    int updateByPrimaryKey(SysUser record);
    
    /**
     * 是否存在用户,根据用户名
     * @param username
     * @return
     */
	int CountfindByUsername(@Param("username") String username);
	/**
	 * 查询密码，根据用户名
	 * @param username
	 */
	SysUser findSysUserByUsername(@Param("username") String username);
}