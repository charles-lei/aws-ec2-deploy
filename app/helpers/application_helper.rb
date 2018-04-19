module ApplicationHelper
  def url
    Rails.env == 'production' ? 'http://node.meowtechnology.com': 'http://192.168.31.184:3000'
  end
end
