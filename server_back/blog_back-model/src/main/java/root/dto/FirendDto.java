package root.dto;

import lombok.Getter;
import lombok.Setter;
import root.model.Firend;
import root.util.TimeUtil;

@Setter
@Getter
public class FirendDto extends Firend{

	private String createTimeString;
	
	private String updateTimeString;
	
	public void formatNoSecondTime() {
		this.createTimeString = TimeUtil.formatNoSecond(this.getCreateTime().getTime());
		this.updateTimeString = TimeUtil.formatNoSecond(this.getUpdateTime().getTime());
	}
}
