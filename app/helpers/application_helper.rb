module ApplicationHelper
  def url
    Rails.env == 'production' ? 'http://node.meowtechnology.com': 'http://192.168.31.184:3000'
  end

  def title
    if params[:controller] == 'welcome'
      'Node签到'
    elsif params[:controller] == 'giveaway'
      'Node抽奖'
    elsif params[:controller] == 'feedbacks'
      '课程反馈'
    end
  end
end
