Rails.application.routes.draw do
  #get 'responsive/teste', controller:"responsive", action:"teste", as: "responsive"
  get 'teste' => 'responsive#teste'

  #get 'pages/index'

  root to: "pages#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
