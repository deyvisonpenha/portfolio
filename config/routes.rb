Rails.application.routes.draw do
  get 'portfolio/index'

  get 'portfolio/login'

  get 'portfolio/about'

  resources :invoices

  root to: 'portfolio#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
