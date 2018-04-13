Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  post 'signin', action: :signin, controller: 'welcome'
  get 'qcode', action: :qcode, controller: 'welcome'
  get 'tip', action: :tip, controller: 'welcome'
end
